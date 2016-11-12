function js_con(){//notice:c此处转码与EVAL之间出现问题，故暂时将数据以字符串形式存入数组，并在进行EVAL转换为数组！！！！！！！！！
			this.content_a=0;
			this.content_b=0;
			this.verify_a=true;
			this.register_a=false;//判断登录用户信息开关
			this.register_b;
			this.register_c;
			this.sw1=false;//判断注册输入内容开关
			this.sw2=false;
			this.sw3=false;
			this.name=[];//暂存当前账户注册信息
			this.password=[];
			this.email=[];
			this.arr_code=["8RVJ","BBK9","CVKH","C6JV"];

			var _self=this;

			this.con_change=function(){
				this.content_b=parseInt(Math.random()*4);
				$('.verification_code span img').attr({src:'images/code/'+this.content_b+'.png'});
			}
			this.con_change_do=function(){
				this.content_a=parseInt(Math.random()*4);
			$('.con_left').attr({src:'images/banner/'+this.content_a+'.jpg'})
			//function con_change(){}this.content_b此变量在此函数作用域外不起作用！！！

			$('.verification_code span a').click(function(){
				_self.con_change();
			})
			$('input').focus(function(){
				$(this).closest("dl").css({borderColor:'green'});
			})
			$('input').blur(function(){
				$(this).closest("dl").css({borderColor:'#f5f5f5'})
			})//以上为鼠标移入边框变色

			$('.help_left input').click(function(){
				if($('.help_left input').is(':checked')){
				$('.help_left em').css({display:"inline"})
			}else{
				$('.help_left em').css({display:"none"})
			}	
			})//以上为复选框选中提示

			$('.verification_code span').mouseover(function(){
				$('.verification_code a').css({display:'block'})
			})
			$('.verification_code span').mouseout(function(){
				$('.verification_code a').css({display:'none'})
			})
			}
			this.register=function(){//当前页面输入信息验证
				var re01 = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,12}$/;//验证字符串必须包含字母且包含数字，且长度必须为6-12
				var re02 = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,12}$/;
				var re03 = /^\d+@[a-z]+\.com$/;
				/*if(_self.getCookie('account')){
					console.log(eval(_self.getCookie('account'))[0]["name"][0].split(","));
					console.log(eval(_self.getCookie('account'))[0]["password"]);
					console.log(eval(_self.getCookie('account'))[0]["email"]);
					console.log(typeof eval(_self.getCookie('account'))[0]["name"][0]);
				}///字符串类型的一系列测试
				

				/*var m=[{name:["z458181109"],password:["z458181109"],email:["458181109@qq.com"]}];
				console.log(eval(m)[0]);*///测试eval

				//var str = "2222s222";
				//console.log(reg.test(str));//测试正则表达式
				 $('#ipt_re01').blur(function(){
				 	var x=ipt_re01.value;
				 	
				 	if(!re01.test(x)){
				 		$('.r_phone .fir').css({display:"none"});
				 		$('.r_phone .sec').css({display:"block"});
				 		_self.sw1=false;
				 	}else{
				 		$('.r_phone .fir').css({display:"block"});
				 		$('.r_phone .sec').css({display:"none"});
				 		_self.sw1=true;
				 	}
				 	if(_self.getCookie('account')){
				 	for(var i=0;i<eval(_self.getCookie('account'))[0]['name'][0].split(",").length;i++){
						if(ipt_re01.value==eval(_self.getCookie('account'))[0]['name'][0].split(",")[i]){
							$('.r_phone .fir').css({display:"none"});
							$('.r_phone .sec em').html('该用户已注册，请登录！');
					 		$('.r_phone .sec').css({display:"block"});
					 		_self.sw1=false;
						}
					}};

				 });
				 $('#ipt_re02').blur(function(){
				 	var x=ipt_re02.value;
				 	if(!re02.test(x)){
				 		$('.r_password .fir').css({display:"none"});
				 		$('.r_password .sec').css({display:"block"});
				 		_self.sw2=false;
				 	}else{
				 		$('.r_password .fir').css({display:"block"});
				 		$('.r_password .sec').css({display:"none"});
				 		_self.sw2=true;
				 	}
				 });
				 $('#ipt_re03').blur(function(){
				 	var x=ipt_re03.value;
				 
				 	if(!re03.test(x)){
				 		$('.r_email .sec').css({display:"block"});
				 		_self.sw3=false;
				 	}else{
				 		$('.r_email .sec').css({display:"none"});
				 		_self.sw3=true;
				 	}
				 	if(_self.getCookie('account')){
				 	for(var i=0;i<eval(_self.getCookie('account'))[0]['email'][0].split(',').length;i++){
						if(ipt_re03.value==eval(_self.getCookie('account'))[0]['email'][0].split(',')[i]){
							console.log(1)
							$('.r_email .sec em').html('此邮箱已注册！');
					 		$('.r_email .sec').css({display:"block"});
					 		_self.sw3=false;
						}
					}}
				 });
				 $('.re_button').click(function(){
				 	//console.log(_self.sw1,_self.sw2,_self.sw3)//测试所有判断条件
				 	$('#alert h3 a').click(function(){$('#alert').css({display:"none"})})
				 	if(!(_self.sw1&&_self.sw2&&_self.sw3)){
				 		_self.alert("提交失败");
				 	}else{//此条件以上均为验证页面中条件是否正确，下部内容为验证条件通过，并将账户加入cookie；
				 		_self.addcookie();
				 		_self.alert("提交成功");
						window.location.href="http://localhost/zosc/sub%20page/login/login.html";
				 	}
				 });
			}

			this.alert=function(information,y){//3秒弹出框！！！
				var y=3;
				$('#alert .thir span').html(y);
				$('#alert').css({display:"block"});
				$('#alert .sec span').html(information);
				alert_timer=setInterval(function(){
				 		if(y>=0){
				 				$('#alert .thir span').html(y--);
				 		}else{
				 				$('#alert').css({display:"none"});
				 				clearInterval(alert_timer);
				 			}
				 		},1000);
			}

			this.addcookie=function(){//修改cookie；
				if(this.getCookie("account")){
					this.name=eval(this.getCookie('account'))[0]['name'];
					this.password=eval(this.getCookie('account'))[0]['password'];
					this.email=eval(this.getCookie('account'))[0]['email'];
					this.name.push(ipt_re01.value);//其不为字符串类型，需要转换
					this.password.push(ipt_re02.value);
					this.email.push(ipt_re03.value);
					console.log(this.name);
					this.setCookie("account","[{name:[\'"+this.name+"\'],password:[\'"+this.password+"\'],email:[\'"+this.email+"\']}]",7);
				}else{
					this.setCookie("account","[{name:[\'"+ipt_re01.value+"\'],password:[\'"+ipt_re02.value+"\'],email:[\'"+ipt_re03.value+"\']}]",7);
					//console.log(2);
				}
			}
			this.verify=function(){
				$('.button').click(function(){
					$('#alert h3 a').click(function(){$('#alert').css({display:"none"})});
					console.log(_self.content_b)
				var ID=ipt01.value,password=ipt02.value,code=ipt03.value;
				if(_self.getCookie('account')){
				 	for(var i=0;i<eval(_self.getCookie('account'))[0]['name'][0].split(",").length;i++){
						if(ID==eval(_self.getCookie('account'))[0]['name'][0].split(",")[i]){
							_self.verify_a=true;
							if(password==eval(_self.getCookie('account'))[0]['password'][0].split(",")[i]){
								console.log(22)
							_self.verify_b=true;
							if(code==_self.arr_code[_self.content_b]){
								console.log(22)
								_self.verify_c=true;
							}
						}
				}
			};
				}//判断登录条件是否成立
				if(!(_self.verify_a&&_self.verify_b&&_self.verify_c)){
					if(_self.verify_a==false){
						_self.alert("账户名错误，不存在该用户");
					}
					if(_self.verify_b==false){
						_self.alert("密码错误，请重新输入");
					}
					if(_self.verify_c==false){
						_self.alert("验证码错误！");
					}
					//_self.alert("登录失败");
				}else{
					_self.alert("登录成功");
				window.location.href="http://localhost/zosc/sub%20page/my_center/my_center.html";

				}//判断完成够根据判断结果显示弹窗


				if(!(code==_self.arr_code[_self.content_b])){
					$('.verification_code dd b').css({display:"block"})
					$('.verification_code').css({borderColor:"#f87622"})
				}else{
					$('.verification_code dd b').css({display:"none"})
					$('.verification_code').css({borderColor:"#f87622"})
				}
				//判断验证码框框
				})
			}
			this.setCookie=function(key,value,days){
							var dDate=new Date();
							dDate.setDate(dDate.getDate()+days);
							document.cookie=key+"="+encodeURIComponent(value)+"; expires="+dDate+";";
							//console.log(unescape(document.cookie));//另一种解码方式
							
						}
			this.getCookie=function(key){
							var aCookie=document.cookie.split('; ');
							for(var i=0;i<aCookie.length;i++){
								var aCook = aCookie[i].split('=');
								//aCook = decodeURIComponent(aCook);
								if(aCook[0] == key){
									//console.log(unescape(aCook[1]));
									return decodeURIComponent(aCook[1]);
								}else{
									return false;
								}
							}
						}}