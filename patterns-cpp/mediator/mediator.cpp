#include <iostream>
#include <iterator>
#include <map>

using namespace std;

class Mediator;
class Member
{
  public:
    virtual void send(string message) = 0;
    virtual void receive(string message) = 0;
    virtual int getId() = 0;
    virtual void setMediator(Mediator* mediator) = 0;
};

class ConcreteMember : public Member
{
  private:
    Mediator* mediator;
    int id;

  public:
    ConcreteMember(int id);
    int getId();
    void setMediator(Mediator* mediator);
    void send(string message);
    void receive(string message);
};

class Mediator
{
  public:
    virtual void add(Member *member) = 0;
    virtual void send(string message) = 0;
    virtual void receive(string message) = 0;
};

class ConcreteMediator : public Mediator
{
  private:
    map<int, Member *> members;

  public:
    ConcreteMediator();
    void add(Member *member);
    void send(string message);
    void receive(string message);
};

ConcreteMember::ConcreteMember(int id)
{
    this->id = id;
}

int ConcreteMember::getId()
{
    return this->id;
}

void ConcreteMember::setMediator(Mediator* mediator)
{
    this->mediator = mediator;
}

void ConcreteMember::receive(string message)
{
    cout << "ConcreteMember-" << this->getId() << "::receive => received " << message << endl;
}

void ConcreteMember::send(string message)
{
    this->mediator->receive(message);
}

ConcreteMediator::ConcreteMediator()
{
}

void ConcreteMediator::add(Member *member)
{
    int id = member->getId();
    this->members.insert(pair<int, Member *>(id, member));
    member->setMediator(this);
}

void ConcreteMediator::receive(string message)
{
    cout << "ConcreteMediator::receive => received " << message << endl;
    this->send(message);
}

void ConcreteMediator::send(string message)
{
    map<int, Member *>::iterator i;
    for (i = members.begin(); i != members.end(); ++i)
        i->second->receive(message);
}

int main()
{
    Mediator *mediator = new ConcreteMediator();
    Member *first = new ConcreteMember(1);
    Member *second = new ConcreteMember(2);
    Member *third = new ConcreteMember(3);

    mediator->add(first);
    mediator->add(second);
    mediator->add(third);

    first->send("hello");
    mediator->send("urgency");
    return 0;
}