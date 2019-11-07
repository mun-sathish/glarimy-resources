package com.glarimy.directory.client;

import java.util.List;

import com.glarimy.directory.api.domain.Employee;
import com.glarimy.directory.service.EmployeeDirectoryImpl;

public class EmployeeDirectoryConsole {

	public static void main(String[] args) {
		EmployeeDirectoryImpl dir = new EmployeeDirectoryImpl();
		Employee first = new Employee(123, "Kriahna", 98989898);
		Employee second = new Employee(234, "Koyya", 7767676);
		dir.add(first);
		dir.add(second);
		List<Employee> staff = dir.search();
		System.out.println("Employee List: " + staff);
	}

}
