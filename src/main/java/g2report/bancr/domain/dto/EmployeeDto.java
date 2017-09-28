package g2report.bancr.domain.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;

import g2report.bancr.domain.Employee;
import lombok.Data;

@Data
public class EmployeeDto {

	private Integer id;
	private String name;
	private String login;
	private String password;
	private String situation;
	private String profession;
	
	public static EmployeeDto fromObject(Employee employee) {
		EmployeeDto employeeDto = new EmployeeDto();
		BeanUtils.copyProperties(employee, employeeDto);
		return employeeDto;
	}
	
	public static List<EmployeeDto> fromObject(List<Employee> listEmployees) {
		List<EmployeeDto> listEmployeeDto = new ArrayList<EmployeeDto>();
		for (Employee employee : listEmployees) {
			listEmployeeDto.add(fromObject(employee));
		}
		return listEmployeeDto;
	}
	
}
