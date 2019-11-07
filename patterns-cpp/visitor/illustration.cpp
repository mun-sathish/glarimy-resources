#include <iostream>

using namespace std; 

class Consultant;
class Employee;
class HealthyEmployee;

class Employee
{
    public:
        virtual int getId() = 0;
        virtual float getSalary() = 0;
        virtual void accept(Consultant* conculatant) = 0;
};

class HealthyEmployee: public Employee 
{
    public:
        virtual string getBloodgroud() = 0;
};

class Consultant
{
    public:
        virtual void visit(Employee* employee) = 0;
};

class Engineer: public Employee
{
    private:
        int id;
        float salary;
    public:
        Engineer(int id, float salary)
        {
            this->id = id;
            this->salary = salary;
        }
        int getId() 
        {
            return this->id;
        }
        float getSalary()
        {
            return this->salary;
        }
        void accept(Consultant* consulatant)
        {
            consulatant->visit(this);
        }
};

class HealthyEngineer: public HealthyEmployee, Engineer
{
    public:
        HealthyEngineer(int id, float salary):Engineer(id, salary){}
        string getBloodgroud() {
            return "O+";
        }
        int getId() 
        {
            return Engineer::getId();
        }
        float getSalary() 
        {
            return Engineer::getSalary();
        }
        void accept(Consultant* c) 
        {
            return Engineer::accept(c);
        }

};

class TaxConsultant : public Consultant
{
    public:
    float computeTax(float salary){
        return salary * 0.1;
    }
    void visit(Employee* employee){
        float tax = this->computeTax(employee->getSalary());
        cout << "[Employee ID-" << employee->getId() << "] Tax: Rs." << tax << endl;
    }
};

class HealthConsultant : public Consultant
{
    public:
    void visit(Employee* employee){
        HealthyEmployee* he = (HealthyEmployee*) employee;
        cout << "[Employee ID-" << employee->getId() << "] " <<  he->getBloodgroud() << endl;
    }
};

int main()
{
    Employee* staff[3];
    staff[0] = new HealthyEngineer(1, 25000);
    staff[1] = new HealthyEngineer(2, 12560);
    staff[2] = new HealthyEngineer(3, 22985);

    Consultant* tc = new TaxConsultant();
    Consultant* hc = new HealthConsultant();

    for(int index=0; index<3; index++){
        staff[index]->accept(tc);
    }

    for(int index=0; index<3; index++){
        staff[index]->accept(hc);
    }

    return 0;
}