class Employee {
    private long id;
    private String name;
    private double salary;
    private String status;
    public String toString(){
        return "${id} - ${name}"
    }
}

interface Directory {
    public add(Employee emp)
    public find(long id)
    public search(Closure closure)
    public list()
}

trait Printable {
    public print() {
        staff.values().each({print "$it "})
    }
}

class EmployeeDirectory implements Directory, Printable{
    private staff = [:]
    public add(Employee emp){
        staff[emp.id] = emp
    }
    public find(long id){
        return staff[id]
    }
    public search(Closure closure){
        return staff.find(closure)
    }
    public list(){
        return staff.values()
    }
}

Directory dir = new EmployeeDirectory()
dir.add(new Employee(id:1, name:'Krishna', salary:1000, status:'active'))
dir.add(new Employee(id:2, name:'Vamsi', salary:500, status:'active'))
println "Employee with ID: 1 => ${dir.find(1)}"
println "Employees with name Vamsi => ${dir.search({it.value['name'].contains('Vamsi')})}"
println "List of Employees => ${dir.list()}"
dir.print();