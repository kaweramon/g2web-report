package g2report.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import g2report.domain.dto.product.ProductDto;
import g2report.domain.dto.product.ProductFamilyDto;
import g2report.domain.dto.product.ProductGroupDto;
import g2report.domain.dto.product.ProductOthersDto;
import g2report.domain.product.Product;
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
			listProductDto.add(productDto);
		}
		
		return listProductDto;
	}
}
