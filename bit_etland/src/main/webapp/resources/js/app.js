var app = app || {};
app=(()=>{
	var init =x=>{
		app.$.init(x);
	}
	var onCreate = ()=>{
		setContentView();
	}
	var setContentView =()=>{
		$.when(
				$.getScript($.js()+'/component/compo.js'),
				$.getScript($.js()+'/employee/emp.js'),
				$.getScript($.js()+'/customer/cust.js')
		).done(()=>{
			compo.navi();
			cust.permission.login();
			$('#li_2').click(()=>{
				$('#lists').children().eq(0).removeClass('active');
				$('#lists').children().eq(1).attr('class','active');
				$('#right_content').html(compo.cust_join_form());
			});
			$('#li_1').click(()=>{
				$('#lists').children().eq(1).removeClass('active');
				$('#lists').children().eq(0).attr('class','active');
				cust.permission.login();
			});
		}
		);
	}
	return{init : init,
		onCreate:onCreate}
})();

app.$ = {
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				app.onCreate();
			})
		}	
	};