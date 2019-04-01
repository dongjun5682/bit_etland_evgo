var prod = prod || {};

prod = (()=>{
	let _,js,compojs,r_cnt,l_cnt;
	let init =()=>{
		_ = $.ctx();
		 r_cnt = '#right_content';
		 l_cnt = '#left_content';
		 js = $.js();
		 compojs = js+'/component/compo.js';
		onCreate();
	}
	let onCreate =()=>{
		setContentView();
	}
	let setContentView =()=>{
		$.when(
				$.getScript(compojs),
				$.getScript($.js()+'/customer/cust.js'))
    	.done(()=>{
    		$(r_cnt).empty();
        	$(compo.cust_shopping_form()).appendTo(r_cnt); 
        	$(l_cnt+' ul.nav').empty();
        	let arr=[
        		{txt : '메인',name : 'main'},
          	  {txt : '카테고리',name : 'catego'}
        	  ];
            $.each(arr,(i,j)=>{
            	$('<li><a  href="#">'+j.txt+'</a></li>')
	            .attr('name', j.name)
	            .appendTo(l_cnt+' ul.nav')
	            .click(function(){
	            	  let that = $(this).attr('name');
		                 $(this).addClass('active');
		                 $(this).siblings().removeClass('active');
		                 switch(that){
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
    	.fail(()=>{
            alert('component/compo.js 를 찾지  못했습니다.');
        });	
    	
    }
	let post=()=>{
		
	}
	let get=()=>{
		
	}
	let put=()=>{
		
	}
	let del=()=>{
		
	}
	return {init :init}
})();