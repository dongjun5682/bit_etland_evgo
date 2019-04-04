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
        $(r_cnt).empty();
        $(compo.prod_post()).appendTo(r_cnt);
        $('.col-md-8 button[type=submit]').click(e=>{
        	e.preventDefault();
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
        })
    }
    let get = () => {

    }
    let put = () => {

    }
    let del = () => {

    }
    return {
        init: init,
        post: post,
        get: get,
        put: put,
        del: del,
        list: list
    }
})();