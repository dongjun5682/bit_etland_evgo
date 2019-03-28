var auth = auth || {};
auth = (()=>{
     let _,js,compojs,r_cnt,l_cnt,img;
     
     let init =()=>{
          _ = $.ctx();
          js = $.js();
          compojs = js+'/component/compo.js';
          r_cnt = '#right_content';
          l_cnt = '#left_content';
          img = $.img();
          onCreate();
     };
     let onCreate =()=>{
          setContentView();
     };
     let setContentView =()=>{
          $.getScript(compojs)
          .done(()=>{
               $(r_cnt).empty(); 
               $(compo.main_form())
               .appendTo(r_cnt);
              $(l_cnt+' ul.nav').empty();
              let arr=[
            	  {txt : '메인',name : 'main'}
            	  ,{txt : '로그인', name : 'login'}
            	  ,{txt : '회원가입', name : 'join'}
            	  ,{txt : '사원접속', name : 'access'}
            	  ,{txt : '사원등록', name : 'register'}];
              
              $.each(arr,(i,j)=>{
                    $('<li><a  href="#">'+j.txt+'</a></li>')
                    .attr('name', j.name)
                    .appendTo(l_cnt+' ul.nav')
                    .click(function(){
                         let that = $(this).attr('name');
                         switch(that){
                         case 'main':
                        	 $(r_cnt).empty();
                        	 $(compo.main_form())
                             .appendTo(r_cnt);
                        	 break;
                         case 'login':
                              $(r_cnt).empty();
                              $(compo.cust_login_form())
                              .appendTo(r_cnt);
                              $('.imgcontainer').children().eq(0).attr('src',img+'/img_avatar2.png');
                              $('form button[type=submit]').click(e=>{   
                         	     e.preventDefault();
                                   login(); 
                            }); 
                              break;
                         case 'join':
                        	 let arr = [
                        		 {txt:'아이디',val:'customerID'},
                        		 {txt:'비밀번호',val:'password'},
                        		 {txt:'이름',val:'customerName'},
                        		 {txt:'주민번호',val:'ssn'},
                        		 {txt:'핸드폰번호',val:'phone'},
                        		 {txt:'주소',val:'city'},
                        		 {txt:'상세주소',val:'address'},
                        		 {txt:'우편번호',val:'postalCode'}
                        		 ]
                              $(r_cnt).empty();
                        	  $(compo.cust_join_form()).appendTo(r_cnt);
                        	  $('.container div[name=rm]').empty();
                              $.each(arr,(i,j)=>{
                            	  if(j.val !== 'password'){
                            		  $('<label for="'+j.val+'"><b>'+j.txt+'</b></label>'
                                			  +'<input type="text" placeholder="'+j.txt+'" name="'+j.val+'" required>')
                                      .appendTo('.container div[name=rm]');
                            		  
                            	  }else{                         
                            		  $('<label for="'+j.val+'"><b>'+j.txt+'</b></label>'
                                			  +'<input type="password" placeholder="'+j.txt+'" name="'+j.val+'" required>')
                                      .appendTo('.container div[name=rm]');
                            	  }
                            	
                              })    
                              $('form button[type=submit]').click(e=>{   
                          	     e.preventDefault();
                                    join();
                             }); 
                              break;
                         case 'access':
                              $(r_cnt).empty();
                              $(compo.emp_access_form())
                              .appendTo(r_cnt);
                              $('.imgcontainer').children().eq(0).attr('src',img+'/img_avatar2.png');
                              $('form button[type=submit]').click(e=>{   
                          	     e.preventDefault();
                                    access(); 
                             }); 
                              break;
                         case 'register':
                        	 let em_arr = [
                        		 {txt:'사원번호',val:'employeeID'},
                        		 {txt:'매니저',val:'manager'},
                        		 {txt:'이름',val:'name'},
                        		 {txt:'생년월일',val:'birthDate'},
                        		 {txt:'사진',val:'photo'},
                        		 {txt:'소개',val:'notes'}                        	
                        		 ]
                              $(r_cnt).empty();
                        	  $(compo.cust_join_form()).appendTo(r_cnt);
                        	  $('.container div[name=rm]').empty();
                              $.each(em_arr,(i,j)=>{
                            	  if(j.val !== 'password'){
                            		  $('<label for="'+j.val+'"><b>'+j.txt+'</b></label>'
                                			  +'<input type="text" placeholder="'+j.txt+'" name="'+j.val+'" required>')
                                      .appendTo('.container div[name=rm]');
                            		  
                            	  }                         
                              })    
                              $('form button[type=submit]').click(e=>{   
                          	     e.preventDefault();
                                    register();
                             }); 
                              break;
                         }
                    });
              });
          })
          .fail(()=>{
              alert('component/compo.js 를 찾지  못했습니다.');
          });
     };
     let login =()=>{
    
              let data = {
                        customerID:$('form  input[name=uname]').val(),
                        password:$('form  input[name=psw]').val()};
               $.ajax({
                    url : _+'/cust/login',
                    type : 'POST',
                    dataType : 'json',
                    data : JSON.stringify(data),
                    contentType : 'application/json',
                    success : d =>{
                    		alert('로그인 성공 : '+d.customerID);
                    		cust.init(d);                 
                    },
                    error : e=>{
                         alert('실패');
                    }
               });
     };
     let join =()=>{
    	 let data = {
    			  customerID:$('.container input[name=customerID]').val(),
                  password:$('.container input[name=password]').val(),
                  customerName:$('.container input[name=customerName]').val(),
                  ssn:$('.container input[name=ssn]').val(),
                  phone:$('.container input[name=phone]').val(),
                  city:$('.container input[name=city]').val(),
                  address:$('.container input[name=address]').val(),
                  postalCode:$('.container input[name=postalCode]').val()        
    	 };
    	 $.ajax({
    		 url : _+'/cust/join',
    		 type : 'POST',
    		 data : JSON.stringify(data),
    		 dataType : 'json',
    		 contentType : 'application/json',
    		 success : d =>{
    			 alert('성공');
    			 $(r_cnt).empty();
                 $(compo.cust_login_form())
                 .appendTo(r_cnt);
                 $('.imgcontainer').children().eq(0).attr('src',img+'/img_avatar2.png');
                 $('form button[type=submit]').click(e=>{   
            	     e.preventDefault();
                      login(); 
               }); 
    		 },
    		 error : e =>{
    			 alert('실패');
    		 }
    	 });
     };
    
     let register =()=>{
    	 let data = {
    			 employeeID:$('.container input[name=employeeID]').val(),
    			 manager:$('.container input[name=manager]').val(),
    			 name:$('.container input[name=name]').val(),
    			 birthDate:$('.container input[name=birthDate]').val(),
    			 photo:$('.container input[name=photo]').val(),
    			 notes:$('.container input[name=notes]').val()            
   	 };
   	 $.ajax({
   		 url : _+'/users/register/',
   		 type : 'POST',
   		 data : JSON.stringify(data),
   		 dataType : 'json',
   		 contentType : 'application/json',
   		 success : d =>{
   			 alert('성공');
   			 $(r_cnt).empty();
                $(compo.cust_login_form())
                .appendTo(r_cnt);
                $('.imgcontainer').children().eq(0).attr('src',img+'/img_avatar2.png');
                $('form button[type=submit]').click(e=>{   
           	     e.preventDefault();
                     login(); 
              }); 
   		 },
   		 error : e =>{
   			 alert('실패');
   		 }
   	 });
    };
     let access =()=>{
         let data = {
        		 employeeID:$('form  input[name=employeeID]').val(),
                   name:$('form  input[name=name]').val()};
          $.ajax({
               url : _+'/emp/access',
               type : 'POST',
               dataType : 'json',
               data : JSON.stringify(data),
               contentType : 'application/json',
               success : d =>{
               		alert('로그인 성공 : '+d.customerID);
               		$(r_cnt).empty();
               		$(compo.cust_profil_form(d)).appendTo(r_cnt);  
               		$('.w3-container button[type=submit]').click(()=>{
               				update(d);
               	 		})               
               	 	$('.w3-container button[type=submit]').after('<button type="submit">Customer delete</button>')
               	 	
               },
               error : e=>{
                    alert('실패');
               }
          });
    	 
     };
     return {init:init};
})();