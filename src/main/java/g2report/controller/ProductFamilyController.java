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

import g2report.domain.dto.product.ProductFamilyDto;
import g2report.domain.product.ProductFamily;
import g2report.service.ProductFamilyService;

@Controller
@RequestMapping(value = "product-family")
public class ProductFamilyController {

	@Autowired
	private ProductFamilyService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<ProductFamilyDto> list(@RequestParam(value = "productGroupId") String productGroupId) {
		List<ProductFamilyDto> listProdFamilyDto = new ArrayList<ProductFamilyDto>();
		
		for (ProductFamily prodFamily : service.list(Integer.parseInt(productGroupId))) {
			ProductFamilyDto prodFamilyDto = new ProductFamilyDto();
			BeanUtils.copyProperties(prodFamily, prodFamilyDto);
			listProdFamilyDto.add(prodFamilyDto);
		}
		
		return listProdFamilyDto;
	}
}
