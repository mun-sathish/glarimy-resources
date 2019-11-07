#include <iostream>
using namespace std; 

class Component 
{
    private:
        int similar;
        int different;
    public:
        Component(){
            cout << "Constructing the object" << endl;
            int a = 10;
            int b = 20;
            int c = 30;
            similar = a+b+c;
        }
        Component(const Component &other): similar(other.similar){}
        void setDifferentState(int different)
        {
            this->different = different;
        }
        void print()
        {
            cout << "SIMILAR: " << this->similar << endl;
            cout << "DIFFERENT: " << this->different << endl;
        }
};

class ComponentFactory
{
    private:
        Component prototype;

    public:
        Component* getComponent()
        {
            return new Component(prototype);
        }
};

int main()
{
    ComponentFactory factory;
    for(int i=0; i<10; i++)
    {
        Component* c = factory.getComponent();
        c->setDifferentState(i);
        c->print();
    }
    return 0;
}