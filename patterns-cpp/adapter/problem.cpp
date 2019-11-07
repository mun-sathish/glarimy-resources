#include <iostream>
using namespace std; 

class Component
{
    public:
        Component();
        void process();
};

Component::Component()
{
    
}

void Component::process()
{
    cout << "Component::process => processing" << endl;
}

int main()
{
    Component component = Component();
    component.process();
    return 0;
}