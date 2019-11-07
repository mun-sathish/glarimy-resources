import Employee from './Employee';
import Manager from './Manager';
import Directory from './Directory';

let directory = new Directory();
try {
    directory.add(new Employee("GTS0006", "Prabhu Deva Pangidi", "prabhudeva.pangidi@glarimy.com"));
    directory.add(new Manager("GTS0001", "Krishna Mohan Koyya", "krishna@glarimy.com", ["GTS0006"]));
    directory.add(new Manager("GTS0001", "Krishna Mohan Koyya", "krishna@glarimy.com"));
} catch (error) {
    console.log(error);
}
try {
    directory.print();
    directory.find("GTS0001").print();
} catch (error) {
    console.log(error);
}