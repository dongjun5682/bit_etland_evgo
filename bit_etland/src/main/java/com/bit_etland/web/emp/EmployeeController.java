package com.bit_etland.web.emp;

import java.util.List;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;


@RestController
@RequestMapping("/users")
public class EmployeeController {
	
	private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);
	
	@Autowired Employee emp;
	@Autowired PrintService ps;
	@Autowired EmployeeMapper empMap;
	@Autowired Map<String,Object> map;
	@Autowired Users<?> user;
	
	@PostMapping("/emp/{userid}")
	public Employee access(
			@RequestBody Employee param,
			@PathVariable String userid) {
		logger.info("\n ===============login=================");
		 IFunction i = (Object o) -> empMap.selectEmployee((Employee)param);
		return (Employee)i.apply(param);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/{user}/list")
	public List<Users<?>> list(
			@PathVariable String user,
			@RequestBody Map<?,?> param){
		logger.info("\n ===============list=================");
		IFunction i = (Object o) -> empMap.selectEmployees(param);
		return (List<Users<?>>)i.apply(param);
		
	}
	
	@PostMapping("/emp")
	public Map<String,Object> join(
			@RequestBody Employee param) {
		logger.info("\n cust register 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> empMap.insertEmployee(param);
		c.accept(param);
		map.clear();
		map.put("msg","success");
		return map;
	}

	@PostMapping("/emp/{userid}")
	public Object update(
			@PathVariable String userid,
			@RequestBody Employee param) {
		logger.info("\n cust update 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> empMap.updateEmployee(param);
		c.accept(param);
		return access(param,userid);
	}

	@PostMapping("/emp/{userid}")
	public Map<String,Object> delete(
			@PathVariable String user,
			@PathVariable String userid,
			@RequestBody Employee param) {
		logger.info("\n cust delete 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> empMap.deleteEmployee(param);
		c.accept(param);
		map.clear();
		map.put("s","success");
		return map;
	}
	
}
