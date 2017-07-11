package g2report.bancr.domain.dto;

import g2report.bancr.domain.dto.product.ProductDto;
import lombok.Data;

@Data
public class ProductSightSaleDto {

	private Integer id;
	private SightSaleDto sightSale;
	private ProductDto product;
	private Integer quantity;
	private Double value;
	private Double subTotal;
	private Double costValue;
	private Integer cfop;
	private Integer cst;
	private String ncm;
	private Double aliquotICMS;
}
