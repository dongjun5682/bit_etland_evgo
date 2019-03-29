var cust = cust || {}

cust = (()=>{
	let _,js,compojs,r_cnt;
	let init =(d)=>{
		_ = $.ctx();
		 r_cnt = '#right_content';
		 l_cnt = '#left_content';
		 js = $.js();
		 compojs = js+'/component/compo.js';
		onCreate(d);
	}
	let onCreate =(d)=>{
		setContentView(d)
	}
	let setContentView =(d)=>{
		$.getScript(compojs)
		.done(()=>{
			$(r_cnt).empty();
	    	$(compo.cust_profil_form(d)).appendTo(r_cnt);  
			$(l_cnt+' ul.nav').empty();
	        let arr=[
	      	  {txt : '쇼핑몰',name : 'main'}
	      	  ,{txt : '마이페이지', name : 'mypage'}
	      	  ,{txt : '정보수정', name : 'update'}
	      	  ,{txt : '회원탈퇴', name : 'delete'}
	      	  ,{txt : '구매내역', name : 'purchase details'}
	      	  ,{txt : '장바구니', name : 'shopping basket'}];
	        
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
	                	prod.init();
	                	break;
	                 case 'mypage':
		                $(r_cnt).empty();
		                $(compo.cust_profil_form(d)).appendTo(r_cnt);  
	                	 break;
	                 case 'update':
	                	$(r_cnt).empty();
	                	$(compo.cust_update_form(d)).appendTo(r_cnt);  
	                	$('.w3-container button[type=submit]').click(()=>{
	                		update(d);
	                	}) 
	                	 break;
	                 case 'delete':
	                	 $(r_cnt).empty();
	                	 $(compo.cust_delete_form()).appendTo(r_cnt);
	                 	$('.w3-container button[type=button]').click(()=>{
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
		.fail(()=>{
            alert('component/compo.js 를 찾지  못했습니다.');
        });	
	}

	  let update =(d)=>{
	    	 let up_data = {
						customerID:d.customerID,
						password:$('.w3-twothird input[name=password]').val(),
						city:$('.w3-twothird input[name=city]').val(),
						address:$('.w3-twothird input[name=address]').val(),
						postalCode:$('.w3-twothird input[name=postalCode]').val()                    					
				}
				$.ajax({
					url : _+'/cust/update',
					type : 'POST',
					data : JSON.stringify(up_data),
					dataType : 'json',
					contentType : 'application/json',
					success : d=>{
						alert('updata 성공');
						$(r_cnt).empty();
	            		$(compo.cust_profil_form(d)).appendTo(r_cnt);  
	            		$('.w3-container button[type=submit]').click(()=>{
	            				update(d);
	            	 		})
	            	 	$('.w3-container button[type=submit]').after('<button class="btn-danger" type="button">Customer delete</button>')
	            		$('.w3-container button[type=button]').click(()=>{
	            					remove(d);
	            			})     
					},
					error : e=>{
						alert('실패했습니다');
					}
				})
	     };
	     
	     let remove =()=>{
	    	 $.ajax({
	    		 url : _+'/cust/delete',
	    		 type : 'POST',
	    		 data : JSON.stringify(),
	    		 dataType : 'json',
	    		 contentType : 'application/json',
	    		 success: d=>{
	    			 alert('회원탈퇴되셨습니다');
	    			 auth();
	    		 },
	    		 error : e=>{
	    			 
	    		 }
	    	 })
	     }  
	return {init :init}
})();