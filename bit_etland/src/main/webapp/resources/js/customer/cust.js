var cust = cust || {}

cust.permission =(()=>{
	let login =()=>{
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