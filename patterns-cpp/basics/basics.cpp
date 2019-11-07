#include <iostream>
using namespace std;

class Parameters
{
    public:
        int param1;
        int param2;
        int param3;
        Parameters(int p1, int p2, int p3)
        {
            param1 = p1;
            param2 = p2;
            param3 = p3;
        }
};

class Component
{
    public:
        virtual void process(Parameters params)=0;
};

class ConcreteComponent: public Component
{
    public:
        ConcreteComponent();
        void process(Parameters params);
};

ConcreteComponent::ConcreteComponent()
{

}

void ConcreteComponent::process(Parameters params)
{
    cout << "processing using the parameters " << params.param1 << ", " << params.param2 << ", " << params.param3 << endl;
}


int main()
{
    Component* component = new ConcreteComponent();
    component->process(Parameters(1, 2, 3));
    return 0;
}