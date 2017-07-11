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

import g2report.bancr.domain.ProductSightSale;
import g2report.bancr.domain.SightSale;
import g2report.bancr.domain.dto.ClientDto;
import g2report.bancr.domain.dto.ProductSightSaleDto;
import g2report.bancr.domain.dto.SightSaleDto;
import g2report.bancr.domain.dto.product.ProductDto;
import g2report.bancr.domain.dto.product.ProductFamilyDto;
import g2report.bancr.domain.dto.product.ProductGroupDto;
import g2report.bancr.domain.dto.product.ProductOthersDto;
import g2report.bancr.domain.product.Product;
import g2report.bancr.service.SightSaleService;

@Controller
@RequestMapping(value = "sight-sale")
public class SightSaleController {

	@Autowired
	private SightSaleService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<SightSaleDto> search(@RequestParam("search") String search) {
		List<SightSaleDto> listSightSaleDto = new ArrayList<SightSaleDto>();
		
		for (SightSale sightSale : service.searchSale(search)) {
			SightSaleDto sightSaleDto = new SightSaleDto();
			BeanUtils.copyProperties(sightSale, sightSaleDto);
			if (sightSale.getClient() != null) {
				ClientDto clientDto = new ClientDto();
				BeanUtils.copyProperties(sightSale.getClient(), clientDto);
				sightSaleDto.setClient(clientDto);
			}
			if (sightSale.getListProductSightSale() != null) {
				List<ProductSightSaleDto> listProdSightSaleDto = new ArrayList<ProductSightSaleDto>();
				for (ProductSightSale prodSightSale : sightSale.getListProductSightSale()) {
					ProductSightSaleDto prodSightSaleDto = new ProductSightSaleDto();
					BeanUtils.copyProperties(prodSightSale, prodSightSaleDto);
					Product product = prodSightSale.getProduct();
					if (product != null) {
						ProductDto productDto = new ProductDto();
						BeanUtils.copyProperties(product, productDto);
						if (product.getProductOther() != null) {
							ProductOthersDto prodOtherDto = new ProductOthersDto();
							BeanUtils.copyProperties(product.getProductOther(), prodOtherDto);
							productDto.setProductOther(prodOtherDto);	
						}
						if (product.getProductGroup() != null) {
							ProductGroupDto prodGroupDto = new ProductGroupDto();
							BeanUtils.copyProperties(product.getProductGroup(), prodGroupDto);
							productDto.setProductGroup(prodGroupDto);
						}
						if (product.getProductFamily() != null) {
							ProductFamilyDto prodFamilyDto = new ProductFamilyDto();
							BeanUtils.copyProperties(product.getProductFamily(), prodFamilyDto);
							productDto.setProductFamily(prodFamilyDto);
						}
						prodSightSaleDto.setProduct(productDto);
					}
					listProdSightSaleDto.add(prodSightSaleDto);
				}
				sightSaleDto.setListProductSightSale(listProdSightSaleDto);
			}
			listSightSaleDto.add(sightSaleDto);
		}
		
		return listSightSaleDto;
	}
}
