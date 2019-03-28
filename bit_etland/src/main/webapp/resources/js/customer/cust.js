var cust = cust || {}

cust = (()=>{
	let _,js,compojs,r_cnt;
	let init =(d)=>{
		_ = $.ctx();
		 r_cnt = '#right_content';
		 js = $.js();
		 compojs = js+'/component/compo.js';
		onCreate(d);
	}
	let onCreate =(d)=>{
		setContentView(d)
	}
	let setContentView =(d)=>{

		$(r_cnt).empty();
		$(compo.cust_profil_form(d)).appendTo(r_cnt);  
		$('.w3-container button[type=submit]').click(()=>{
		          update(d);
		})               
		
		$('.w3-container button[type=submit]').after('<button class="btn-danger" type="button">Customer delete</button>')
		$('.w3-container button[type=button]').click(()=>{
				remove(d);
		})              
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
	    		 data : JSON.stringify()
	    	 })
	     }  
	return {init :init}
})();