package g2report.domain.dto;

import g2report.domain.dto.product.ProductDto;
import lombok.Data;

@Data
public class ProductQuickSellDto {

	private Integer id;
	private QuickSellDto quickSell;
	private ProductDto product;
	private Double cfop;	
	private Integer quantity;	
	private Double subTotal;
	private Double value;
	private Double costValue;
	private Double aliquotICMS;
	private String percentPIS;
	private String percentCofins;
	private Double discount;
}
