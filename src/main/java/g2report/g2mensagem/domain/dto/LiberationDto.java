package g2report.g2mensagem.domain.dto;

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
	private String obs;
	private Integer clientId;
	
	public static LiberationDto fromObject(Liberation liberation) {
		LiberationDto liberationDto = new LiberationDto();
		BeanUtils.copyProperties(liberation, liberationDto);
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
