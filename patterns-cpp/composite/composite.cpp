#include <iostream>
using namespace std; 

class Component
{
    public:
        virtual void print() = 0;
};

class Container: public Component
{
    public:
        virtual void add(Component* component) = 0;
        virtual void print() = 0;
};

class ConcreteComponent: public Component 
{
    public:
        void print()
        {
            cout << "ConcreteComponent::print => printing" << endl;
        }
};

class ConcreteContainer: public Container{
    private:
        Component* children[10];
        int count;
    public:
        ConcreteContainer()
        {
            count = 0;
        }
        void add(Component* component)
        {
            if(count < 10)
                children[count++] = component;
        }
        void print()
        {
            for(int index=0; index<count; index++)
            {
                children[index]->print();
            }
            cout << "ConcreteContainer::print => printing" << endl;
        }
};

int main()
{
    Container* c1 = new ConcreteContainer();
    c1->add(new ConcreteComponent());
    c1->add(new ConcreteComponent());
    c1->add(new ConcreteComponent());
    Container* c2 = new ConcreteContainer();
    c2->add(c1);
    c2->add(new ConcreteComponent());
    c2->print();
    return 0;
}