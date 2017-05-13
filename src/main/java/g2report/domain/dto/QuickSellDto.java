package g2report.domain.dto;

import java.util.Date;

import lombok.Data;

@Data
public class QuickSellDto {

	private Integer id;
	private Date sellDate;
	private Double total;
	private Date schedule;
	private Double totalWithDescount;
	private String type;
	private ClientDto client;
	private String salesman;
	private Integer cashier;
	private String transaction;
	private Double additionValue;
	private Double discountValue;
	private String nfeKey;
}
