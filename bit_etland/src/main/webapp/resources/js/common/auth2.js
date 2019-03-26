var auth = auth || {}

auth.permission =(()=>{
/*	let _ = $.ctx();
	let js = $.js();
	let img = $.img();
	let compojs = $.js()+'/component/compo.js';
	let rightCtnt = $('#right_content');
*/
	let init =()=>{
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView=()=>{
		
	};
	let login =()=>{
		$.getScript($.js()+'/component/compo.js')
		.done(()=>{
			$('#right_content').html(compo.cust_login_form());
			$('.imgcontainer').children().eq(0).attr('src',$.img()+'/img_avatar2.png');
			$('#left_content>ul.nav').empty();
			let arr =[
				{name:'로그인',val:'login'},
				{name:'회원가입',val:'join'},
				{name:'사원접속',val:'access'},
				{name:'사원등록',val:'register'}
				];
			$.each(arr,(i,j)=>{
				$('<li><a href="#">'+j.name+'</a></li>')
				.appendTo('#left_content>ul.nav')
				.children()
				.attr('name',j.val)
				.click(function(){
					
					let that = $(this).attr('name');
					alert(that);
					switch (that) {
					case 'login':
						$('#right_content').empty();
						$(compo.cust_login_form()).appendTo('#right_content');
						$('.imgcontainer').children().eq(0).attr('src',$.img()+'/img_avatar2.png');
						$('.nav').children().eq(0).attr('class','active');
						
						$('.container> [type=submit]').click(()=>{
							
							let data ={
									customerID: $('form input[name=uname]').val(),
									password : $('form input[name=psw]').val()
									}
								
							alert('ctx : '+ $.ctx()+' id : '+data.customerID+' pwd : '+ data.password);
							$.ajax({
								url : $.ctx()+'/cust/login',
								type : 'POST',
								data : JSON.stringify(data),
								dataType: 'json',
								contentTpye : 'application/json',
								success : d=>{
									alert('접속성공');
								},
								error : e=>{
									alert('login ajax error');
								}
							});
						})
						
						break;
					case 'join':
						$('#right_content').empty();
						$(compo.cust_join_form()).appendTo('#right_content');
						break;
					case 'access':
						$('#right_content').empty();
						$(compo.emp_access_form()).appendTo('#right_content');
						$('.imgcontainer').children().eq(0).attr('src',img+'/img_avatar2.png');
						break;
					case 'register':
						$('#right_content').empty();
						$(compo.emp_register_form()).appendTo('#right_content');
						break;
					}
					/*
					 * $(this) .parent() .attr('class','active') .parent()
					 * .siblings() .removeClass('active');
					 */
				})
			})
			
		})
		.fail(()=>{
			alert('compo를 찾지 못했습니다.');
		});
	};
	let join =()=>{
		
	};
	let mypage =()=>{
		
	};
	
	return {
		login : login,
		join : join,
		mypage : mypage
	}
})();