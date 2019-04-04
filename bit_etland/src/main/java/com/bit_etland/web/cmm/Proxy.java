package com.bit_etland.web.cmm;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component @Data @Lazy
public class Proxy {
	private int pageNum,pageSize,
	blockSize,
	startRow,endRow,
	startPage,endPage,blockNum,
	prevBlock,nextBlock,totalCount;
private boolean existPrev, existNext;
	private String srch;
	
    public void carryOut(Map<?,?> paramMap) {

		System.out.println("page_size : "+ paramMap.get("page_size"));
		System.out.println("pageNum : "+ paramMap.get("pageNum"));
		pageSize = ((String)paramMap.get("page_size") == null)	? 5 : Integer.parseInt((String) paramMap.get("page_size"));
		pageNum = ((String)paramMap.get("pageNum") == null) ? 1 : Integer.parseInt((String) paramMap.get("pageNum"));
		totalCount = (int) paramMap.get("totalCount");
		int pageCount = (totalCount % pageSize != 0) ?  totalCount/pageSize+1:totalCount/pageSize;
		String _blockSize = (String)paramMap.get("blockSize");
		blockSize = (_blockSize == null) ? 5 : Integer.parseInt(_blockSize);
		startRow = (pageNum -1) *pageSize + 1;
		endRow = (totalCount > pageNum * pageSize)? pageNum * pageSize: totalCount;
	
		blockNum = (int)(Math.ceil(pageNum / (double)blockSize) * blockSize);
		endPage = blockNum;
		startPage = (endPage - blockSize) + 1; 
		endPage = (blockNum > pageCount ) ? pageCount :blockNum ;
		
		System.out.println("startPage : :  : :  "+startPage);
		System.out.println("pageSize : :  : :  "+pageSize);
		System.out.println("pagecount : :  : :  "+pageCount);
		
		existNext = (startPage + pageSize) <= pageCount;
		existPrev = (startPage - pageSize) > 0 ;
		System.out.println("existNext : :  : :  "+existNext);
		
		prevBlock = startPage - pageSize;
		nextBlock = startPage + pageSize;
		srch = (String) paramMap.get("srch");
    }
}