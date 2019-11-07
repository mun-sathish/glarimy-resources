#include <iostream>
using namespace std; 

class Component
{
    public:
        virtual void mandatory() = 0;
        virtual void optional() = 0;
};

class ConcreteComponent: public Component
{
    public:
        ConcreteComponent();
        void mandatory();
        void optional();
};

ConcreteComponent::ConcreteComponent()
{
    
}

void ConcreteComponent::mandatory()
{
    cout << "ConcreteComponent::mandatory => executing" << endl;
}

void ConcreteComponent::optional()
{
    cout << "ConcreteComponent::optional => executing" << endl;
}

int main()
{
    Component* component = new ConcreteComponent();
    component->mandatory();
    component->optional();
    return 0;
}