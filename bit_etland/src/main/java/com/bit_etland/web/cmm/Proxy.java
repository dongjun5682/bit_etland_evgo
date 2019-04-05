package com.bit_etland.web.cmm;

import java.io.File;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
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
	
	@Autowired Image img;
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
    
    public void fileUpload(String customerID) {
		FileItemFactory factory = new DiskFileItemFactory();
		ServletFileUpload upload = new ServletFileUpload(factory);
		upload.setFileSizeMax(1024 * 1024 * 40); // 40 MB
		upload.setSizeMax(1024 * 1024 * 50); // 50 MB
		List<FileItem> items = null;
		try {
			File file = null;
			// items = upload.parseRequest((RequestContext) new ServletRequestContext(request));
			Iterator<FileItem> it = items.iterator();
			while(it.hasNext()) {
				FileItem item = it.next();
				if(!item.isFormField()) {
					String fileName = item.getName();
					file = new File(""+fileName);
					item.write(file);
					img.setImgName(fileName.substring(0,fileName.indexOf(".")));
					img.setImgExtention(fileName.substring(fileName.indexOf(".")+1));
					img.setOwner(customerID);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
    }
    
}

