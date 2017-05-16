package g2report.domain.dto.product;

import lombok.Data;

@Data
public class ProductDto {

	private Integer id;
	private String name;
	private String barCode;
	private String type;
	private ProductGroupDto productGroup;
	private ProductFamilyDto productFamily;
	private ProductOthersDto productOther;
}