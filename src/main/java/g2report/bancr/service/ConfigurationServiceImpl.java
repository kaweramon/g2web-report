package g2report.bancr.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import g2report.bancr.domain.Configuration;
import g2report.bancr.repository.ConfigurationRepository;

@Service
public class ConfigurationServiceImpl implements ConfigurationService {

	@Autowired
	private ConfigurationRepository repository;

	public Boolean isG2Interno() {
		
		ArrayList<Configuration> listConfigurations = (ArrayList<Configuration>) repository.findAll();
		if (listConfigurations != null) {
			return listConfigurations.get(0).getIsG2Intero();
		}
		
		return null;
	}
	
}
