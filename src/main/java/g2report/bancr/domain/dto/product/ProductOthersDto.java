package g2report.bancr.domain.dto.product;

import org.springframework.beans.BeanUtils;

import g2report.bancr.domain.product.ProductOthers;
import lombok.Data;

@Data
public class ProductOthersDto {

	private Integer id;
	private Double freightValue;
	private Double insuranceValue;
	private Double discountValue;
	private Integer cfop;
	private String ncm;
	private String cstNumber;
	
	public static ProductOthersDto fromObject(ProductOthers prodOther) {
		ProductOthersDto productOthersDto = new ProductOthersDto();
		BeanUtils.copyProperties(prodOther, productOthersDto);
		return productOthersDto;
	}
}
