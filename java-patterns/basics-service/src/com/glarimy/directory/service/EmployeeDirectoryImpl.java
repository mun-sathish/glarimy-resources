package com.glarimy.directory.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.glarimy.directory.api.EmployeeDirectory;
import com.glarimy.directory.api.domain.Employee;
import com.glarimy.directory.api.exceptions.DuplicateEmployeeException;
import com.glarimy.directory.api.exceptions.EmployeeDirectoryException;
import com.glarimy.directory.api.exceptions.EmployeeNotFoundException;
import com.glarimy.directory.api.exceptions.InvalidEmployeeException;

public class EmployeeDirectoryImpl implements EmployeeDirectory {
	private Map<Integer, Employee> items;

	public EmployeeDirectoryImpl() {
		items = new HashMap<Integer, Employee>();
	}

	@Override
	public void add(Employee employee)
			throws InvalidEmployeeException, DuplicateEmployeeException, EmployeeDirectoryException {
		if (employee == null || employee.getId() < 1 || employee.getName() == null
				|| employee.getName().trim().length() == 0 || employee.getPhone() < 1)
			throw new InvalidEmployeeException();
		if (items.get(employee.getId()) != null)
			throw new DuplicateEmployeeException();
		items.put(employee.getId(), employee);

	}

	@Override
	public Employee find(int id) throws EmployeeNotFoundException, EmployeeDirectoryException {
		Employee employee = items.get(id);
		if (employee == null)
			throw new EmployeeNotFoundException();
		return employee;
	}

	@Override
	public List<Employee> search() throws EmployeeDirectoryException {
		return new ArrayList<Employee>(items.values());
	}

}
