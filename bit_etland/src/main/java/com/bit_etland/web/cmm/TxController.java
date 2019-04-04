package com.bit_etland.web.cmm;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.prod.ProductMapper;

@RestController
@Transactional
public class TxController {
	
	private static final Logger logger = LoggerFactory.getLogger(TxController.class);
	
	@Autowired ProductMapper prodMap;
	@Autowired Map<String,Object> map;
	@Autowired Proxy pxy;
	@GetMapping("/srch/{srch}/{page}")
	public Map<?,?> srch(
			@PathVariable String srch,
			@PathVariable String page) {
		logger.info("\n ===============Tx Srch=================");
		String sr = "%"+srch+"%";
		ISuppiler s = () -> prodMap.srchCountProduct(sr);
		map.clear();
		map.put("pageNum", page);
		map.put("page_size", "5");
		map.put("blockSize", "5");
		map.put("totalCount", (int)s.get());
		map.put("srch",sr);
		System.out.println("srch "+ sr);
		System.out.println("total cont "+ (int) s.get() );
		System.out.println("total cont "+page);
		pxy.carryOut(map);
		IFunction f = (Object o) -> prodMap.selectSrch(pxy);
		List<?> ls = (List<?>) f.apply(pxy);
		map.put("srch",ls);
		map.put("pxy",pxy);	
		System.out.println(ls.toString());
		map.put("prod",ls);
		return map;
	}
}
