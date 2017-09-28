package g2report.bancr.service;

import java.util.List;

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

	public List<Employee> getListEmployeeSalesman() {
		return repository.findByProfessionAndSituation("VENDEDOR", "ATIVO");
	}

	public Employee getById(Integer employeeId) throws EventException {

		Employee employeeDB = repository.findOne(employeeId);
		
		if (employeeDB == null) {
			throw new EventException("Funcionário não encontrado", HttpStatus.NOT_FOUND);
		}
		
		return employeeDB;
	}

}
