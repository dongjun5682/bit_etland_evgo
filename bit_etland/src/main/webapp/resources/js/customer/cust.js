var cust = cust || {}

cust.permission =(()=>{
	let login =()=>{
		$('#left_content>ul.nav').empty();
		let arr =[
			{name:'로그인',val:'cust_login'},
			{name:'회원가입',val:'cust_join'},
			{name:'사원접속',val:'emp_access'},
			{name:'사원등록',val:'emp_register'}
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
				case 'cust_login':
					
					break;
				case 'cust_join':
					
					break;
				case 'emp_access':
					
					break;
				case 'emp_register':
					
					break;
				}
				/*
				$(this)
				.parent()
				.attr('class','active')
				.parent()
				.siblings()
				.removeClass('active');*/
			})
		})
		
		$.getScript($.js()+'/component/compo.js')
		.done(()=>{
			$('#right_content').html(compo.cust_login_form());
			$('.imgcontainer').children().eq(0).attr('src',$.img()+'/img_avatar2.png');
			
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