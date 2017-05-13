package g2report.service;

import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import g2report.domain.QuickSell;
import g2report.repository.QuickSellRepository;
import g2report.service.quicksell.search.QuickSellSpecificationBuilder;

@Service
public class QuickSellServiceImpl implements QuickSellService {

	@Autowired
	private QuickSellRepository repository;
	
	public List<QuickSell> listQuickSellReport(Date dateFrom, Date dateTo) {		
		return (List<QuickSell>) repository.findAllAndClient(dateFrom, dateFrom);
	}

	public List<QuickSell> search(String search) {
		Specification<QuickSell> spec = processSpecification(search);
		return repository.findAll(spec);
	}

	private Specification<QuickSell> processSpecification(String search) {
		QuickSellSpecificationBuilder builder = new QuickSellSpecificationBuilder();

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
