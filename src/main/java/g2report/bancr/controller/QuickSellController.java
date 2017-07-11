package g2report.bancr.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2report.bancr.domain.ProductQuickSell;
import g2report.bancr.domain.QuickSell;
import g2report.bancr.domain.dto.ClientDto;
import g2report.bancr.domain.dto.ProductQuickSellDto;
import g2report.bancr.domain.dto.QuickSellDto;
import g2report.bancr.domain.dto.product.ProductDto;
import g2report.bancr.domain.dto.product.ProductFamilyDto;
import g2report.bancr.domain.dto.product.ProductGroupDto;
import g2report.bancr.domain.dto.product.ProductOthersDto;
import g2report.bancr.domain.product.Product;
import g2report.bancr.service.QuickSellService;

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
			if (quickSell.getListProductQuickSell() != null) {
				List<ProductQuickSellDto> listProdQuickSellDto = new ArrayList<ProductQuickSellDto>();
				for (ProductQuickSell prodQuickSell : quickSell.getListProductQuickSell()) {
					ProductQuickSellDto prodQuickSellDto = new ProductQuickSellDto();
					Product product = prodQuickSell.getProduct();
					if (product != null) {
						ProductDto productDto = new ProductDto();
						BeanUtils.copyProperties(prodQuickSell.getProduct(), productDto);
						if (product.getProductFamily() != null) {
							ProductFamilyDto prodFamilyDto = new ProductFamilyDto();
							BeanUtils.copyProperties(product.getProductFamily(), prodFamilyDto);
							productDto.setProductFamily(prodFamilyDto);
						}
						if (product.getProductGroup() != null) {
							ProductGroupDto prodGroupDto = new ProductGroupDto();
							BeanUtils.copyProperties(product.getProductGroup(), prodGroupDto);
							productDto.setProductGroup(prodGroupDto);
						}
						if (product.getProductOther() != null) {
							ProductOthersDto prodOthersDto = new ProductOthersDto();
							BeanUtils.copyProperties(product.getProductOther(), prodOthersDto);
							productDto.setProductOther(prodOthersDto);
						}
						prodQuickSellDto.setProduct(productDto);
					}
					BeanUtils.copyProperties(prodQuickSell, prodQuickSellDto);
					listProdQuickSellDto.add(prodQuickSellDto);
				}
				quickSellDto.setListProductQuickSell(listProdQuickSellDto);
			}
			listQuickSellDto.add(quickSellDto);
		}
		
		return listQuickSellDto;
	}
}
