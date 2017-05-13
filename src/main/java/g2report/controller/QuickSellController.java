package g2report.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2report.domain.QuickSell;
import g2report.domain.dto.ClientDto;
import g2report.domain.dto.QuickSellDto;
import g2report.service.QuickSellService;

@Controller
@RequestMapping(path = "/quicksell")
public class QuickSellController {

	@Autowired
	private QuickSellService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<QuickSellDto> search(@RequestParam(value = "search") String search) {
		List<QuickSellDto> listQuickSellDto = new ArrayList<QuickSellDto>();
		
		for (QuickSell quickSell : service.search(search)) {
			QuickSellDto quickSellDto = new QuickSellDto();
			BeanUtils.copyProperties(quickSell, quickSellDto);
			if (quickSell.getClient() != null) {
				ClientDto clientDto = new ClientDto();
				BeanUtils.copyProperties(quickSell.getClient(), clientDto);
				quickSellDto.setClient(clientDto);
			}
			listQuickSellDto.add(quickSellDto);
		}
		
		return listQuickSellDto;
	}
}
