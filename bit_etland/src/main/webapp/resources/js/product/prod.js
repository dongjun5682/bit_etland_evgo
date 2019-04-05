var prod = prod || {};

prod = (() => {
    let _, js, compojs, r_cnt, l_cnt;
    let init = () => {
        reset();
        onCreate();
    }
    let reset = () => {
        _ = $.ctx();
        js = $.js();
        compojs = js + '/component/compo.js';
        prdjs = js + '/product/prd.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
    }
    let onCreate = () => {
        setContentView();
    }
    let setContentView = () => {
        $.when(
                $.getScript(compojs),
                $.getScript($.js() + '/customer/cust.js'),
                $.getScript($.js() + '/common/util.js'))
            .done(() => {
                $(r_cnt).empty();
                $(compo.cust_shopping_form()).appendTo(r_cnt);
                $(l_cnt + ' ul.nav').empty();
                let arr = [{
                        txt: '메인',
                        name: 'main'
                    },
                    {
                        txt: '카테고리',
                        name: 'catego'
                    }
                ];
                $.each(arr, (i, j) => {
                    $('<li><a  href="#">' + j.txt + '</a></li>')
                        .attr('name', j.name)
                        .appendTo(l_cnt + ' ul.nav')
                        .click(function() {
                            let that = $(this).attr('name');
                            $(this).addClass('active');
                            $(this).siblings().removeClass('active');
                            switch (that) {
                                case 'main':
                                    $(r_cnt).empty();
                                    $(compo.cust_shopping_form()).appendTo(r_cnt);
                                    break;
                                case 'catego':
                                    break;
                            }

                        });
                });
                $('[name=main]').addClass('active');
            })
            .fail(() => {
                alert('component/compo.js 를 찾지  못했습니다.');
            });

    }
    let list = (x) => {
        reset();
        $(r_cnt).empty();
        $.getJSON(_ + '/products/page/' + x, d => {
            $('<div class="grid-item" id="content_1">' +
                    '<h1><font style="font-size: 20px;margin: 0 auto;">상품 목록</font>' +
                    '</h1>' +
                    '</div>' +
                    '<div class="grid-item" id="content_2"></div>')
                .appendTo(r_cnt);
            let table = '<table class="table table-bordered"><tr><th>No.</th>' +
                '<th>상품번호</th>' +
                '<th>상품이름</th>' +
                '<th>제조사번호</th>' +
                '<th>카테고리번호</th>' +
                '<th>수량</th>' +
                '<th>가격</th>' +
                '<th>컬러</th>' +
                '<th>제품설명</th>' +
                '<th>사진</th>' +
                '</tr>'
            $.each(d.ls, (i, j) => {
                table += '<tr><td>' + j.rownum + '</td>' +
                    '<td>' + j.productId + '</td>' +
                    '<td>' + j.productName + '</td>' +
                    '<td>' + j.supplierId + '</td>' +
                    '<td>' + j.categoryId + '</td>' +
                    '<td>' + j.unit + '</td>' +
                    '<td>' + j.price + '</td>' +
                    '<td>' + j.color + '</td>' +
                    '<td>' + j.comment + '</td>' +
                    '<td>' + j.photo + '</td>' +
                    '</tr>'
            });
            table += '</table>'
            //$(r_cnt).empty();
            $(table)
                .attr('id', 'cust_tab')
                .appendTo('#content_2');

            let html = '<nav style="margin-left: 510px;"> <ul class="pagination">'
            if (d.pxy.existPrev) {
                html += '<li class="prevBlock"><a href="#">&laquo;</a></li>';
            }
            let i = 0;
            for (i = d.pxy.startPage; i <= d.pxy.endPage; i++) {
                if (x == i) {
                    html += '<li class="active"><a href="#" class="page">' + i + '</a></li>';
                } else {

                    html += '<li><a href="#" class="page">' + i + '</a></li>';
                }
            }
            if (d.pxy.existNext) {
                html += '<li class="nextBlock"><a href="#">&raquo;</a></li>';
            }
            $('.table').after(html);
            $('.page').each(function() {
                $(this).click(() => {
                    list($(this).text());
                });
            });
            $('.nextBlock').click(function() {
                list(d.pxy.nextBlock);
            })
            $('.prevBlock').click(function() {
                list(d.pxy.prevBlock);
            })
        });
    }
    let post = () => {
        reset();
     	 let checkboxValues  = [];
			 $(".checks:checked").each(function(i) {
				 checkboxValues.push($(this).val());
			});
			 let pname = $('#productName').val();
			 let price = $('#price').val();
			 let unit = $('#unit').val();
			 if($.fn.nullChecker([pname,price,unit])){
				 alert('access X ');
			 }else{
				 alert('access O ');
			 }

            let data = {
                productName:pname,
                price: price,
                unit: unit,
                supplierID: $('#supplierID').val(),
                categoryID: $('#categoryID').val(),
                color : $('.radi:checked').val(),
                comment : $('#comment').val(),
                freebies:checkboxValues};
            $.ajax({
                url: _ +'/phones',
                type: 'POST',
                data: JSON.stringify(data),
                dataType: 'json',
                contentType: 'application/json',
                success: d => {
                    alert('성공');
                    
                },
                error: e => {
                    alert('실패');
                }
            });
 
    }
    let get = () => {

    }
    let put = () => {

    }
    let del = () => {

    }
    let srch=(x)=>{
		reset();
     	if($.fn.nullChecker([x.srch])){
     		 alert('검색값을 입력해주세요');
     	}else{
     		 alert('검색어 : '+x.srch);
     		$.getJSON(_+'/srch/'+x.srch+'/'+x.page,d=>{
         		alert('성공');
         		 $(r_cnt).empty();
         	   $('<div class="grid-item" id="content_1">' +
                       '<h1><font style="font-size: 20px;margin: 0 auto;">검색 목록</font>' +
                       '</h1>' +                   
                       '<button id="grid_btn" type="button" class="btn btn-primary" style="width:150px;">그리드로 보기</button>'+
                       '</div> <br>' +
                       '<div class="grid-item" id="content_2"></div>')
                   .appendTo(r_cnt);
               let table = '<table class="table table-bordered"><tr>' +
                   '<th>ROWNUM</th>' +
                   '<th>Prouct_No</th>' +
                   '<th>CategoryName</th>' +
                   '<th>Supplier_No</th>' +
                   '<th>ProductName</th>' +
                   '<th>Country</th>' +
                   '<th>Color</th>' +
                   '<th>Comment</th>' +
                   '<th>Unit</th>' +
                   '<th>Price</th>' +
                   '<th>Photo</th>' +
                   '</tr>'
               $.each(d.srch, (i, j) => {
                   table += '<tr><td>' + j.rownum + '</td>' +
                       '<td>' + j.productId + '</td>' +
                       '<td>' + j.categoryId + '</td>' +
                       '<td>' + j.supplierId + '</td>' +
                       '<td>' + j.productName + '</td>' +
                       '<td>' + j.country + '</td>' +
                       '<td>' + j.color + '</td>' +
                       '<td>' + j.comment + '</td>' +
                       '<td>' + j.unit + '</td>' +
                       '<td>' + j.price + '</td>' +
                       '<td>' + j.photo + '</td>' +
                       '</tr>'
               });
               table += '</table>'
               //$(r_cnt).empty();
               $(table)
                   .attr('id', 'cust_tab')
                   .appendTo('#content_2');

               let html = '<nav style="margin-left: 510px;"> <ul class="pagination">'
               if (d.pxy.existPrev) {
                   html += '<li class="prevBlock"><a href="#">&laquo;</a></li>';
               }
               let i = 0;
               for (i = d.pxy.startPage; i <= d.pxy.endPage; i++) {
                   if (x == i) {
                       html += '<li class="active"><a href="#" class="page">' + i + '</a></li>';
                   } else {

                       html += '<li><a href="#" class="page">' + i + '</a></li>';
                   }
               }
               if (d.pxy.existNext) {
                   html += '<li class="nextBlock"><a href="#">&raquo;</a></li>';
               }
               $('.table').after(html);
               $('.page').each(function() {
                   $(this).click(() => {
                	   let arr = {srch :x.srch,
                			   	  page :$(this).text()};
                	   srch(arr);
                   });
               });
               $('.nextBlock').click(function() {
            	   let arr = {srch :x.srch,
         			   	  page :d.pxy.nextBlock};
            	   srch(arr);
               })
               $('.prevBlock').click(function() {
            	   let arr = {srch :x.srch,
         			   	  page :d.pxy.prevBlock};
            	   srch(arr);
               }) 
               $('#grid_btn').click(e=>{
            	   alert('그리드 버튼 클릭');
            	   let arr = {srch :x.srch,
          			   	  page :'1'};
            		   srch_grid(arr);          	  
               })   	   
         	})
     	}

}
   let srch_grid=(x)=>{
	   	reset();
	   	$(r_cnt).empty();
	   	
	    let url=_+'/srch/'+x.srch+'/grid/'+x.page;
 	   $.getJSON(url,d=>{
	   	let html = '<div> <button id="grid_to_list"type="button" class="btn btn-primary active" style="width:150px;">리스트 보기</button></div><br>'
	   		+'<div id="srch_grid" class="col-md-12 col-lg-12">';
	   	let i =0;
	   		$.each(d.grid,(x,y)=>{
		   		html += '<div class="pagesCont">'
		   			+  			' <div class="col-md-4 col-lg-4">'
		   			+'            <div class="col-md-12 col-lg-12 well">'
		   			+'                <h4 class="break-word">'
		   			+'                    <a href="#">Item 1</a>'
		   			+'                </h4>'
		   			+'                <a href="#">'
		   			+'                    <img src="http://img.danawa.com/cp_images/service/149/3345923/148858558004411746101.jpg" alt="NO VA" class="img-responsive img-thumbnail">'
		   			+'                </a>'
		   			+'                <h5 class="col-md-8 col-lg-8 break-word">'
		   			+'                    <a href="#">Category</a>'
		   			+'                </h5>'
		   			+'                <h4 class="col-md-4 col-lg-4 text-right"> 1 €</h4>'
		   			+'                <div>'
		   			+'                    <div class="col-md-12 col-lg-12">'
		   			+'                        <a href="#" class="break-word">UserName UserLastName</a>'
		   			+'                    </div>'
		   			+'                </div>'
		   			+'            </div>'
		   			+'        </div>'
		   	})
	   		html += '</div>'+'</div>';
	   	$(html).appendTo(r_cnt);
	   	
	    let pana = '<nav style="margin-left: 510px;"> <ul class="pagination">'
            if (d.pxy.existPrev) {
            	pana += '<li class="prevBlock"><a href="#">&laquo;</a></li>';
            }
            let j = 0;
            for (j = d.pxy.startPage; j <= d.pxy.endPage; j++) {
                if (d == j) {
                	pana += '<li class="active"><a href="#" class="page">' + j + '</a></li>';
                } else {

                	pana += '<li><a href="#" class="page">' + j + '</a></li>';
                }
            }
            if (d.pxy.existNext) {
            	pana += '<li class="nextBlock"><a href="#">&raquo;</a></li>';
            }
            $('#srch_grid').after(pana);
            $('.page').each(function() {            
                $(this).click(() => {
             	   let arr = {srch :x.srch,
             			   	  page :$(this).text()};
             	  srch_grid(arr);
                });
            });
            $('.nextBlock').click(function() {
         	   let arr = {srch :x.srch,
      			   	  page :d.pxy.nextBlock};
         	  srch_grid(arr);
            })
            $('.prevBlock').click(function() {
         	   let arr = {srch :x.srch,
      			   	  page :d.pxy.prevBlock};
         	  srch_grid(arr);
            }) 
            
            $('#grid_to_list').click(e=>{
         	   alert('리스트 버튼 클릭');
         	   let arr = {srch :x.srch,
       			   	  page :'1'};
         		   srch(arr);          	  
            })   	
 	   });
   }
    
    return {
        init: init,
        post: post,
        get: get,
        put: put,
        del: del,
        list: list,
        srch:srch,
        srch_grid:srch_grid
    }
})();