var cust = cust || {}

cust = (() => {
    let _, js, compojs, r_cnt, l_cnt, prdjs;
    let init = (d) => {
        reset();
        onCreate(d);
    };
    let reset = () => {
        _ = $.ctx();
        js = $.js();
        compojs = js + '/component/compo.js';
        prdjs = js + '/product/prd.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
    };
    let onCreate = (d) => {
        setContentView(d)
    }
    let setContentView = (d) => {
        $.when($.getScript(compojs),
                $.getScript($.js() + '/employee/emp.js'))
            .done(() => {
                $(r_cnt).empty();
                $(compo.cust_profil_form(d)).appendTo(r_cnt);
                $(l_cnt + ' ul.nav').empty();
                let arr = [{
                    txt: '쇼핑몰',
                    name: 'main'
                }, {
                    txt: '마이페이지',
                    name: 'mypage'
                }, {
                    txt: '정보수정',
                    name: 'update'
                }, {
                    txt: '회원탈퇴',
                    name: 'delete'
                }, {
                    txt: '구매내역',
                    name: 'purchase details'
                }, {
                    txt: '장바구니',
                    name: 'shopping basket'
                }];
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
                                    $.getScript(js + '/product/prod.js').done(() => {
                                        prod.init();
                                    })
                                    break;
                                case 'mypage':
                                    $(r_cnt).empty();
                                    $(compo.cust_profil_form(d)).appendTo(r_cnt);
                                    break;
                                case 'update':
                                    $(r_cnt).empty();
                                    $(compo.cust_update_form(d)).appendTo(r_cnt);
                                    $('.w3-container button[type=submit]').click(() => {
                                        update(d);
                                    })
                                    break;
                                case 'delete':
                                    $(r_cnt).empty();
                                    $(compo.cust_delete_form()).appendTo(r_cnt);
                                    $('.w3-container button[type=button]').click(() => {
                                        remove();
                                    })
                                    break;
                                case 'purchase details':
                                    $(r_cnt).empty();

                                    break;
                                case 'shopping basket':
                                    $(r_cnt).empty();

                                    break;

                            }

                        })
                    $('[name=mypage]').addClass('active');
                });
            })
            .fail(() => {
                alert('component/compo.js 를 찾지  못했습니다.');
            });
    }

    let update = (d) => {
        let up_data = {
            customerID: d.customerID,
            password: $('.w3-twothird input[name=password]').val(),
            city: $('.w3-twothird input[name=city]').val(),
            address: $('.w3-twothird input[name=address]').val(),
            postalCode: $('.w3-twothird input[name=postalCode]').val()
        }
        $.ajax({
            url: _ + '/customers/' + d.customerID,
            type: 'PUT',
            data: JSON.stringify(up_data),
            dataType: 'json',
            contentType: 'application/json',
            success: d => {
                alert('updata 성공');
                $(r_cnt).empty();
                $(compo.cust_profil_form(d)).appendTo(r_cnt);
                $('.w3-container button[type=submit]').click(() => {
                    update(d);
                })
                $('.w3-container button[type=submit]').after('<button class="btn-danger" type="button">Customer delete</button>')
                $('.w3-container button[type=button]').click(() => {
                    remove(d);
                })
            },
            error: e => {
                alert('실패했습니다');
            }
        })
    };

    let remove = () => {
        alert('삭제페이지');
        $.ajax({
            url: _ + '/customers/',
            type: 'DELETE',
            data: JSON.stringify(),
            dataType: 'json',
            contentType: 'application/json',
            success: d => {
                alert('회원탈퇴되셨습니다');
                auth();
            },
            error: e => {

            }
        })
    };
    let list = (x) => {
        reset();
        $(r_cnt).empty();
        $.getJSON(_ + '/customers/page/' + x, d => {
            $('<div class="grid-item" id="content_1">' +
                    '<h1><font style="font-size: 20px;margin: 0 auto;">상품 목록</font>' +
                    '</h1>' +
                    '</div>' +
                    '<div class="grid-item" id="content_2"></div>')
                .appendTo(r_cnt);
            let table = '<table class="table table-bordered"><tr>' +
                '<th>RowNum</th>' +
                '<th>CustomerID</th>' +
                '<th>Name</th>' +
                '<th>Gender</th>' +
                '<th>Phone</th>' +
                '<th>City</th>' +
                '<th>Address</th>' +
                '<th>PostalCode</th>' +
                '<th>Photo</th>' +
                '</tr>'
            $.each(d.ls, (i, j) => {
                table += '<tr><td>' + j.rownum + '</td>' +
                    '<td>' + j.customerID + '</td>' +
                    '<td>' + j.customerName + '</td>' +
                    '<td>남</td>' +
                    '<td>' + j.phone + '</td>' +
                    '<td>' + j.city + '</td>' +
                    '<td>' + j.address + '</td>' +
                    '<td>' + j.postalCode + '</td>' +
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
    return {
        init: init,
        list: list
    }
})();