package g2report.bancr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2report.bancr.domain.dto.ClientDto;
import g2report.bancr.service.ClientService;

@Controller
@RequestMapping(value = "/client")
public class ClientController {

	@Autowired
	private ClientService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<ClientDto> list() {
		return ClientDto.fromObject(service.list());
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/search")
	public @ResponseBody List<ClientDto> search(@RequestParam("search") String search) {
		return ClientDto.fromObject(service.search(search));
	}
}
