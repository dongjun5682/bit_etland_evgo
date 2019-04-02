var emp = emp || {};

emp = (() => {
    let _, js, compojs, r_cnt, l_cnt;
    let init = () => {
        reset();
        onCreate();
    };
    let reset = () => {
        _ = $.ctx();
        js = $.js();
        compojs = js + '/cmp/compo.js';
        prdjs = js + '/prd/prd.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
    };
    var onCreate = () => {
        setContentView();
    }
    var setContentView = () => {
        $.when(
            $.getScript($.js() + '/component/compo.js'),
            $.getScript($.js() + '/product/prod.js'),
            $.getScript($.js() + '/employee/emp.js'),
            $.getScript($.js() + '/customer/cust.js')
        ).done(() => {
            $('#right_content').empty();
            $('<h1>PRODUCT REGISTER PAGE</h1>').appendTo('#right_content');
            $('#left_content ul.nav').empty();
            $.each(empNav(), (i, j) => {
                $('<li><a  href="#">' + j.txt + '</a></li>')
                    .attr('name', j.name)
                    .appendTo('#left_content ul.nav')
                    .click(function() {
                        let that = $(this).attr('name');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        switch (that) {
                            case 'emp_list':
                                $(l_cnt + ' h4').text(j.txt);
                                break;
                            case 'cust_list':
                                $(l_cnt + ' h4').text(j.txt);
                                cust.list(1);
                                break;
                            case 'prod_list':
                                $(l_cnt + ' h4').text(j.txt);
                                break;
                            case 'prod_post':
                                $(l_cnt + ' h4').text(j.txt);
                                $(r_cnt).empty();
                                $(compo.prod_post()).appendTo(r_cnt);
                                break;
                            case 'prod_up':
                                $(l_cnt + ' h4').text(j.txt);
                                break;
                            case 'prod_del':
                                $(l_cnt + ' h4').text(j.txt);
                                break;
                            case 'prod_stati':
                                $(l_cnt + ' h4').text(j.txt);
                                break;
                        }
                    })
                /*		            $('[name=prod_post]').addClass('active');*/
            })
        })

    }
    let empNav = () => {
       return arr = [{
            txt: '직원 목록',
            name: 'emp_list'
        }, {
            txt: '고객 목록',
            name: 'cust_list'
        }, {
            txt: '상품 등록',
            name: 'prod_post'
        }, {
            txt: '상품 목록',
            name: 'prod_list'
        }, {
            txt: '상품 수정',
            name: 'prod_up'
        }, {
            txt: '상품 삭제',
            name: 'prod_del'
        }, {
            txt: '상품 통계',
            name: 'prod_stati'
        }];
    }
    return {
        init: init
    }
})();