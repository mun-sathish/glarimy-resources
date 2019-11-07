#include <iostream>
using namespace std; 

class State 
{
    public:
        virtual State* onTrigger() = 0;
        virtual void print() = 0;
};

class InitialState: public State
{
    public:
        State* onTrigger();
        void print();
};

class SecondState: public State
{
    public:
        State* onTrigger();
        void print();
};

class ThirdState: public State
{
    public:
        State* onTrigger();
        void print();
};

State* InitialState::onTrigger()
{
    return new SecondState();
}
void InitialState::print()
{
    cout << "InitialState::print" << endl;
}

State* SecondState::onTrigger()
{
    return new ThirdState();
}
void SecondState::print()
{
    cout << "SecondState::print" << endl;
}

State* ThirdState::onTrigger()
{
    return new InitialState();
}
void ThirdState::print()
{
    cout << "ThirdState::print" << endl;
}

class Context
{
    public:
        virtual void next() = 0;
};

class ConcreteContext: public Context
{
    private:
        State* current;
    public:
        ConcreteContext()
        {
            current = new InitialState();
            current->print();
        }
        void next()
        {
            current = current->onTrigger();
            current->print();
        }
};

int main()
{
    Context* context = new ConcreteContext();
    context->next();
    context->next();
    context->next();
    context->next();
    context->next();
    return 0;
}