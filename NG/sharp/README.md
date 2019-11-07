# Sharp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Developers Guide

Here is the suggested way to work with multiple angular 6+ applications with shared code.

01. Create the angular project named 'sharp' sans test cases, using the angular/cli
ng g sharp -S

02. Move to the sharp folder and create a shared library named 'shared' optionally with prefix 'shared'
ng g library shared -p shared

03. Create an application named 'rocket' with prefix 'rkt'
ng g application rocket --prefix rkt

04. Create an application named 'marvel' with prefix 'mrl'
ng g application marvel --prefix mrl

05. Generate a component which we would want to make reusable
ng g component Widget --project shared

06. Export the Widget component from the shared.module.ts
exports: [SharedComponent, WidgetComponent]

07. Build the shared library
ng build shared

08. Import SharedModule  in to the rocket/src/app/app.module.ts.

import { SharedModule } from 'shared';
...
imports: [
BrowserModule, SharedModule
]

09. Use the Widget in the rocket/src/app/app.component.html
<shared-widget></shared-widget>

10. Run the project rocket to see the results
ng serve rocket

11. Make changes to the shared components.
12. Build the library again before running the rocket app