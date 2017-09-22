package g2report.bancr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import g2report.bancr.domain.dto.BudgetDto;
import g2report.bancr.service.BudgetService;
import g2report.generic.EventException;

@Controller
@RequestMapping(path = "/budget")
public class BudgetController {

	@Autowired
	private BudgetService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody BudgetDto getById(@RequestParam("budgetId") Integer budgetId) throws EventException {
		return BudgetDto.fromObject(service.getById(budgetId));
	}
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody BudgetDto budgetDto) {
		service.create(budgetDto.toObject());
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/search")
	public @ResponseBody List<BudgetDto> search(@RequestParam("query") String query) {
		return BudgetDto.fromObject(service.search(query));
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/last")
	public @ResponseBody BudgetDto getLast() {
		return BudgetDto.fromObject(service.getLast());
	}
	
}
