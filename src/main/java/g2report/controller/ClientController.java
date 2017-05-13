package g2report.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import g2report.domain.Client;
import g2report.domain.dto.ClientDto;
import g2report.service.ClientService;

@Controller
@RequestMapping(value = "client")
public class ClientController {

	@Autowired
	private ClientService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<ClientDto> list() {
		List<ClientDto> listClientDto = new ArrayList<ClientDto>();
		
		for (Client client : service.list()) {
			ClientDto clientDto = new ClientDto();
			BeanUtils.copyProperties(client, clientDto);
			listClientDto.add(clientDto);
		}
		
		return listClientDto;
	}
}
