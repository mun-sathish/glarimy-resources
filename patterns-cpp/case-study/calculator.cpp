#include <iostream>
#include <iterator>
#include <map>

using namespace std; 

/* -------- library ------------*/

class Menu;
class MenuBuilder;
class IMenuItem;
class Display;

class Handler {
    public:
        virtual void handle() = 0;
};

class ExitHandler: public Handler
{
    public: 
        void handle() 
        {
            throw "Thanks!";
        }
};

class IMenuItem {
    public:
        virtual void onSelect() = 0;
        virtual string getLabel() = 0;
        virtual string accept(Display* display) = 0;
};

class Display
{
    public:
        virtual string show(IMenuItem* item) = 0;
        
};

class SimpleDisplay: public Display
{
    public:
        string show(IMenuItem* item)
        {
            return item->getLabel();
        }
};


class MenuItem: public IMenuItem {
    private:
        string label;
        Handler* handler;
    public:
        MenuItem(string label, Handler* handler)
        {
            this->label = label;
            this->handler = handler;
        }
        void onSelect() 
        {
            this->handler->handle();
        }
        string getLabel()
        {
            return this->label;
        }
        string accept(Display* display)
        {
            return display->show(this);
        }
};

class Menu 
{
    private:
        map<int, MenuItem *> items;
        string banner;
        Display* display;
        int count;
    public:
        Menu()
        {
            count = 0;
            display = new SimpleDisplay();
        }
        void setBanner(string banner)
        {
            this->banner = banner;
        }
        void add(MenuItem* item)
        {
            this->items.insert(pair<int, MenuItem *>(++count, item));
        }
        void setDisplay(Display* display)
        {
            this->display = display;
        }
        void start() 
        {
            int option;
            bool ok = true;
            while(ok){
                try {
                    cout << this->banner << " ";
                    cout << "[ Choose: ";
                    map<int, MenuItem *>::iterator i;
                    for (i = items.begin(); i != items.end(); ++i)
                        cout << i->first << "" <<i->second->accept(this->display) << " ";
                    cout << "]  ";
                    cin >> option;
                    if(option > 0 && option <= count)
                    {
                        items.at(option)->onSelect();
                    }else{
                        cout << "Wrong option. Try again ..." << endl;
                    }
                }catch(char const* message){
                    cout << message << endl;
                    ok = false;
                }
            }
        }
};

class MenuBuilder
{
    private:
        Menu* menu;
    public:
        MenuBuilder()
        {
            this->menu = new Menu();
        }
        MenuBuilder* add(MenuItem* item)
        {
            menu->add(item);
            return this;
        }
        MenuBuilder* add(Display* display)
        {
            menu->setDisplay(display);
            return this;
        }
        Menu* build(string banner){
            menu->add(new MenuItem("Exit", new ExitHandler()));
            this->menu->setBanner(banner);
            return menu;
        }
};

/* -------- application ------------*/

class AddHandler: public Handler
{
    public: 
        void handle() 
        {
            int first, second, sum;
            cout << "Enter First Number: ";
            cin >> first;
            cout << "Enter Second Number: ";
            cin >> second;
            sum = first + second;
            cout << first << " + " << second << " = " << sum << endl;
        }
};

class MultiplyHanlder: public Handler
{
    public: 
        void handle() 
        {
            int first, second, product;
            cout << "Enter First Number: ";
            cin >> first;
            cout << "Enter Second Number: ";
            cin >> second;
            product = first * second;
            cout << first << " * " << second << " = " << product << endl;
        }
};

class SubtractionHandler: public Handler
{
    public: 
        void handle() 
        {
            int first, second, diff;
            cout << "Enter First Number: ";
            cin >> first;
            cout << "Enter Second Number: ";
            cin >> second;
            diff = first - second;
            cout << first << " - " << second << " = " << diff << endl;
        }
};

class ColonDisplay: public Display
{
    public:
        string show(IMenuItem* item)
        {
            return ":" + item->getLabel();
        }
};

class HyphenDisplay: public Display
{
    public:
        string show(IMenuItem* item)
        {
            return "-" + item->getLabel();
        }
};

class MenuFactory {
    public:
        static Menu* getMenu() 
        {
            MenuItem* add = new MenuItem("Add", new AddHandler());
            MenuItem* multiply = new MenuItem("Multiply", new MultiplyHanlder());
            MenuItem* diff = new MenuItem("Difference", new SubtractionHandler());
            MenuBuilder* builder = new MenuBuilder();
            Menu* menu = builder
            ->add(add)
            ->add(multiply)
            ->add(new HyphenDisplay())
            ->add(diff)
            ->build("CALCULATOR");
            return menu;
        }
};

class Calculator
{
    private:
        Menu* menu;
    public:
        Calculator()
        {
            menu = MenuFactory::getMenu();
        }

        void start()
        {
            menu->start();
        }
};

int main() {
    Calculator* calc = new Calculator();
    calc->start();
}