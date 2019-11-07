#include <iostream>
using namespace std; 

class PlaceHolder;

class Template
{
    public:
        virtual void algorithm(PlaceHolder* holder) = 0;
};

class PlaceHolder
{
    public:
        virtual void handle() = 0;
};

class ConcreteTemplate: public Template
{
    void algorithm(PlaceHolder* holder)
    {
        cout << "ConcreteTemplate::algorithm => doing the job" << endl;
        holder->handle();
        cout << "ConcreteTemplate::algorithm => finishng the job" << endl;
    }
};

class ConcretePlaceHolder: public PlaceHolder
{
    public:
        void handle() 
        {
            cout << "ConcretePlaceHolder::handle => filling the gaps" << endl;            
        }
};

int main()
{
    Template* t = new ConcreteTemplate();
    PlaceHolder* p = new ConcretePlaceHolder();
    t->algorithm(p);
    return 0;
}