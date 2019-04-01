package com.bit_etland.web.emp;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.ISuppiler;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.emp.EmployeeMapper;

/**
 * Handles requests for the application home page.
 */
@RestController
public class EmployeeController {
	
	private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);
	
	@Autowired Employee emp;
	@Autowired PrintService ps;
	@Autowired EmployeeMapper empMap;
	@Autowired Map<String,Object> map;
	@Autowired Users<?> user;
	
	@PostMapping("/employees/{userid}")
	public Employee login(
			@PathVariable String userid,
			@RequestBody Employee param) {
		logger.info("\n ===============EMP LOGIN=================");
		 IFunction i = (Object o) -> empMap.selectEmployee(param);
		 ps.accept(param.toString());
		return (Employee)i.apply(param);
	}
	
	@GetMapping("/employees")
	public Employee access() {
		logger.info("\n ===============EMP ACCESS=================");
		ISuppiler s =  () -> empMap.selectEmployeeAll();
		return (Employee)s.get();
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/employees/page/{page}")
	public List<Users<?>> list(
			@PathVariable String user,
			@RequestBody Map<?,?> param){
		logger.info("\n ===============EMP list=================");
		IFunction i = (Object o) -> empMap.selectEmployees(param);
		return (List<Users<?>>)i.apply(param);
		
	}
	
	@PostMapping("/employees")
	public Map<String,Object> join(
			@RequestBody Employee param) {
		logger.info("\n EMP REGISTER 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> empMap.insertEmployee(param);
		c.accept(param);
		map.clear();
		map.put("msg","success");
		return map;
	}

	@PutMapping("/employees/{userid}")
	public Object update(
			@PathVariable String userid,
			@RequestBody Employee param) {
		logger.info("\n EMP UADATE 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> empMap.updateEmployee(param);
		c.accept(param);
		return login(userid,param);
	}

	@DeleteMapping("/employees/{userid}")
	public Map<String,Object> delete(
			@PathVariable String userid,
			@RequestBody Employee param) {
		logger.info("\n EMP DELETE 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> empMap.deleteEmployee(param);
		c.accept(param);
		map.clear();
		map.put("s","success");
		return map;
	}
	
	
	
}