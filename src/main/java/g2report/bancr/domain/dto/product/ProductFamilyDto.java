package g2report.bancr.domain.dto.product;
import lombok.Data;

@Data
public class ProductFamilyDto {

	private Integer id;
	private String name;
	private ProductFamilyDto productGroup;
}
