package com.glarimy.directory.api;

import java.util.List;
import com.glarimy.directory.api.domain.Employee;
import com.glarimy.directory.api.exceptions.DuplicateEmployeeException;
import com.glarimy.directory.api.exceptions.EmployeeDirectoryException;
import com.glarimy.directory.api.exceptions.EmployeeNotFoundException;
import com.glarimy.directory.api.exceptions.InvalidEmployeeException;

/**
 * Provides interface for the employee directory services
 * 
 * @author glarimy
 *
 */
public interface EmployeeDirectory {
	/**
	 * Adds a new employee
	 * 
	 * @param employee a valid employee
	 * @throws InvalidEmployeeException   if employee id is not positive number or
	 *                                    if employee name is empty or employee
	 *                                    phone number is invalid
	 * @throws DuplicateEmployeeException if a employee with same id exists in the
	 *                                    system
	 * @throws EmployeeDirectoryException for any internal errors
	 */
	public void add(Employee employee)
			throws InvalidEmployeeException, DuplicateEmployeeException, EmployeeDirectoryException;

	/**
	 * Returns an employee with the supplied id
	 * 
	 * @param id a valid employee id
	 * @return Employee with the specified id
	 * @throws EmployeeNotFoundException  if no employee found in the system with
	 *                                    the supplied id
	 * @throws EmployeeDirectoryException for any internal errors
	 */
	public Employee find(int id) throws EmployeeNotFoundException, EmployeeDirectoryException;

	/**
	 * Returns a list with zero to any number of employees found in the system
	 * 
	 * @return An employee list (size may be zero as well)
	 * @throws EmployeeDirectoryException for any internal erros
	 */
	public List<Employee> search() throws EmployeeDirectoryException;
}