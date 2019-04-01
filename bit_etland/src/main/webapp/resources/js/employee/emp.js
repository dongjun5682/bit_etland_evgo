var emp = emp || {};

emp = (()=>{
	
	var init =()=>{
		onCreate();
	}
	var onCreate =()=>{
		setContentView();
	}
	var setContentView =()=>{
		$.when(
				$.getScript($.js()+'/component/compo.js'),
				$.getScript($.js()+'/product/prod.js'),
				$.getScript($.js()+'/employee/emp.js'),
				$.getScript($.js()+'/customer/cust.js')
		).done(()=>{
			$('#right_content').empty();
	    	$('<h1>PRODUCT REGISTER PAGE</h1>').appendTo('#right_content');  
			$('#left_content ul.nav').empty();
	        let arr=[
	      	  {txt : '사원관리',name : 'emp_mana'}
	      	  ,{txt : '회원관리', name : 'cust_mana'}
	      	  ,{txt : '제품관리', name : 'prod_mana'}
	      	  ,{txt : '제품등록', name : 'prod_post'}];
	        
	        $.each(arr,(i,j)=>{
	        	 $('<li><a  href="#">'+j.txt+'</a></li>')
		            .attr('name', j.name)
		            .appendTo('#left_content ul.nav')
		            .click(function(){
		            	 let that = $(this).attr('name');
		                 $(this).addClass('active');
		                 $(this).siblings().removeClass('active');
		                 switch (that) {
						case 'emp_mana':
							break;
						case 'cust_mana':
							cust.list();
							break;
						case 'prod_mana':
							break;
						 case 'prod_post':
		                	 $('#right_content').empty();
		                	 $(compo.prod_post()).appendTo('#right_content'); 
			                	break;
						}
		            })
/*		            $('[name=prod_post]').addClass('active');*/
	        })
		})
		
	}
	return {init:init}
})();