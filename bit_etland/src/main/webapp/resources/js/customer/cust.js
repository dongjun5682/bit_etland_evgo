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
		$('.w3-container button[type=submit]').after('<button type="submit">Customer delete</button>')
	}
	
	return {init :init}
})();