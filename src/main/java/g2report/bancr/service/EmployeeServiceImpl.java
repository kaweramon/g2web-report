package g2report.bancr.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import g2report.bancr.domain.Employee;
import g2report.bancr.repository.EmployeeRepository;
import g2report.generic.EventException;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository repository;
	
	public Employee isEmployeeRegistered(String login, String password) throws EventException {
		Employee employee = repository.findEmployeeByLoginAndPassword(login, password);
		if (employee == null) {
			throw new EventException("Funcionário não cadastrado", HttpStatus.UNAUTHORIZED);
		}
		return employee;
	}

}
