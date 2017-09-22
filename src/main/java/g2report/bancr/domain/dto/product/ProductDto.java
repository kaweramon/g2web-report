package g2report.bancr.domain.dto.product;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;

import g2report.bancr.domain.product.Product;
import lombok.Data;

@Data
public class ProductDto {

	private Integer id;
	private String name;
	private String reference;
	private String barCode;
	private String type;
	private Double costPrice;
	private Double priceValue;
	private String unity;
	private ProductGroupDto productGroup;
	private ProductFamilyDto productFamily;
	private ProductOthersDto productOther;
	
	public static ProductDto fromObject(Product product) {
		ProductDto productDto = new ProductDto();
		BeanUtils.copyProperties(product, productDto);
		if (product.getProductOther() != null) {
			productDto.setProductOther(ProductOthersDto.fromObject(product.getProductOther()));
		}
		return productDto;
	}

	public static List<ProductDto> fromObject(List<Product> listProducts) {
		List<ProductDto> listProductDto = new ArrayList<ProductDto>();
		for (Product product : listProducts) {
			listProductDto.add(fromObject(product));
		}
		return listProductDto;
	}
	
	public Product toObject() {
		Product product = new Product();
		BeanUtils.copyProperties(this, product);
		return product;
	}
	
}
