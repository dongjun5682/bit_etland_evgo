package com.bit_etland.web.cust;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.PrintService;

/**
 * Handles requests for the application home page.
 */
@RestController
@RequestMapping("/cust")
public class CustController {
	
	private static final Logger logger = LoggerFactory.getLogger(CustController.class);
	
	@Autowired Customer cust;
	@Autowired PrintService ps;
	@PostMapping("/login")
	public Customer login(@RequestBody Customer param) {
		logger.info("\n cust login 진입");
		ps.accept("입력 "+param.toString());
		
		
		return param;
	}
}