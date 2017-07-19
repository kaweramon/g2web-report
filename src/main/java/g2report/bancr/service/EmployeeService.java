package g2report.bancr.service;

import g2report.bancr.domain.Employee;
import g2report.generic.EventException;

public interface EmployeeService {
	
	public Employee isEmployeeRegistered(String login, String password) throws EventException;
}
