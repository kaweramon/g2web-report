package g2report.domain.dto;

import lombok.Data;

@Data
public class ProductQuickSellDto {

	private Integer id;
	private Integer quickSellId;
	private String productName;
	private Double cfop;
	private ProductDto product;
	private QuickSellDto quickSell;
	private Integer quantity;
	private Double value;
	private Double subTotal;
	private Double aliquotICMS;
}
