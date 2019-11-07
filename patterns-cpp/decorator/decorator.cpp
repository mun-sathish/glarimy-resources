#include <iostream>
using namespace std; 

class Component
{
    public:
        virtual void mandatory() = 0;
};

class ConcreteComponent: public Component
{
    public:
        ConcreteComponent();
        void mandatory();
};

ConcreteComponent::ConcreteComponent()
{
    
}

void ConcreteComponent::mandatory()
{
    cout << "ConcreteComponent::mandatory => executing" << endl;
}

class Decorator : public Component 
{
    private:
        Component* target;
    public:
        Decorator(Component* target);
        void mandatory();
        void optional();
};

Decorator::Decorator(Component* target)
{
    this->target = target;
}

void Decorator::mandatory()
{
    cout << "Decorator::mandatory => pre-processing" << endl;
    this->target->mandatory();
    cout << "Decorator::mandatory => post-processing" << endl;
}

void Decorator::optional()
{
    cout << "Decorator::optional => executing" << endl;
}

int main()
{
    Component* component = new ConcreteComponent();
    Decorator* decorator = new Decorator(component);
    decorator->mandatory();
    decorator->optional();
    return 0;
}