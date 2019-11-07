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

class Adapter 
{
    public:
        virtual void adapt() = 0;
};

class ComponentAdapter: public Adapter
{
    private:
            Component* target;
    public:
        ComponentAdapter();
        void adapt();
};

ComponentAdapter::ComponentAdapter()
{
    this->target = new Component();
}

void ComponentAdapter::adapt()
{
    cout << "ComponentAdapter::adapt => adapting to component" << endl;
    this->target->process();
    cout << "ComponentAdapter::adapt => completed adaptation" << endl;
}

int main()
{
    Adapter* adapter = new ComponentAdapter();
    adapter->adapt();
    return 0;
}