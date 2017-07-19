package g2report.bancr.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import g2report.bancr.domain.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

	public Employee findEmployeeByLoginAndPassword(String login, String password);
}
