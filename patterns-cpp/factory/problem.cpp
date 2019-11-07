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
    cout << "Client::main => creating a component" << endl;
    Component* component = new Component();
    cout << "Client::main => using the component" << endl;
    component->process();
    return 0;
}