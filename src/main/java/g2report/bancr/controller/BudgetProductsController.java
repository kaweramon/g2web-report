package g2report.bancr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import g2report.bancr.domain.dto.BudgetProductsDto;
import g2report.bancr.service.BudgetProductsService;

@Controller
@RequestMapping(path = "/budget-products")
public class BudgetProductsController {

	@Autowired
	private BudgetProductsService service;
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody List<BudgetProductsDto> listBudgetProductsDto) {
		service.create(BudgetProductsDto.toObject(listBudgetProductsDto));	
	}
	
}
