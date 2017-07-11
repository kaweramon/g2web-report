package g2report.bancr.domain.dto.product;

import lombok.Data;

@Data
public class ProductDto {

	private Integer id;
	private String name;
	private String barCode;
	private String type;
	private Double costPrice;
	private ProductGroupDto productGroup;
	private ProductFamilyDto productFamily;
	private ProductOthersDto productOther;
}
