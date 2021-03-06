package com.bit_etland.web.cust;

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
import com.bit_etland.web.cmm.Proxy;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.emp.EmployeeMapper;

/**
 * Handles requests for the application home page.
 */
@RestController
public class CustomerController {
	
	private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
	
	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@Autowired EmployeeMapper empMap;
	@Autowired Map<String,Object> map;
	@Autowired Users<?> user;
	@Autowired Proxy pxy;
	
	@PostMapping("/customers/{userid}")
	public Customer login(
			@PathVariable String userid,
			@RequestBody Customer param) {
		logger.info("\n ===============login=================");
		 IFunction i = (Object o) -> custMap.selectCustomer(param);
		return (Customer)i.apply(param);
	}
	
	@GetMapping("/customers/page/{page}")
	public Map<?,?> list(
			@PathVariable String page){
		logger.info("\n ===============Cust List=================");
		ISuppiler s = ()->custMap.countCustomers();
		map.clear();
		map.put("pageNum",page);
		map.put("page_size","5");
		map.put("blockSize","5");
		map.put("totalCount",(int)s.get());
		pxy.carryOut(map);
		IFunction i = (Object o)->custMap.selectCustomerList(pxy);
		List<?> ls = (List<?>)i.apply(pxy);
		map.clear();
		map.put("ls",ls);
		map.put("pxy",pxy);
		ps.accept(ls.toString());
		ps.accept(pxy.toString());
		
		return map;
	}
	
	@PostMapping("/customers")
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

	@PutMapping("/customers/{userid}")
	public Object update(
			@PathVariable String userid,
			@RequestBody Customer param) {
		logger.info("\n cust update 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> custMap.updateCustomer(param);
		c.accept(param);
		return login(userid,param);
	}

	@DeleteMapping("/customers/{userid}")
	public Map<String,Object> delete(
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