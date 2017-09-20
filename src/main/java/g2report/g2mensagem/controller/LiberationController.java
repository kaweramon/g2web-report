package g2report.g2mensagem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import g2report.g2mensagem.domain.dto.LiberationDto;
import g2report.g2mensagem.service.LiberationService;

@Controller
@RequestMapping(path = "/liberation")
public class LiberationController {

	@Autowired
	private LiberationService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<LiberationDto> listReport() {
		return LiberationDto.fromObject(service.listReport());
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/search")
	public @ResponseBody List<LiberationDto> searchLiberationReport(@RequestParam("search") String search) {
		return LiberationDto.fromObject(service.search(search));
	}
	
	@RequestMapping(method = RequestMethod.PUT, path = "/{liberationId}")
	public @ResponseBody LiberationDto update(@RequestParam("liberationId") Integer liberationId, @RequestBody LiberationDto liberation) {
		return LiberationDto.fromObject(service.update(liberationId, liberation.toObject()));
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/versions")
	public @ResponseBody List<String> getVersions() {
		return service.getVersions();
	}
}
