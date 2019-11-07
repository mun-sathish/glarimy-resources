#include <iostream>
using namespace std; 

class Handler
{
    public:
        virtual void handle() = 0;
        virtual void add(Handler* handler) = 0;
};

class ConcreteHandler: public Handler 
{
    private:
        Handler* next;
        string name;
    public:
        ConcreteHandler(string name)
        {
            this->next = NULL;
            this->name = name;
        }
        void handle()
        {
            cout << name << "::handle => pre-processing" << endl;
            if(next)
                next->handle();
            cout << name << "::handle => post-processing" << endl;
        }
        void add(Handler* handler)
        {
            this->next = handler;
        }
};

int main()
{
    Handler* first = new ConcreteHandler("First");
    Handler* second = new ConcreteHandler("Second");
    Handler* third = new ConcreteHandler("Third");
    Handler* fourth = new ConcreteHandler("Fourth");

    third->add(fourth);
    second->add(third);
    first->add(second);

    first->handle();
    return 0;
}