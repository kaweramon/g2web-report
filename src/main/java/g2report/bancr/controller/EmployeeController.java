package g2report.bancr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2report.bancr.domain.Employee;
import g2report.bancr.service.EmployeeService;
import g2report.generic.EventException;

@Controller
@RequestMapping(path = "/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService service;
	
	@RequestMapping(path = "/login", method = RequestMethod.GET)
	public @ResponseBody Employee isEmployeeRegistered(@RequestParam("login") String login, @RequestParam("password") String password) throws EventException {
		return service.isEmployeeRegistered(login, password);
	}
}
