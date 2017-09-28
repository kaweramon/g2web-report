package g2report.bancr.service;

import java.util.List;

import g2report.bancr.domain.Employee;
import g2report.generic.EventException;

public interface EmployeeService {
	
	public Employee isEmployeeRegistered(String login, String password) throws EventException;
	
	public List<Employee> getListEmployeeSalesman();
	
	public Employee getById(Integer employeeId) throws EventException;
}
