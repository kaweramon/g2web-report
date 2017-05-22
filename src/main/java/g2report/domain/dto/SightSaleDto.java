package g2report.domain.dto;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class SightSaleDto {

	private Integer id;
	private Date sellDate;
	private ClientDto client;
	private Double total;
	private Double totalDiscount;
	private Integer cashier;
	private String salesMan;
	private Date schedule;
	private String coo;
	private String status;
	private List<ProductSightSaleDto> listProductSightSale;
}
