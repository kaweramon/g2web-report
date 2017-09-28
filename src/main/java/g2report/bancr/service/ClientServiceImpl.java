package g2report.bancr.service;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import g2report.bancr.domain.Client;
import g2report.bancr.repository.ClientRepository;
import g2report.bancr.service.search.client.ClientSpecificationBuilder;
import g2report.g2mensagem.domain.Liberation;
import g2report.g2mensagem.repository.LiberationRepository;
import g2report.generic.EventException;

@Service
public class ClientServiceImpl implements ClientService {

	@Autowired
	private ClientRepository repository;
	
	@Autowired
	private LiberationRepository liberationRepository;
	
	public List<Client> list() {
		return (List<Client>) repository.findAll();
	}

	public List<Client> search(String search, Boolean isLiberation) throws EventException {
		Specification<Client> spec = processSpecification(search);
		List<Client> tempClients = repository.findAll(spec);
		
		if (tempClients == null || tempClients.size() == 0) {
			throw new EventException("Nenhum resultado encontrado", HttpStatus.NOT_FOUND);
		}
		
		List<Client> clients = new ArrayList<Client>();
		if (isLiberation) {
			for (Client tempClient: tempClients) {
				Liberation liberation = liberationRepository.findOneByClientId(tempClient.getId());
				if (liberation != null) {
					tempClient.setLiberation(liberation);
					clients.add(tempClient);
				}
			}
		} else {
			return tempClients;
		}
				
		return clients;
	}

	private Specification<Client> processSpecification(String search) {
		ClientSpecificationBuilder builder = new ClientSpecificationBuilder();

		String[] searchQuery = search.split(",");
		
		Pattern pattern = Pattern.compile("(\\w+?)(=|:|<|>)(\\w+?)");
		Matcher matcher = null;
		for (String param: searchQuery) {
			matcher = pattern.matcher(param);
			if (matcher.find()) {
				String[] params = param.split(matcher.group(2));
				builder.with(matcher.group(1), matcher.group(2), params[1]);
			}
		}
		
		return builder.build();
	}
	
}
