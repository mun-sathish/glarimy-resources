#include <menu.h>

use namesapce rbc;

class FileHandler: public MenuHandler
{
    public:
        public void handle() 
        {
            // something
        }
};

class HelpHandler: public MenuHandler
{
    public:
        public void handle()
        {
            // something
        }
};

int main() {
    MenuItem file = MenuFactory.get("File", new FileHandler());
    MenuItem help = MenuFactory.get("Help", new HelpHandler());
    MenuBuilder* builder = new MenuBuilder();
    builder.addItem(file);
    builder.addItem(help);
    Menu* menu = builder.build();
    menu.display();
}