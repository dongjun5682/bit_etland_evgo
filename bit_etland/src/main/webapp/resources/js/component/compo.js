var compo = compo || {};
compo = {
    main_form: () => {
        return '<div class="jumbotron text-center">' +
            '  <h1>Bit Company</h1> ' +
            '  <p>We specialize in blablabla</p> ' +
            '</div>'
    },
    cust_login_form: () => {
        return '<h2>Login Form</h2>' +
            '<form>' +
            ' <div class="imgcontainer">' +
            '    <img src="/img_avatar2.png" alt="Avatar" class="avatar">' +
            '  </div>' +
            '  <div class="container">' +
            '    <label for="uname"><b>Username</b></label>' +
            '    <input type="text" placeholder="Enter Username" name="uname" value="as">' +
            '    <label for="psw"><b>Password</b></label>' +
            '    <input type="password" placeholder="Enter Password" name="psw" value="1234">' +
            '    <button type="submit">Login</button>' +
            '    <label>' +
            '      <input type="checkbox" checked="checked" name="remember"> Remember me' +
            '    </label>' +
            '  </div>' +
            '  <div class="container" style="background-color:#f1f1f1">' +
            '    <button type="button" class="cancelbtn">Cancel</button>' +
            '    <span class="psw">Forgot <a href="#">password?</a></span>' +
            '  </div>' +
            '</form>'
    },
    cust_join_form: () => {
        return '<form style="border:1px solid #ccc">' +
            '  <div class="container">' +
            '    <h1>Sign Up</h1>' +
            '    <p>Please fill in this form to create an account.</p>' +
            '    <hr>' +
            '<div name="rm">' +
            '    <label for="email"><b>Email</b></label>' +
            '    <input type="text" placeholder="Enter Email" name="email" required>' +
            '    <label for="psw"><b>Password</b></label>' +
            '    <input type="password" placeholder="Enter Password" name="psw" required>' +
            '    <label for="psw-repeat"><b>Repeat Password</b></label>' +
            '    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>' +
            '</div>' +
            '    <label>' +
            '      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me' +
            '    </label>' +
            '    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>' +
            '    <div class="clearfix">' +
            '      <button type="button" class="cancelbtn">Cancel</button>' +
            '      <button type="submit" class="signupbtn">Sign Up</button>' +
            '    </div>' +
            '  </div>' +
            '</form>'
    },
    emp_access_form: () => {
        return '<h2>Login Form</h2>' +
            '<form action="/action_page.php">' +
            ' <div class="imgcontainer">' +
            '    <img src="/img_avatar2.png" alt="Avatar" class="avatar">' +
            '  </div>' +
            '  <div class="container">'
            /*	+'    <label for="employeeID"><b>Employee ID</b></label>'
            	+'    <input type="text" placeholder="Enter employeeID" name="employeeID" value="1000">'
            	+'    <label for="name"><b>Name</b></label>'
            	+'    <input type="text" placeholder="Enter Name" name="name" value="김경민">'*/
            +
            '    <button type="submit">Access</button>' +
            '    <label>' +
            '      <input type="checkbox" checked="checked" name="remember"> Remember me' +
            '    </label>' +
            '  </div>' +
            '  <div class="container" style="background-color:#f1f1f1">' +
            '    <button type="button" class="cancelbtn">Cancel</button>' +
            '    <span class="psw">Forgot <a href="#">password?</a></span>' +
            '  </div>' +
            '</form>'
    },
    emp_register_form: () => {
        return '<form style="border:1px solid #ccc">' +
            '  <div class="container">' +
            '    <h1>Sign Up</h1>' +
            '    <p>Please fill in this form to create an account.</p>' +
            '    <hr>' +
            '    <label for="email"><b>Email</b></label>' +
            '    <input type="text" placeholder="Enter Email" name="email" required>' +
            '    <label for="psw"><b>Password</b></label>' +
            '    <input type="password" placeholder="Enter Password" name="psw" required>' +
            '    <label for="psw-repeat"><b>Repeat Password</b></label>' +
            '    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>' +
            '    <label>' +
            '      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me' +
            '    </label>' +
            '    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>' +
            '    <div class="clearfix">' +
            '      <button type="button" class="cancelbtn">Cancel</button>' +
            '      <button type="submit" class="signupbtn">Sign Up</button>' +
            '    </div>' +
            '  </div>' +
            '</form>'
    },
    cust_profil_form: (d) => {
        return '<div class="w3-content w3-margin-top" style="max-width:1400px;">' +
            '  <!-- The Grid -->' +
            '  <div class="w3-row-padding">' +
            '    <!-- Left Column -->' +
            '    <div class="w3-third">' +
            '      <div class="w3-white w3-text-grey w3-card-4">' +
            '        <div class="w3-display-container">' +
            '          <img src="/w3images/avatar_hat.jpg" style="width:100%" alt="Avatar">' +
            '          <div class="w3-display-bottomleft w3-container w3-text-black">' +
            '            <h2>' + d.customerID + '</h2>' +
            '          </div>' +
            '        </div>' +
            '        <div class="w3-container">' +
            '          <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>이름: ' + d.customerName + '</p>' +
            '          <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>휴대폰번호 : ' + d.phone + '</p>' +
            '          <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>주소 : ' + d.city + '</p>' +
            '          <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>상세주소 : ' + d.address + '</p>' +
            '          <hr>' +
            '          <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>' +
            '          <p>Java</p>' +
            '          <div class="w3-light-grey w3-round-xlarge w3-small">' +
            '            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div>' +
            '          </div>' +
            '          <p>JavaScript</p>' +
            '          <div class="w3-light-grey w3-round-xlarge w3-small">' +
            '            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:85%">' +
            '              <div class="w3-center w3-text-white">85%</div>' +
            '            </div>' +
            '          </div>' +
            '          <p>Ajax</p>' +
            '          <div class="w3-light-grey w3-round-xlarge w3-small">' +
            '            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:85%">85%</div>' +
            '          </div>' +
            '          <p>SQL</p>' +
            '          <div class="w3-light-grey w3-round-xlarge w3-small">' +
            '            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%">80%</div>' +
            '          </div>' +
            '          <br>' +
            '          <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>' +
            '          <p>English</p>' +
            '          <div class="w3-light-grey w3-round-xlarge">' +
            '            <div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>' +
            '          </div>' +
            '          <p>Spanish</p>' +
            '          <div class="w3-light-grey w3-round-xlarge">' +
            '            <div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div>' +
            '          </div>' +
            '          <p>German</p>' +
            '          <div class="w3-light-grey w3-round-xlarge">' +
            '            <div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>' +
            '          </div>' +
            '          <br>' +
            '        </div>' +
            '      </div><br>' +
            '    <!-- End Left Column -->' +
            '    </div>' +
            '    <!-- Right Column -->' +
            '    <div class="w3-twothird">' +
            '      <div class="w3-container w3-card w3-white w3-margin-bottom">' +
            '      <div class="w3-container w3-card w3-white">' +
            '        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>' +
            '        <div class="w3-container">' +
            '          <h5 class="w3-opacity"><b>W3Schools.com</b></h5>' +
            '          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>' +
            '          <p>Web Development! All I need to know in one place</p>' +
            '          <hr>' +
            '        </div>' +
            '        <div class="w3-container">' +
            '          <h5 class="w3-opacity"><b>London Business School</b></h5>' +
            '          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>' +
            '          <p>Master Degree</p>' +
            '          <hr>' +
            '        </div>' +
            '        <div class="w3-container">' +
            '          <h5 class="w3-opacity"><b>School of Coding</b></h5>' +
            '          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>' +
            '          <p>Bachelor Degree</p><br>' +
            '        </div>' +
            '      </div>' +
            '    <!-- End Right Column -->' +
            '    </div>  ' +
            '  <!-- End Grid -->' +
            '  </div> ' +
            '  <!-- End Page Container -->' +
            '</div>'
    },
    cust_update_form: (d) => {
        return '<h2 class="w3-text-grey w3-padding-16">정보수정</h2>' +
            '        <div class="w3-container">' +
            '    <label for="password"><b>비밀번호</b></label>' +
            '    <input type="password" placeholder="modify password" name="password" value="' + d.password + '">' +
            '          <hr>' +
            '    <label for="city"><b>주소</b></label>' +
            '    <input type="text" placeholder="modify city" name="city" value="' + d.city + '" >' +
            '          <hr>' +
            '    <label for="address"><b>상세주소</b></label>' +
            '    <input type="text" placeholder="modify address" name="address" value="' + d.address + '" >' +
            '          <hr>' +
            '    <label for="postalCode"><b>우편번호</b></label>' +
            '    <input type="text" placeholder="modify postalCode" name="postalCode" value="' + d.postalCode + '" >' +
            '          <hr>' +
            '    <button type="submit">Update</button>' +
            '        </div>'
    },
    cust_delete_form: () => {
        return '<h2 class="w3-text-grey w3-padding-16">회원 탈퇴</h2>' +
            '        <div class="w3-container">' +
            '    <label for="password"><b>비밀번호</b></label>' +
            '    <input type="password" placeholder="modify password" name="password">' +
            '          <hr>' +
            '<button class="btn-danger" type="button">Customer delete</button>' +
            '        </div>'
    },
    cust_shopping_form: () => {
        return '<div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">' +
            '<nav class="navbar navbar-default">' +
            '  <div class="container">' +
            '    <div class="navbar-header">' +
            '      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">' +
            '        <span class="icon-bar"></span>' +
            '        <span class="icon-bar"></span>' +
            '        <span class="icon-bar"></span>                        ' +
            '      </button>' +
            '      <a class="navbar-brand" href="#myPage">Logo</a>' +
            '    </div>' +
            '    <div class="collapse navbar-collapse" id="myNavbar">' +
            '      <ul class="nav navbar-nav navbar-right">' +
            '        <li><a href="#about">ABOUT</a></li>' +
            '        <li><a href="#services">SERVICES</a></li>' +
            '        <li><a href="#portfolio">PORTFOLIO</a></li>' +
            '        <li><a href="#pricing">PRICING</a></li>' +
            '        <li><a href="#contact">CONTACT</a></li>' +
            '      </ul>' +
            '    </div>' +
            '  </div>' +
            '</nav>' +
            '<div class="jumbotron text-center">' +
            '  <h1>Company</h1> ' +
            '  <p>We specialize in blablabla</p> ' +
            '  <form class="form-inline">' +
            '    <div class="input-group">' +
            '      <input type="email" class="form-control" size="50" placeholder="Email Address" required="">' +
            '      <div class="input-group-btn">' +
            '        <button type="button" class="btn btn-danger">Subscribe</button>' +
            '      </div>' +
            '    </div>' +
            '  </form>' +
            '</div>' +
            '<!-- Container (About Section) -->' +
            '<div id="about" class="container-fluid">' +
            '  <div class="row">' +
            '    <div class="col-sm-8">' +
            '      <h2>About Company Page</h2><br>' +
            '      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' + 'ostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br>' +
            '      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' + 'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
            'mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
            '    </div>' +
            '    <div class="col-sm-4">' +
            '      <span class="glyphicon glyphicon-signal logo"></span>' +
            '    </div>' +
            '  </div>' +
            '</div>' +
            '<!-- Container (Portfolio Section) -->' +
            '<div id="portfolio" class="container-fluid text-center bg-grey">' +
            '  <h2>Portfolio</h2><br>' +
            '  <h4>What we have created</h4>' +
            '  <div class="row text-center slideanim">' +
            '    <div class="col-sm-4">' +
            '      <div class="thumbnail">' +
            '        <img src="' + $.img() + 'galaxy.jpg" alt="Paris" width="400" height="300">' +
            '        <p><strong>Paris</strong></p>' +
            '        <p>Yes, we built Paris</p>' +
            '      </div>' +
            '    </div>' +
            '    <div class="col-sm-4">' +
            '      <div class="thumbnail">' +
            '        <img src="' + $.img() + 'iphone.jpg" alt="New York" width="400" height="300">' +
            '        <p><strong>New York</strong></p>' +
            '        <p>We built New York</p>' +
            '      </div>' +
            '    </div>' +
            '    <div class="col-sm-4">' +
            '      <div class="thumbnail">' +
            '        <img src="' + $.img() + 'lg.png" alt="San Francisco" width="400" height="300">' +
            '        <p><strong>San Francisco</strong></p>' +
            '        <p>Yes, San Fran is ours</p>' +
            '      </div>' +
            '    </div>' +
            '  </div><br>' +
            '  <h2>What our customers say</h2>' +
            '  <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">' +
            '    <!-- Indicators -->' +
            '    <ol class="carousel-indicators">' +
            '      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>' +
            '      <li data-target="#myCarousel" data-slide-to="1" class=""></li>' +
            '      <li data-target="#myCarousel" data-slide-to="2" class=""></li>' +
            '    </ol>' +
            '    <!-- Wrapper for slides -->' +
            '    <div class="carousel-inner" role="listbox">' +
            '      <div class="item active">' +
            '        <h4>"This company is the best. I am so happy with the result!"<br><span>Michael Roe, Vice President, Comment Box</span></h4>' +
            '      </div>' +
            '      <div class="item">' +
            '        <h4>"One word... WOW!!"<br><span>John Doe, Salesman, Rep Inc</span></h4>' +
            '      </div>' +
            '      <div class="item">' +
            '        <h4>"Could I... BE any more happy with this company?"<br><span>Chandler Bing, Actor, FriendsAlot</span></h4>' +
            '      </div>' +
            '    </div>' +
            '    <!-- Left and right controls -->' +
            '    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">' +
            '      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
            '      <span class="sr-only">Previous</span>' +
            '    </a>' +
            '    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">' +
            '      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
            '      <span class="sr-only">Next</span>' +
            '    </a>' +
            '  </div>' +
            '</div>' +
            '<!-- Container (Pricing Section) -->' +
            '<div id="pricing" class="container-fluid">' +
            '  <div class="text-center">' +
            '    <h2>Pricing</h2>' +
            '    <h4>Choose a payment plan that works for you</h4>' +
            '  </div>' +
            '  <div class="row slideanim">' +
            '    <div class="col-sm-4 col-xs-12">' +
            '      <div class="panel panel-default text-center">' +
            '        <div class="panel-heading">' +
            '          <h1>Basic</h1>' +
            '        </div>' +
            '        <div class="panel-body">' +
            '          <p><strong>20</strong> Lorem</p>' +
            '          <p><strong>15</strong> Ipsum</p>' +
            '          <p><strong>5</strong> Dolor</p>' +
            '          <p><strong>2</strong> Sit</p>' +
            '          <p><strong>Endless</strong> Amet</p>' +
            '        </div>' +
            '        <div class="panel-footer">' +
            '          <h3>$19</h3>' +
            '          <h4>per month</h4>' +
            '          <button class="btn btn-lg">Sign Up</button>' +
            '        </div>' +
            '      </div>      ' +
            '    </div>     ' +
            '    <div class="col-sm-4 col-xs-12">' +
            '      <div class="panel panel-default text-center">' +
            '        <div class="panel-heading">' +
            '          <h1>Pro</h1>' +
            '        </div>' +
            '        <div class="panel-body">' +
            '          <p><strong>50</strong> Lorem</p>' +
            '          <p><strong>25</strong> Ipsum</p>' +
            '          <p><strong>10</strong> Dolor</p>' +
            '          <p><strong>5</strong> Sit</p>' +
            '          <p><strong>Endless</strong> Amet</p>' +
            '        </div>' +
            '        <div class="panel-footer">' +
            '          <h3>$29</h3>' +
            '          <h4>per month</h4>' +
            '          <button class="btn btn-lg">Sign Up</button>' +
            '        </div>' +
            '      </div>      ' +
            '    </div>       ' +
            '    <div class="col-sm-4 col-xs-12">' +
            '      <div class="panel panel-default text-center">' +
            '        <div class="panel-heading">' +
            '          <h1>Premium</h1>' +
            '        </div>' +
            '        <div class="panel-body">' +
            '          <p><strong>100</strong> Lorem</p>' +
            '          <p><strong>50</strong> Ipsum</p>' +
            '          <p><strong>25</strong> Dolor</p>' +
            '          <p><strong>10</strong> Sit</p>' +
            '          <p><strong>Endless</strong> Amet</p>' +
            '        </div>' +
            '        <div class="panel-footer">' +
            '          <h3>$49</h3>' +
            '          <h4>per month</h4>' +
            '          <button class="btn btn-lg">Sign Up</button>' +
            '        </div>' +
            '      </div>      ' +
            '    </div>    ' +
            '  </div>' +
            '</div>' +
            '<!-- Container (Contact Section) -->' +
            '<div id="contact" class="container-fluid bg-grey">' +
            '  <h2 class="text-center">CONTACT</h2>' +
            '  <div class="row">' +
            '    <div class="col-sm-5">' +
            '      <p>Contact us and well get back to you within 24 hours.</p>' +
            '      <p><span class="glyphicon glyphicon-map-marker"></span> Chicago, US</p>' +
            '      <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>' +
            '      <p><span class="glyphicon glyphicon-envelope"></span> myemail@something.com</p>' +
            '    </div>' +
            '    <div class="col-sm-7 slideanim">' +
            '      <div class="row">' +
            '        <div class="col-sm-6 form-group">' +
            '          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required="">' +
            '        </div>' +
            '        <div class="col-sm-6 form-group">' +
            '          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required="">' +
            '        </div>' +
            '      </div>' +
            '      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br>' +
            '      <div class="row">' +
            '        <div class="col-sm-12 form-group">' +
            '          <button class="btn btn-default pull-right" type="submit">Send</button>' +
            '        </div>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</div>' +
            '<img src="' + $.img() + '/map.jpg" class="w3-image w3-greyscale-min" style="width:100%">' +
            '<footer class="container-fluid text-center">' +
            '  <a href="#myPage" title="To Top">' +
            '    <span class="glyphicon glyphicon-chevron-up"></span>' +
            '  </a>' +
            '  <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" title="Visit w3schools">www.w3schools.com</a></p>' +
            '</footer>' +
            '</div>'
    },
    prod_post : ()=>{
    	return '<div class="col-md-8 order-md-1">'
    	+'          <h4 class="mb-3">상품 등록</h4>'
    	+'            <div class="row">'
    	+'              <div class="col-md-5 mb-3">'
    	+'                <label for="categoryID">제품 카테고리</label>'
    	+'                <select class="custom-select d-block w-100" id="categoryID" required="">'
    	+'					<option value="">카테고리</option>'
    	+'					<option value="SmartPhone">스마트폰</option>'
        +'					<option value="Desktop">데스크탑</option>'
        +'					<option value="NoteBook">노트북</option>'
    	+'                </select>'
    	+'				</div>'
    	+'            </div>'
    	+'            <div class="row">'
    	+'              <div class="col-md-6 mb-3">'
    	+'                <label for="lastName">상품명</label>'
    	+'                <input type="text" class="form-control" id="productName" placeholder="" value="" required="">'
    	+'              </div>'
    	+'            </div>'
    	+'            <div class="mb-3">'
    	+'              <label for="price">가격</label>'
    	+'              <input type="text" class="form-control" id="price" placeholder="가격">'
    	+'              <div class="invalid-feedback">'
    	+'                ex)1,000,000'
    	+'              </div>'
    	+'            </div>'
    	+'            <div class="mb-3">'
    	+'              <label for="unit">수량</label>'
    	+'              <input type="text" class="form-control" id="unit" placeholder="수량">'
    	+'              <div class="invalid-feedback">'
    	+'                ex)5'
    	+'              </div>'
    	+'            </div>'
    	+'					<br>'
    	+'            <div class="row">'
    	+'              <div class="col-md-5 mb-3">'
    	+'                <label for="country">공급업체</label>'
    	+'                <select class="custom-select d-block w-100" id="supplierID" required="">'
    	+'                  <option value="">업체명</option>'
    	+'                  <option value="samsung">삼성전자</option>'
    	+'                  <option value="lge">LG전자</option>'
    	+'                  <option value="apple">애플</option>'
    	+'                  <option value="xiami">샤오미</option>'
    	+'                </select>'
    	+'				</div>'
    	+'            </div>'
    	+'            <hr class="mb-4">'
    	+'            <div class="custom-control custom-checkbox">'
    	+'				<div class="invalid-feedback">'
    	+'                  사은품 선택(두 개)'
    	+'                </div>'
    	+'              <input type="checkbox" class="checks custom-control-input" value="film" id="same-address">'
    	+'              <label class="custom-control-label" for="same-address">필름</label>'
    	+'            </div>'
    	+'            <div class="custom-control custom-checkbox">'
    	+'              <input type="checkbox" class="checks custom-control-input" value="battery" id="save-info">'
    	+'              <label class="custom-control-label" for="save-info">보조배터리</label>'
    	+'            </div>'
      	+'            <div class="custom-control custom-checkbox">'
    	+'              <input type="checkbox" class="checks custom-control-input" value="case" id="save-info">'
    	+'              <label class="custom-control-label" for="save-info">케이스</label>'
    	+'            </div>'
    	+'            <hr class="mb-4">'
    	+'            <h4 class="mb-3">색상을 선택해주세요</h4>'
    	+'            <div class="d-block my-3">'
    	+'              <div class="custom-control custom-radio">'
    	+'                <input id="colorBlack" name="paymentMethod" type="radio" class="radi custom-control-input" checked="" value="black" required="">'
    	+'                <label class="custom-control-label" for="credit">Black</label>'
    	+'              </div>'
    	+'              <div class="custom-control custom-radio">'
    	+'                <input id="colorRed" name="paymentMethod" type="radio" class="radi custom-control-input" value="red" required="">'
    	+'                <label class="custom-control-label" for="debit">Red</label>'
    	+'              </div>'
    	+'              <div class="custom-control custom-radio">'
    	+'                <input id="colorBlue" name="paymentMethod" type="radio" class="radi custom-control-input" value="blue" required="">'
    	+'                <label class="custom-control-label" for="paypal">Blue</label>'
    	+'              </div>'
    	+'            </div>'
      	+'            <hr class="mb-4">'
    	+'            <div class="row">'
    	+'              <div class="col-md-6 mb-3">'
    	+'                <label for="comment">제품설명</label>'
    	+'                <input type="textarea" class="form-control" id="comment" placeholder="" required="">'
    	+'                <div class="invalid-feedback">'
    	+'                  Product Comment'
    	+'                </div>'
    	+'              </div>'
    	+'</div>'
    	+'            <hr class="mb-4">'
    	+'              <div class="mb-3">'
    	+			  	'<form id="img_upload_frm" encType="multipart/form-data">'
    	+'                <label for="cc-expiration">이미지 등록(파일 업로드)</label>'
    	+'                <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">'
    	+'                <div class="invalid-feedback">'
    	+'                  Expiration date required'
    	+'                </div>'
    	+'<input type="submit" id="img_upload_btn">'
    	+'				</form>'
    	+'              </div>'
    	+'              <div class="mb-3">'
    	+'				<form id="img_drag_frm"  encType="multipart/form-data">'
    	+'                <label for="cc-cvv">이미지 등록(드래그&드랍)</label>'
    	+'                <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">'
    	+'                <div class="invalid-feedback">'
    	+'                  Security code required'
    	+'                </div>'
    	+'<input type="submit" id="img_drag_btn">'
    	+'				<form>'
    	+'              </div>'
    	+'            <hr class="mb-4">'
    	+'            <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>'
    	+'        </div>'
    }
}