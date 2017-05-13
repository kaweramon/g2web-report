package g2report.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import g2report.domain.Client;
import g2report.repository.ClientRepository;

@Service
public class ClientServiceImpl implements ClientService {

	@Autowired
	private ClientRepository repository;
	
	public List<Client> list() {
		return (List<Client>) repository.findAll();
	}

}
