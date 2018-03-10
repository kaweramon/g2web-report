package g2report.g2mensagem.domain.dto;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.BeanUtils;

import g2report.g2mensagem.domain.Liberation;
import lombok.Data;

@Data
public class LiberationDto {

	private Integer id;	
	private String clientSystemVersion;
	private Date systemLiberationDate;
	private Date verificationDate;
	private Date tempLiberationDate;
	private String systemLiberationDateStr;
	private String verificationDateStr;
	private String tempLiberationDateStr;
	private String operator;
	private String obs;
	private Integer clientId;
	private static DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
	private static DateFormat dateAndHourFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	
	public static LiberationDto fromObject(Liberation liberation) {
		LiberationDto liberationDto = new LiberationDto();
		BeanUtils.copyProperties(liberation, liberationDto);
		if (liberation.getSystemLiberationDate() != null)
			liberationDto.setSystemLiberationDateStr(dateFormat.format(liberation.getSystemLiberationDate()));
		if (liberation.getVerificationDate() != null)
			liberationDto.setVerificationDateStr(dateAndHourFormat.format(liberation.getVerificationDate()));
		if (liberation.getTempLiberationDate() != null)
			liberationDto.setTempLiberationDateStr(dateFormat.format(liberation.getTempLiberationDate()));
		return liberationDto;
	}
	
	public static List<LiberationDto> fromObject(List<Liberation> liberations) {
		List<LiberationDto> listLiberationDto = new ArrayList<LiberationDto>();
		for (Liberation liberation : liberations) {
			listLiberationDto.add(LiberationDto.fromObject(liberation));
		}
		return listLiberationDto;
	}
	
	public Liberation toObject() {
		Liberation liberation = new Liberation();
		BeanUtils.copyProperties(this, liberation);
		return liberation;
	}
}
