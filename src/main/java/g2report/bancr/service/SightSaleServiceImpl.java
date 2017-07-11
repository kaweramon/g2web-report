package g2report.bancr.service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import g2report.bancr.domain.SightSale;
import g2report.bancr.repository.SightSaleRepository;
import g2report.bancr.service.search.sightsale.SightSaleSpecificationBuilder;

@Service
public class SightSaleServiceImpl implements SightSaleService {

	@Autowired
	private SightSaleRepository repository;
	
	public List<SightSale> searchSale(String search) {
		Specification<SightSale> spec = processSpecification(search);
		return repository.findAll(spec);
	}

	private Specification<SightSale> processSpecification(String search) {
		SightSaleSpecificationBuilder builder = new SightSaleSpecificationBuilder();

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
