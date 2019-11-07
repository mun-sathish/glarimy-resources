# Drupal 8 Recipies #

## Custom Module ##
Problem Statement: Create a custom module along with a menu link, configuration and help.

Step-1: Assume that the drupal is installed at `/var/www/html`. Move to the `modules` folder within it and create necessary folder for a custom module by name `glarimy`.
```
    cd /var/www/html/modules
    mkdir custom
    cd custom
    mkdir glarimy
    cd glarimy
    mkdir src
    cd src
    mkdir Controller
    mkdir Form
    cd ../..
```
Step-2: Create the `.info` file for the module
```
    touch glarimy.info.yml
```
And add the following content
```
    name: Glarimy
    description: a simple module
    type: module
    core: 8.x
    package: Custom
```
Step-3: Create the `.module` file for the module 
```
    touch glarimy.module
```
And add the following content for hooks
```
<?php

use Drupal\Core\Routing\RouteMatchInterface;

/**
 * Implements hook_help().
 */
function glarimy_help($route_name, RouteMatchInterface $route_match) {
  switch ($route_name) {
    case 'help.page.greeting':
      $output = '';
      $output .= '<h3>' . t('About') . '</h3>';
      $output .= '<p>' . t('This is an example module.') . '</p>';
      return $output;

    default:
  }
}
```
Step-4: Create the `.links.menu.yml` for defining menu
```
    touch glarimy.links.menu.yml
```
And add the following content
```
  glarimy.menu:
  title: 'Quote of the Day'
  description: 'QoD Page'
  parent: main
  menu_name: main
  route_name: glarimy.hello
```
Step-5: Create the `.routing.yml` for defining two routes: one for showing the content and another one for config form
```
  touch glarimy.routing.yml
```
And add the following content
```
glarimy.hello:
  path: '/hello'
  defaults:
    _controller: '\Drupal\glarimy\Controller\HelloController::hello'
    _title: 'Our first route'
  requirements:
    _permission: 'access content'

glarimy.quote:
  path: '/admin/config/quote'
  defaults:
    _form: '\Drupal\glarimy\Form\QuoteConfigurationForm'
    _title: 'Quote configuration'
  requirements:
    _permission: 'administer site configuration'
```
Step-6: Create the `.services.yml` for defining a new service
```
  touch glarimy.services.yml
```
And add the following content
```
services:
  glarimy.quote:
    class: Drupal\glarimy\QuoteService
    arguments: ['@config.factory']
```
Step-7: Create the service
```
  touch /src/QuoteService.php
```
And add this content
```
namespace Drupal\glarimy;

use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\Core\Config\ConfigFactoryInterface;  

/**
 * Prepares the quote.
 */
class QuoteService {

  /**
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
   protected $configFactory;

  /**
   * QuoteService constructor.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   */
  public function __construct(ConfigFactoryInterface $config_factory) {
    $this->configFactory = $config_factory;
  }

  
  /**
   * Returns the quote
   */
  public function getQuote() {
    $config = $this->configFactory->get('glarimy.quote');
	$quote = $config->get('quote');
	if ($quote != "") {
	  return $quote;
	}
  }
}
```
Step-8: Create the controller
```
  touch src/Controller/HelloController.php
```
And fill the content
```
<?php
namespace Drupal\glarimy\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\glarimy\QuoteService;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Controller for the quote message.
 */
class QuoteController extends ControllerBase {

	/**
	 * @var \Drupal\glarimy\QuoteService
	 */
	protected $service;

	/**
	 * QuoteController constructor.
	 *
	 * @param \Drupal\glarimy\QuoteService $service
	 */
	public function __construct(QuoteService $service) {
	  $this->service = $service;
	}

	/**
	 * {@inheritdoc}
	 */
	public static function create(ContainerInterface $container) {
	  return new static(
	    $container->get('glarimy.quote')
	  );
	}

	/**
	 * Hello.
	 *
	 * @return array
	 */
	public function hello() {
		return [
		  '#markup' => $this->service->getQuote(),
		];
	}
}
```
Step-9: Create the form
```
  touch src/Form/QuoteForm.php
```
And add the content
```
<?php

namespace Drupal\glarimy\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configuration form definition for the quote.
 */
class QuoteForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['glarimy.quote'];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'quote_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('glarimy.quote');

    $form['quote'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('Quote'),
      '#description' => $this->t('Please provide the quote for the day.'),
      '#default_value' => $config->get('quote'),
    );

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('glarimy.quote')
      ->set('quote', $form_state->getValue('quote'))
      ->save();

    parent::submitForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
	public function validateForm(array &$form, FormStateInterface $form_state) {
	  $quote = $form_state->getValue('quote');
	  if (strlen($quote) > 20) {
	    $form_state->setErrorByName('quote', $this->t('This quote is too long'));
	  }
	}
}
```

## Custom Theme ##
Problem Statement: A content type with machine name `announcement` is having fields: `body`, `field_from` and `field_captcha`. Design a theme along with a template to show the announcement content.

Step-1: Assume that the drupal is installed at `/var/www/html`. Move to the `themes` folder within it

```
    cd /var/www/html/themes
```

Step-2: Let's a create a theme by name `glarimy`. For that, create a folder by name `glarimy`.

```
    mkdir glarimy
    cd glarimy
``` 

Step-3: Create the `.info` file

```
    touch glarimy.info.yml
```
And add the following content to the file

```
name: Glarimy 
type: theme 
description: 'A simple theme' 
core: 8.x 
base theme: classy 
 
libraries: 
   - glarimy/global 
 
regions: 
  header: Header 
  primary_menu: 'Primary menu' 
  secondary_menu: 'Secondary menu' 
  breadcrumb: Breadcrumb 
  help: Help 
  highlighted: Highlighted 
  content: Content 
  sidebar_first: 'Left sidebar' 
  sidebar_second: 'Right sidebar' 
  footer: Footer 
  page_top: 'Page top' 
  page_bottom: 'Page bottom' 
```

Step-4: Create the `.libraries` file

```
    touch glarimy.libraries.yml
```
And add the following content to the file

```
global: 
  css: 
    theme: 
      css/styles.css: {} 
  js: 
    js/scripts/js: {} 
```

Step-5: Create the necessary folders and files according to the above. The files can be simply empty as well.
```
    mkdir css
    mkdir js
    touch css/styles.css
    touch js/scripts.js
```

Step-6: Create a custom template for the `announcement` content-type. For that create the necessary folders and files
```
    mkdir tempaltes
    mkdir templates/nodes
    touch templates/nodes/node--announcement.html.twig
```

And add the content to the above file
```
    Here is the announcement!
    <br/>
    {{ content.body }}
    <br/>
    Announced By: {{ content.field_from }}<br/>
    Published By: {{ node.field_from.value }}<br/>

    {{content.field_captha}}

    Got it? Thanks!
```
The complete solution is under [Custom Theme](custom-theme)

## Exposing to REST Clients ##

