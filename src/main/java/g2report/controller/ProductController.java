package g2report.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import g2report.domain.Product;
import g2report.domain.dto.ProductDto;
import g2report.service.ProductService;

@Controller
@RequestMapping(value = "product")
public class ProductController {

	@Autowired
	private ProductService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<ProductDto> list() {
		List<ProductDto> listProductDto = new ArrayList<ProductDto>();
		
		for (Product product : service.list()) {
			ProductDto productDto = new ProductDto();
			BeanUtils.copyProperties(product, productDto);
			listProductDto.add(productDto);
		}
		
		return listProductDto;
	}
}
