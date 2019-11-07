package com.glarimy.vertx;

import java.util.ArrayList;
import java.util.List;

public class DirectoryService {
	public static Employee find(int eid) {
		Employee employee = new Employee();
		employee.setEid(eid);
		employee.setName("Krishna");
		employee.setPhoneNumber(9731423166L);
		return employee;
	}

	public static List<Employee> list() {
		List<Employee> employees = new ArrayList<>();
		Employee employee = new Employee();
		employee.setEid(1234);
		employee.setName("Krishna");
		employee.setPhoneNumber(9731423166L);
		employees.add(employee);
		return employees;
	}

	public static Employee add(Employee employee) {
		return employee;
	}
}
