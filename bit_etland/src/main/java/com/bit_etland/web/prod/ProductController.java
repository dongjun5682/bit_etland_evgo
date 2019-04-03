package com.bit_etland.web.prod;

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

@RestController
public class ProductController {

	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
	
	@Autowired Product prod;
	@Autowired PrintService ps;
	@Autowired ProductMapper prodMap;
	@Autowired Map<String,Object> map;
	@Autowired Users<?> user;
	@Autowired Proxy pxy;
	
	@PostMapping("/products/{userid}")
	public Product login(
			@PathVariable String userid,
			@RequestBody Product param) {
		logger.info("\n ===============login=================");
		 IFunction i = (Object o) -> prodMap.selectProduct(param);
		return (Product)i.apply(param);
	}
	
	@GetMapping("/products/page/{page}")
	public Map<?,?> list(
			@PathVariable String page){
		logger.info("\n ===============Product List=================");
		ISuppiler s = ()->prodMap.countProduct();
		map.clear();
		map.put("pageNum",page);
		map.put("page_size","5");
		map.put("blockSize","5");
		map.put("totalCount",(int)s.get());
		pxy.carryOut(map);
		IFunction i = (Object o)->prodMap.selectProductList(pxy);
		List<?> ls = (List<?>)i.apply(pxy);
		map.clear();
		map.put("ls",ls);
		map.put("pxy",pxy);
		ps.accept(ls.toString());
		ps.accept(pxy.toString());
		return map;
	}
	
	@PostMapping("/products")
	public Map<String,Object> join(
			@RequestBody Product param) {
		logger.info("\n Product register 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> prodMap.insertProduct(param);
		c.accept(param);
		map.clear();
		map.put("msg","success");
		return map;
	}

	@PutMapping("/products/{userid}")
	public Object update(
			@PathVariable String userid,
			@RequestBody Product param) {
		logger.info("\n Product update 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> prodMap.updateProduct(param);
		c.accept(param);
		return login(userid,param);
	}

	@DeleteMapping("/products/{userid}")
	public Map<String,Object> delete(
			@PathVariable String userid,
			@RequestBody Product param) {
		logger.info("\n Product delete 진입");
		ps.accept(param.toString());
		IConsumer c = (Object o) -> prodMap.deleteProduct(param);
		c.accept(param);
		map.clear();
		map.put("s","success");
		return map;
	}
}
