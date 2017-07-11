package g2report.bancr.domain.dto.product;

import lombok.Data;

@Data
public class ProductOthersDto {

	private Integer id;
	private Double freightValue;
	private Double insuranceValue;
	private Double discountValue;
}
