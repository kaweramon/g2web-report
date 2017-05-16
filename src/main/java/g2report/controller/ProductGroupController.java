package g2report.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import g2report.domain.dto.product.ProductGroupDto;
import g2report.domain.product.ProductGroup;
import g2report.service.ProductGroupService;

@Controller
@RequestMapping(value = "product-group")
public class ProductGroupController {

	@Autowired
	private ProductGroupService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<ProductGroupDto> list() {
		List<ProductGroupDto> listProductGroupDto = new ArrayList<ProductGroupDto>();
		
		for (ProductGroup prodGroup : service.list()) {
			ProductGroupDto prodGroupDto = new ProductGroupDto();
			BeanUtils.copyProperties(prodGroup, prodGroupDto);
			listProductGroupDto.add(prodGroupDto);
		}
		
		return listProductGroupDto;
	}
}
