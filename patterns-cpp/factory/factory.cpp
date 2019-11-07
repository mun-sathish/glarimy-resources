#include <iostream>
using namespace std; 

class Component 
{
    public:
        virtual void process() = 0;
};

class Factory
{
    public:
        static Component* getComponent();
};

class ConcreteComponent : public Component
{
    public:
        ConcreteComponent();
        void process();
};

ConcreteComponent::ConcreteComponent()
{
    
}

void ConcreteComponent::process()
{
    cout << "ConcreteComponent::process => processing" << endl;
}

Component* Factory::getComponent()
{
    cout << "Factory::getComponent => creating and supplying component" << endl;
    return new ConcreteComponent();
}



int main()
{
    cout << "Client::main => requesing factory for a component" << endl;
    Component* component = Factory::getComponent();
    cout << "Client::main => received component" << endl;
    cout << "Client::main => using component" << endl;
    component->process();
    return 0;
}