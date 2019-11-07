#include <iostream>
using namespace std; 

class Component
{
    public:
        virtual void print() = 0;
        virtual void setName(string name) = 0;
};

class ConcreteComponent: public Component
{
    private:
        string name;
    public:
        static ConcreteComponent* getInstance()
        {
            static ConcreteComponent* instance = new ConcreteComponent(); 
            return instance;
        }
        void setName(string name)
        {
            this->name = name;
        }
        void print()
        {
            cout << "ConcreteComponent::print => name: " << name << endl;
        }
};

int main()
{
    Component* first = ConcreteComponent::getInstance();
    first->setName("First");
    Component* second = ConcreteComponent::getInstance();
    first->print();
    second->print();
    second->setName("Second");
    first->print();
    second->print();
    return 0;
}