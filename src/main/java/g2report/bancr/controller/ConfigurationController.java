package g2report.bancr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import g2report.bancr.service.ConfigurationService;

@Controller
@RequestMapping(path = "/isG2Interno")
public class ConfigurationController {

	@Autowired
	private ConfigurationService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody Boolean isG2Interno() {
		return service.isG2Interno();
	}
	
}
