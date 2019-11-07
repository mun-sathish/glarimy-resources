#include <iostream>
#include <iterator> 
#include <map> 

using namespace std; 

class Member
{
    public:
        virtual void send(string message) = 0;
        virtual void receive(string message) = 0;
        virtual void add(Member* member) = 0;
        virtual int getId() = 0;
};

class ConcreteMember: public Member
{
    private: 
        map<int, Member*> peers;
        int id;
    public:
        ConcreteMember(int id);
        int getId();
        void send(string message);
        void receive(string message);
        void add(Member* member);
};

ConcreteMember::ConcreteMember(int id)
{
    this->id = id;
}

int ConcreteMember::getId() 
{
    return this->id;
}

void ConcreteMember::add(Member* member)
{
    int id = member->getId();
    this->peers.insert(pair<int, Member*>(id, member));
}

void ConcreteMember::receive(string message)
{
    cout << "ConcreteMember-"<<this->getId()<<"::receive => received " << message << endl;
}

void ConcreteMember::send(string message)
{
    map<int, Member*>::iterator i;
    for (i = peers.begin(); i != peers.end(); ++i)
        i->second->receive(message);
}

int main()
{
    Member* first = new ConcreteMember(1);
    Member* second = new ConcreteMember(2);
    Member* third = new ConcreteMember(3);

    first->add(second);
    first->add(third);

    second->add(first);
    second->add(third);

    third->add(first);
    third->add(second);

    first->send("Hello");
    return 0;
}