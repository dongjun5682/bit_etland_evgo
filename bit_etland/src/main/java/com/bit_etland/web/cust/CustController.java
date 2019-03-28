package com.bit_etland.web.cust;

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
import com.bit_etland.web.emp.EmployeeMapper;

/**
 * Handles requests for the application home page.
 */
@RestController
@RequestMapping("/users")
public class CustController {
	
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	
	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@Autowired EmployeeMapper empMap;
	@Autowired Map<String,Object> map;
	@Autowired Users<?> user;
	
	@PostMapping("/login/{userid}")
	public Customer login(
			@RequestBody Customer param,
			@PathVariable String userid) {
		logger.info("\n ===============login=================");
		 IFunction i = (Object o) -> custMap.selectCustomer((Customer)param);
		return (Customer)i.apply(param);
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/{user}/list")
	public List<Users<?>> list(
			@PathVariable String user,
			@RequestBody Map<?,?> param){
		logger.info("\n ===============list=================");
		IFunction i = (Object o) -> custMap.selectCustomers(param);
		return (List<Users<?>>)i.apply(param);
		
	}
	
	@PostMapping("/cust")
	public Map<String,Object> join(
			@RequestBody Customer param) {
		logger.info("\n cust register 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> custMap.insertCustomer(param);
		c.accept(param);
		map.clear();
		map.put("msg","success");
		return map;
	}

	@PostMapping("/cust/{userid}")
	public Object update(
			@PathVariable String userid,
			@RequestBody Customer param) {
		logger.info("\n cust update 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> custMap.updateCustomer(param);
		c.accept(param);
		return login(param,userid);
	}

	@PostMapping("/cust/{userid}")
	public Map<String,Object> delete(
			@PathVariable String user,
			@PathVariable String userid,
			@RequestBody Customer param) {
		logger.info("\n cust delete 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> custMap.deleteCustomer(param);
		c.accept(param);
		map.clear();
		map.put("s","success");
		return map;
	}
	
	
	
}