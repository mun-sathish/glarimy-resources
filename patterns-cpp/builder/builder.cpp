#include <iostream>
using namespace std;

class Component
{
  public:
    virtual void print() = 0;
};

class ConcreteComponent : public Component
{
  private:
    ConcreteComponent(int one, int two, int three, int four, int five): 
        partOne(one), partTwo(two), partThree(three), partFour(four), partFive(five){};
    int partOne;
    int partTwo;
    int partThree;
    int partFour;
    int partFive;

  public:
    void print()
    {
        cout << "ConcreteComponent::print => part one: " << partOne << endl;
        cout << "ConcreteComponent::print => part two: " << partTwo << endl;
        cout << "ConcreteComponent::print => part three: " << partThree << endl;
        cout << "ConcreteComponent::print => part four: " << partFour << endl;
        cout << "ConcreteComponent::print => part five: " << partFive << endl;
    }
    class ComponentBuilder;
};

class ConcreteComponent::ComponentBuilder
{
  private:
    int one, two, three, four, five;
  public:
    ComponentBuilder()
    {
        one = two = three = four = five = 0;
    }
    ComponentBuilder *addPartOne(int part)
    {
        one = part;
        return this;
    }
    ComponentBuilder *addPartTwo(int part)
    {
        two = part;
        return this;
    }
    ComponentBuilder *addPartThree(int part)
    {
        three = part;
        return this;
    }
    ComponentBuilder *addPartFourth(int part)
    {
        four = part;
        return this;
    }
    ComponentBuilder *addPartFifth(int part)
    {
        five = part;
        return this;
    }
    ConcreteComponent *build()
    {
        return new ConcreteComponent(one, two, three, four, five);
    }
};

int main()
{
    ConcreteComponent* comp = ConcreteComponent::ComponentBuilder().addPartOne(10)->addPartThree(30)->addPartFourth(40)->addPartFifth(50)->build();
    comp->print();
    return 0;
}