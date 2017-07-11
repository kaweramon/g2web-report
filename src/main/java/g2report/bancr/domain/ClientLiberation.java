package g2report.bancr.domain;


import java.util.Date;

import lombok.Data;

@Data
public class ClientLiberation {

	private Integer id;
	private String fantasyName;
	private String socialReason;
	private Date systemLiberationDate;
	private String Obs;
	private String status;
}
