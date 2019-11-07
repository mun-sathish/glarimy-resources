#include <iostream>
using namespace std;

class Component
{
    public:
        Component()
        {

        }
        bool process(int param1, int param2, int param3)
        {
            cout << "processing using the parameters " << param1 << ", " << param2 << ", " << param3 << endl;
            return true;
        }
};

int main()
{
    Component component = Component();
    component.process(1, 2, 3);
    return 0;
}