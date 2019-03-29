var prod = prod ||{};
prod = (()=>{
    let init =()=>{
         onCreate();
    };
    let onCreate =()=>{
         setContentView();
    };
    let setContentView =()=>{
    	$.getScript()
    	.done()
    	$(r_cnt).empty();
    	$(compo.cust_shopping_form()).appendTo(r_cnt); 
    }
    return {init :init}
});