/*以下为首页JS*/
function js_top(){
	this.js_top_do=function(){
	var oULi = document.getElementsByClassName('right')[0];
	var oLi = oULi.getElementsByTagName('li');
	//console.log(oLi);
	for(i=0;i<6;i++){
			oLi[i].index=i;
			oLi[i].onmouseover=function(){
			var sP = this.getElementsByTagName('span')[0];
			var dD = this.getElementsByTagName('dd')[0];
			var dL = this.getElementsByTagName('dl')[0];
			var iM = this.getElementsByTagName('img')[0];
			//console.log(dD)
			dD.style.display="block";
			dL.style.background="#FFF"
			dL.style.zIndex="100";
			iM.style.transform="rotate(180deg)"
			if(this.index<5){
			sP.style.backgroundPosition=-15*this.index+"px"+" -30px";

			}
		}
			oLi[i].onmouseout=function(){
			var sP = this.getElementsByTagName('span')[0];
			var dD = this.getElementsByTagName('dd')[0];
			var dL = this.getElementsByTagName('dl')[0];
			var iM = this.getElementsByTagName('img')[0];
			dD.style.display="none";
			dL.style.background="#fafafa"
			dL.style.zIndex="100";
			iM.style.transform="rotate(0deg)"
			if(this.index<5){
			sP.style.backgroundPosition=-15*this.index+"px"+" -15px";
			}
			}
			}
			}
		}	
function js_nav(){
		this.js_nav_do=function(){
		var oUln=document.getElementsByClassName('goodlist')[0];
		var oLin=oUln.getElementsByTagName('li');
		var oGlu=oUln.getElementsByClassName('glu');
		for(i=0;i<oLin.length;i++){
			oLin[i].ind=i;
			oLin[i].onmouseover=function(){
			oGlu[this.ind].style.display="block";
			}
			oLin[i].onmouseout=function(){
			oGlu[this.ind].style.display="none";
			}
		}
		}
		this.js_nav_sub_do=function(){
			//console.log($('#na .na .fir'));
				$('#na .na .fir').mouseover(function(){
				$('#na .fir .goodlist').css({display:'block'})
				//console.log($('#na .goodlist'));
				})

				$('#na .na .fir').mouseout(function(){
				$('#na .fir .goodlist').css({display:'none'})
				//console.log($('#na .goodlist'));
				})
		}
		}		
function js_banner(){
	this.js_banner_do=function(){
	var oDl=document.getElementsByClassName('box1')[0];
	var oUl=oDl.children[0];
	var sPa=oDl.getElementsByTagName('span');
	var tF=oDl.children[1];
	var tR=oDl.children[2];
	//console.log(oUl.children[1])
	var index=0;
	var zIndex=2;
	for(var i=0;i<oUl.children.length;i++){
		oUl.children[i].style.background="url(images/banner/"+(i+1)+".jpg) center center no-repeat";
	}
	
	//var num=0;
	oUl.children[0].style.opacity="1";
	sPa[0].style.background="#ff3100";
	
	for(j=0;j<sPa.length;j++){
		sPa[j].ind=j;
		sPa[j].onclick=function(){
			index=this.ind;
			fnChange(index);
		}
		
	}	
	
	
	var time=setInterval(fnNext,3000);
	oDl.onmouseover=function(){
		clearInterval(time);
		tF.style.display="block"
		tR.style.display="block"
	}
	oDl.onmouseout=function(){
		time=setInterval(fnNext,3000);
		tF.style.display="none"
		tR.style.display="none"
	}
	
	tF.onclick=fnPre;
	tR.onclick=fnNext;
	
	
	function fnNext(){
		if(index==oUl.children.length-1){
			index=0;
		}else{
			index++;
		}
		fnChange(index);
	}
	
	function fnPre(){
		if(index==0){
			index=oUl.children.length-1;
		}else{
			index--;
		}
		fnChange(index);
	}
	
	function fnChange(num){
	for(i=0;i<oUl.children.length;i++){
			sPa[i].style.background="#666";
		}
		oUl.children[num].style.opacity="0";
		oUl.children[num].style.zIndex=zIndex++;
		sPa[num].style.background="#ff3100";
		move(oUl.children[num],'opacity',100);
	}
	}
	}
function js_pro(){
		this.js_pro_do=function(){
		var oPromoRight=document.getElementById('right');
		var oPromoa=oPromoRight.getElementsByTagName('a');
		var oClockh=document.getElementsByClassName('clock-h')[0];
		var oClockm=document.getElementsByClassName('clock-m')[0];
		var oClocks=document.getElementsByClassName('clock-s')[0];//以上为获取时钟指针节点

		
		setInterval(function(){
			var dDate=new Date();
			var h=dDate.getHours();
			var m=dDate.getMinutes();
			var s=dDate.getSeconds();
			oClockh.style.transform="rotate("+h*30+"deg)";
			oClockm.style.transform="rotate("+m*6+"deg)";
			oClocks.style.transform="rotate("+s*6+"deg)";
			//console.log(h)
		},1000);
		/*var h=0;
		var m=0;
		var s=0;
		var timeh=setInterval(function(){
			oClockh.style.transform="rotate("+h+"deg)"
			h++;
		},1000*3600);
		var timem=setInterval(function(){
			oClockm.style.transform="rotate("+m+"deg)"
			m++;
		},1000*60);
		var times=setInterval(function(){
			oClocks.style.transform="rotate("+s+"deg)"
			s++;
		},1000);*///以上为通过定时器移动指针
		//console.log(oPromoRight)
		oPromoRight.onmouseover=function(){
			for(var i=0;i<oPromoa.length;i++){
				oPromoa[i].style.opacity="1";	
			}
		}
		for(var i=0;i<oPromoa.length;i++){
				oPromoa[i].onmouseover=function(){
					this.style.opacity="1";	
				}	
			}
		oPromoRight.onmouseout=function(){
			for(var i=0;i<oPromoa.length;i++){
				oPromoa[i].style.opacity="1";
			}
		}//此段程序需添加DOM2级事件防止冒泡
		}
		}
function js_market(){

			this.js_market_left_do=function(){
			/*var oMarkleft=document.getElementsByClassName('markleft')[0];
			var oMarkleftUl=oMarkleft.getElementsByClassName('ul')[0];
			var oMarkhidden=document.getElementsByClassName('markhidden')[0];
			for(var i=0;i<oMarkleftUl.children.length;i++){
				oMarkleftUl.children[i].onmouseover=function(){
					
				}
			}*///原生JS	
			$(function(){
				//console.log($(".markleft ul li").length);
				for(var i=0;i<$(".markleft ul li").length;i++){
					$(".markleft ul li")[i].index=i;
					$(".markleft ul li")[i].onmouseover=function marketchange(){
						var oMarkhidden=document.getElementsByClassName('markhidden')[0];
							oMarkhidden.innerHTML="";
						//console.log(1);
						$.get("json/market"+this.index+".json",function(data){
							var aData=eval(data);
							for(var j=0;j<aData.length;j++){
								oMarketDl=document.createElement('dl');
								oMarketDl.innerHTML='<dt><img src="'+aData[j]['img']+'" alt=""></dt><dd><p>' +aData[j]['name']+'</p><span>'+aData[j]['price']+'</span></dd>';
								oMarkhidden.appendChild(oMarketDl);
							}	
						},"text")
					}
				}
			})
			}

			this.js_market_right_do=function(pyear,pmonth,pday,phours,pminutes,pseconds){
			var markDay=0,markHours=0,markMinute=0,markSecond=0;
			var market_b=0;
			var dDate=new Date();
			dDate.setFullYear(pyear);
			dDate.setMonth(pmonth-1)
			dDate.setDate(pday)
			dDate.setHours(phours);
			dDate.setMinutes(pminutes);
			dDate.setSeconds(pseconds);
			var seconds02=parseInt(dDate.getTime()/1000);

			//console.log(seconds02);
			var market_timer=setInterval(mark_change,2000);
				function mark_change(){//左右移动模块
				var a=parseInt(Math.random()*4);
				market_b=a;
				$('.markright ul').css({left:-market_b*211+'px'})
				}

			$('.markright').mouseout(function(){
				market_timer=setInterval(mark_change,2000);
			})
			$('.markright').mouseover(function(){
				clearInterval(market_timer);
				$('.markright .mark_pre').click(function(){
					if(market_b==0){
						market_b=$('.markright ul li').length-1;
						
					}else{
						market_b--;
						
					}
					$('.markright ul').css({left:-market_b*211+'px'})
					});
				$('.markright .mark_next').click(function(){
					if(market_b==$('.markright ul li').length-1){
						market_b=0;
						
					}else{
						market_b++;
						
					}
					$('.markright ul').css({left:-market_b*211+'px'})
					});
			})

			//倒计时JS模块，此模块为既定赋值四个计时器其初始时间相同，未封装,
			//console.log($('.marktime'));
			var market_time=setInterval(function(){
				var odate=new Date();
				var seconds01=parseInt(odate.getTime()/1000);
				seconds0=seconds02-seconds01;
				//console.log(seconds02);
				//console.log(dDate);
				//console.log(pyear,pmonth,pday,phours)
				if(seconds0>=0){
				markDay=parseInt(seconds0/86400);
				markHours=parseInt((seconds0-markDay*86400)/3600);
				markMinute=parseInt((seconds0-markDay*86400-markHours*3600)/60);
				markSecond=seconds0-markDay*86400-markHours*3600-markMinute*60;
				/*if(markSecond==0){
					markMinute--;
					markSecond=60;
				}
				if(markMinute==0){
					markHours--;
					markMinute=60;
				}
				if(markHours==0){
					markDay--;
					markHours=24;
				}*/
				for(var i=0;i<$('.marktime').length;i++){
				$('.marktime').eq(i).find('span').eq(0).html(markDay);
				$('.marktime').eq(i).find('span').eq(1).html(markHours);
				$('.marktime').eq(i).find('span').eq(2).html(markMinute);
				$('.marktime').eq(i).find('span').eq(3).html(markSecond);
			}
			}
			},1000) 
			}
			}
function js_flo(){
		this.js_flo_do=function(){
		function getSorce(){
			this.gli=0;
			this.flo=0;
			this.titleColor=['#3598DC','#3598dc','#27ae61','#c1392b','#ff7373','#e77e23'];
			this.contentColor=['#e8f4fc','#e8f4fc','#e8f4fc','#f9eef2','#ffebeb','#fbf1e8',];
			this.fontColor=['#3598de','#3598de','#27ae61','#c1392b','#ff88bd','#e77e23',];

			this.getDate=function(a){
				var _self=this;
				_self.flo=a;
				//console.log('json/floor'+a+'\.json');
				$.get("json/floor"+a+".json",function(data){
					//console.log(1)
					_self.gli = eval(data);
					//console.log(_self.gli)
					_self.reload(_self.flo);
				},'text');
				
				}	
			this.reload=function(b){//改变floor内容以及样式
				$('.flo_left h3').eq(b).html(this.gli[0]['title']);
				$('.flo_left').eq(b).css({background:this.contentColor[b-1]})
				$('.flo_left h3').eq(b).css({background:this.titleColor[b-1]})
				$('.flo_left h3').eq(b).css({borderColor:this.titleColor[b-1]})
				$('.flo_left .flo_label').eq(b).html(this.gli[1]['label']);
				$('.flo_left .flo_left_logo').eq(b).attr('src','images/goodfloor/'+this.gli[4]['img_src']+'/logo1.png');
				$('.flo_left .flo_pro p').eq(b).html(this.gli[2]['discount_title']);
				$('.flo_left .flo_pro ul').eq(b).html(this.gli[2]['discount_content']);
				$('.flo_right_title').eq(b).html(this.gli[3]['right_title']);
				$('.flo_right_title').eq(b).css({borderColor:this.fontColor[b-1]})
				$('.flo_right_title b').eq(b).css({borderColor:"#FFF #FFF "+this.fontColor[b-1]+" #fff"})
				$('.exhibition ul li img').eq(b).attr('src','images/goodfloor/'+this.gli[4]['img_src']+'/exhibition.jpg');
				for(var j=1;j<=6;j++){
					$('.flo_right_goodlist ul li:nth-child('+j+') img').eq(b).attr('src','images/goodfloor/'+this.gli[4]['img_src']+'/'+j+'.jpg');
					$('.flo_right_goodlist ul li:nth-child('+j+') p').eq(b).html(this.gli[j+4]['good_list'])
					$('.flo_right_goodlist ul li:nth-child('+j+') span').eq(b).html(this.gli[j+4]['good_price'])
					$('.flo_right_goodlist ul li:nth-child('+j+') span').eq(b).css({color:this.fontColor[b-1]})
				}
			}	
				
			
			
		}
		$(function(){
			for(var i=1;i<$('.fflo').length;i++){
			$('.fflo').eq(i).html($('.fflo').eq(0).html());
		}
			
			for(var j=1;j<$('.fflo').length;j++){
				var load_good_information=new getSorce();
				load_good_information.getDate(j);
			}
			
		})
		}
		}
function js_pur(){
				this.js_pur_do=function(){
				$(function(){
					var pur_a=false;
					var pur_time=setInterval(function(){
						if(pur_a==true){
							$('.pur_fir').css({height:"0px"})
							$('.pur_sec').css({height:"110px"})
							pur_a=false;
							//console.log($('.pur_sec'))
						}else{
							$('.pur_fir').css({height:"110px"})
							$('.pur_sec').css({height:"0px"})
							pur_a=true;
							//console.log($('.pur_fir'))
						}
					},3000)
				})
				}
				}
function js_tool(){
		this.js_tool_do=function(){
			function tool(){
				this.ind=0;
				this.backtop=function(){
					
					$('.backt').click(function(){

						var bc_time=setInterval(function(){
							var nScroll=document.documentElement.scrollTop||document.body.scrollTop;
							if(nScroll<=0){
								clearInterval(bc_time);
							}
							scrollBy(0,-100)
						},30)
					})
				}

				this.hide=function(){
					$('.bc_hidden').click(function(){
						console.log($('.backtop'))
						$('#backtop').css({right:'-5px'})
						$('#backtop ul li').css({right:'-41px'})
						$('.bc_tool').css({right:'0px'})
					});
					$('.bc_tool .plus').click(function(){
						$('#backtop').css({right:'0px'})
						$('#backtop ul li').css({right:'5px'})
						$('.bc_tool').css({right:'-80px'})
					})

				}

				this.goto=function(){
					var nScroll=document.documentElement.scrollTop||document.body.scrollTop;
					//$(window).scroll(console.log(nScroll));
					for(var i=0;i<$('.go_to p').length;i++){
						change(i);
					}

					function change(n){
						$('.go_to p').eq(n).click(function(){
							var a=1155+482*n;
							scrollTo(0,a)
						})
					}
				}
			}
			$(function(){
				var backtop_tool=new tool();
				backtop_tool.backtop();
				backtop_tool.hide();
				backtop_tool.goto();
			})
			}}
/*以下为各个子页添加顶部尾部JS*/
function good_list(){
			var _self=this;
			this.add_top=function(a,b){
				$.get(a,function(data){
					var add_top=data;
					$(b).html(add_top);
					//console.log(eval(_self.getCookie('state'))[0]);
					_self.fresh();
				})
			}
			this.fresh=function(){
					$('#sea .s1').css({cursor:"pointer"});
					$('#sea .s1').click(function(){
						window.open('http://localhost/zosc/index.html','_self');
					})
					if(eval(_self.getCookie('state'))[0]){
						//console.log(1212132);
						$('#backtop .login span').html('已登录');
						$('#backtop .login a').attr({href:"http://localhost/zosc/sub%20page/my_center/my_center.html"});
						$('#backtop .sc a').attr({href:"http://localhost/zosc/sub%20page/shopping_cart/shop_cart.html"});
						$('#top .left').html('<li>您好！</li><li class="customer">'+eval(_self.getCookie('state'))[1]+'</li><li><b>V<span>0</span></b></li><li>欢迎回来，</li><li><a href="">郑欧商城</a></li><li class="logout">[退出]</li>');
						$('#top .left li b').css({cursor:"pointer",font:"600 italic 12px/16px Georgia,Arial",textShadow:"1px 1px 0 rgba(0,0,0,0.25)",color:"#FFF4F4",backgroundColor:"#F33", verticalAlign:"middle",display:"inline-block",height:"16px",padding:"1px 3px",borderRadius:"2px"});
						$('#top .left .logout').css({cursor:"pointer"});
						
						$('#top .left .logout').click(function(){
							console.log(_self);
							_self.setCookie('state','['+'false'+',\''+1+'\']',7);
							window.open('http://localhost/zosc/sub%20page/login/login.html','_self');
						})
						$('#top .left .logout').mouseover(function(){
							$(this).css({textDecoration:"underline"})
						})
						$('#top .left .logout').mouseout(function(){
							$(this).css({textDecoration:"none"})
						})
						$('#top .left .customer').css({cursor:"pointer"});
						$('#top .left .customer').click(function(){//点击用户名跳转至个人中心
							window.open('http://localhost/zosc/sub%20page/my_center/my_center.html',"_self");
						})
						$('#top .left .customer').mouseover(function(){
							$(this).css({textDecoration:"underline"})
						})
						$('#top .left .customer').mouseout(function(){
							$(this).css({textDecoration:"none"})
						})
					}else{
						$('#backtop .login span').html('未登录');
						$('#backtop .login a').attr({href:"http://localhost/zosc/sub%20page/login/login.html"});
						$('#backtop .sc a').attr({href:"http://localhost/zosc/sub%20page/login/login.html"});
					}}
				this.getCookie=function(key){
				var aCookie=document.cookie.split('; ');
				var a=false;
				for(var i=0;i<aCookie.length;i++){
					var aCook = aCookie[i].split('=');//aCook = decodeURIComponent(aCook);
					if(aCook[0] == key){
						a=true;
						return decodeURIComponent(aCook[1]);
					}
				}
				if(a==false){
						return false;
				}
			}
			this.setCookie=function(key,value,days){
							var dDate=new Date();
							dDate.setDate(dDate.getDate()+days);
							document.cookie=key+"="+encodeURIComponent(value)+"; expires="+dDate+"; path=/zosc/";
							//console.log(unescape(document.cookie));//另一种解码方式
							
						}}
/*列表页页JS*/
function js_glc(){
				this.glc_a=false;
				this.glc_b=false;
				this.glc_c=false;
				this.aDate=0;
				this.glc_left=function(){
					var _self=this;
					//console.log(_self.glc_a);
					$('#glc .left .fir li b').click(function(){
						if(_self.glc_a==false){
							$(this).css({backgroundPosition:"-11px 0px"})
							$(this).nextAll('.sec').css({display:"block"})
							_self.glc_a=true;
							//console.log($(this).nextAll('.sec'));
							//console.log(_self.glc_a)
						}else{
							$(this).css({backgroundPosition:"-0px 0px"})
							$(this).nextAll('.sec').css({display:"none"})
							_self.glc_a=false;
							//console.log(_self.glc_a)
						}	
					})

					$('#glc .left .fir .sec li b').click(function(){
						if(_self.glc_b==false){
							$(this).css({backgroundPosition:"-11px 0px"})
							$(this).nextAll('.thir').css({display:"block"})
							_self.glc_b=true;
						}else{
							$(this).css({backgroundPosition:"-0px 0px"})
							$(this).nextAll('.thir').css({display:"none"})
							//console.log($(this).nextAll('.thir'));
							//console.log(_self.glc_b)
							_self.glc_b=false;
						}
					})
				}
				this.glc_right_getjson=function(url){
					var _self=this;
					$.get(url,function(data){
						_self.aDate=eval(data);
						//console.log(_self.aDate);
						_self.glc_right_rec();
					},'text');
				}
				this.glc_right_rec=function(a){
					//console.log(this.aDate);
					for(var i=0;i<this.aDate.length;i++){
						$('.right_recommend ul').append('<li><dl><dt><img src="images1/right/right-top/'+this.aDate[i]['pic']+'.jpg"></dt><dd><a href="" class="rec_name">'+this.aDate[i]['name']+'</a><p class="rec_price">商城价：<span>￥'+this.aDate[i]['price']+'</span></p><a class="rec_button">立即抢购</a></dd></dl></li>');
					}
				}}
/*详情页放大镜以及其他JS*/
function Magnifier(){
				this.x=0;
				this.y=0;
				var _self=this;
				this.src=0;
				this.count=0;
				this.size=2;
				/*this.l=parseInt(($('.img1')[0].currentStyle || window.getComputedStyle($('.img1')[0],null).marginLeft));
				this.t=parseInt(($('.img1')[0].currentStyle || window.getComputedStyle($('.img1')[0],null).marginTop));*///此处为获取外框
				this.reload=function(x,y,z){
					$('.output img')[0].style.left=-this.size*x+"px";
					$('.output img')[0].style.top=-this.size*y+"px";
							}

				this.change=function(){
					var _self1=this;
					$('.usmall li img').click(function(){
						//_self1.src=$('.usmall li').index($(this))+1;//无效代码
						$('.output img').attr({src:$(this).attr('src')})
						$('.img1 img').attr({src:$(this).attr('src')})
					});
					$('.buy .next').click(function(){
						if(_self1.count<=0){
							_self1.count=0;
						}else{
							_self1.count--;
						}
						$('.buy input').attr({value:_self1.count})
					})
					$('.buy .pre').click(function(){
							_self1.count++;
							$('.buy input').attr({value:_self1.count})
					})

				}

				$('.img1').mousemove(function(e){
					//console.log(_self.size)
					var e=e||window.event;
					var a=1;
					var b=1;
					var _self2=_self;
					$('body').attr({onmousewheel:"return false"})//阻止body中页面跟随鼠标滚动
					var nScroll=document.documentElement.scrollTop||document.body.scrollTop;
					_self.x=e.clientX;
					_self.y=e.clientY+nScroll;//此处高度应为其页面卷曲高度加上鼠标点到窗口顶部的距离之和！
					//console.log(e.scrollHeight);
					$('.Magnifier')[0].style.left=_self.x-$('#ma')[0].offsetLeft-$('.Magnifier')[0].offsetWidth/2+'px';

					$('.Magnifier')[0].style.top=_self.y-$('#mma')[0].offsetTop-$('.addr')[0].offsetHeight-$('.Magnifier')[0].offsetHeight/2+'px';

					//console.log($('#mma')[0].offsetTop);
					_self.reload(parseInt($('.Magnifier')[0].style.left),parseInt($('.Magnifier')[0].style.top),_self.size);//调动输出随放大镜移动
					$('.output').css({transition: 'all .6s',width:'360px',height:'360px',opacity:'1', right:'-360px',top:'0px',});//输出部分图像缓进缓出
					$('.notice').css({transition:'all .6s',width:'360px',height:'30px',right:'-360px',top:'360px',opacity:'1'});//输出部分图像缓进缓出

					$(".img1").bind('mousewheel', function(e) {//改变图片放大比例 
					 var e = window.event || e; // old IE support.   
					 //var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
					 //console.log(e.wheelDelta)
					 if(e.wheelDelta>0){
					 	a=a*8/10;
					 	b=b*10/8;
					 	var len=186*a;

					 	$('.Magnifier').css({width:parseInt(a*186)+"px",height:parseInt(a*186)+"px",transition:"width .2s,height .2s,left .2s,top .2s"});//重新设置放大镜大小
					 	$('.output img').css({width:parseInt(b*720)+"px",height:parseInt(b*720)+"px",transition:"width .2s,height .2s,left .2s,top .2s"});
										//重新设置设置输出图像大小

					 	$('.Magnifier')[0].style.left=_self.x-$('#ma')[0].offsetLeft-$('.Magnifier')[0].offsetWidth/2+'px';//重新定位放大镜
						$('.Magnifier')[0].style.top=_self.y-$('#mma')[0].offsetTop-$('.addr')[0].offsetHeight-$('.Magnifier')[0].offsetHeight/2+'px';//重新定位放大镜


					 	_self2.size=(b*720)/360;//此处为放大比例
					 	_self.reload(parseInt($('.Magnifier')[0].style.left),parseInt($('.Magnifier')[0].style.top),_self2.size);//重新定位输出图像
					 }else{
					 	//console.log($('.Magnifier')[0].offsetWidth)
					 	if($('.Magnifier')[0].offsetWidth<360){
					 	a=a*10/8;
					 	b=b*8/10;
					 	}
					 	$('.Magnifier').css({width:parseInt(a*186)+"px",height:parseInt(a*186)+"px",transition:"width .2s,height .2s,left .2s,top .2s"});
					 	$('.output img').css({width:parseInt(b*720)+"px",height:parseInt(b*720)+"px",transition:"width .2s,height .2s,left .2s,top .2s"});
					 	$('.Magnifier')[0].style.left=_self.x-$('#ma')[0].offsetLeft-$('.Magnifier')[0].offsetWidth/2+'px';
						$('.Magnifier')[0].style.top=_self.y-$('#mma')[0].offsetTop-$('.addr')[0].offsetHeight-$('.Magnifier')[0].offsetHeight/2+'px';
					 	_self2.size=(b*720)/360;
					 	_self.reload(parseInt($('.Magnifier')[0].style.left),parseInt($('.Magnifier')[0].style.top),_self2.size);
					 }
					}); 
					/*console.log($('.Magnifier')[0].style.left);
					console.log($('.Magnifier')[0].style.top);*/
				})
				$('.img1').mouseout(function(){
					$('body').attr({onmousewheel:"return true"});//解除阻止
					$('.output').css({transition: 'all .6s',width:'0px',height:'0px',opacity:'0', right:'180px',top:'180px',});
					$('.notice').css({transition:'all .6s',width:'0px',height:'0px',right:'180px',top:'180px',opacity:'0'})
				})}			
/*以下为购物车JS*/
function js_right_indr(){
						this.date=0;
						this.index=[];
						this.count=[1];
						this.index_cart=[];
						this.count_cart=[1];//默认第一条商品的初始数量为1;
						this.total=0;
						this.pages=1;//页码变量
						this.orderindex=[];//排序后商品序号！
						this.orderdate=0;//排序后的商品数据
						var _self=this;
						this.right_indr_get=function(url){
							$.get(url,function(data){
								_self.date=eval(data);
								//console.log(_self.date);
								//_self.coin=parseInt(_self.date.length%36);
								for(var i=0;i<_self.date.length;i++){
									_self.orderindex.push(i);
								}
								_self.orderdate=_self.date;
								_self.right_indr_load(_self.pages);
								_self.changepages();
								
							},"text");
						}
						this.changepages=function(){//分页页码插入
							var pages=Math.ceil(this.date.length/36);
							//console.log(pages);
							if(pages<5){
								for(var i=0;i<pages;i++){
									$('.pagination ul').append('<li class="index"><a href="javascript:;">'+(i+1)+'</a></li>')
								}
								$('.pagination .more').css({display:"none"});
							}else{
								for(var i=0;i<pages;i++){
									$('.pagination ul').append('<li class="index"><a href="javascript:;">'+(i+1)+'</a></li>');
									$('.pagination .more').css({display:"none"});
								}
								$('.pagination .more').css({display:"block"})
							}
							$('.pagination ul li').eq(0).css({background:"#F87622",borderColor:"#F87622"});
							$('.pagination ul li a').eq(0).css({color:"#FFF"});
							this.changepages_do(pages);	
						}
						this.changepagenumber=function(f){
							var a=-(_self.pages-1)*38;
							var b=f-_self.pages;
							var c=(b+1)*38;
							var d=-(f-5)*38;
							if(b<5){
								$('.pagination ul').css({left:d+"px"});
								$('.pagination .more').css({display:"none"});
								//$('.pagination .ul_p').css({width:c+"px"});
							}else{
								$('.pagination ul').css({left:a+"px"});
								$('.pagination .more').css({display:"block"});
								$('.pagination .ul_p').css({width:"190px"});
							}
						}
						this.changepages_do=function(b){//页码更换
							$('.pagination ul li').click(function(){
								var n=$('.pagination ul li').index(this);
								$('.good_indroduce>ul li').hide();
								setTimeout(function(){
									$('.good_indroduce>ul').empty();
									_self.pages=n+1;
									_self.pagescolor(_self.pages-1);
									_self.changepagenumber(b);
									_self.right_indr_load(_self.pages);
								},500);
								
							});
							$('.pagination .pre').click(function(){
								if(_self.pages>1){
									setTimeout(function(){
									$('.good_indroduce>ul').empty();
									_self.pages-=1;
									_self.pagescolor(_self.pages-1);
									_self.changepagenumber(b);
									_self.right_indr_load(_self.pages);
								},500);
									
								}
								
							});
							$('.pagination .next').click(function(){
								if(_self.pages<b){
									setTimeout(function(){
									$('.good_indroduce>ul').empty();
									_self.pages+=1;
									_self.pagescolor(_self.pages-1);
									_self.changepagenumber(b);
									_self.right_indr_load(_self.pages);
								},500);
									
								}
								
							});
							$('.pagination .fir').click(function(){
									setTimeout(function(){
									$('.good_indroduce>ul').empty();
									_self.pages=1;
									_self.pagescolor(_self.pages-1);
									_self.changepagenumber(b);
									_self.right_indr_load(_self.pages);
								},500);
								
							});
							$('.pagination .last').click(function(){
									setTimeout(function(){
									$('.good_indroduce>ul').empty();
									_self.pages=b;
									_self.pagescolor(_self.pages-1);
									_self.changepagenumber(b);
									_self.right_indr_load(_self.pages);
								},500);	
							});
						}
						this.pagescolor=function(c){
							$('.pagination ul li').css({background:"none",borderColor:"#f5f5f5"});
							$('.pagination ul li a').css({color:"#666"});
							$('.pagination ul li').eq(c).css({background:"#F87622",borderColor:"#F87622"});
							$('.pagination ul li a').eq(c).css({color:"#FFF"});
						}
						this.changeorder=function(){
							$('.right_glc_tool .sales').click(function(){
								_self.orderdo("sales")
							});
							$('.right_glc_tool .popular').click(function(){
								_self.orderdo("comment")
							});
							$('.right_glc_tool .price').click(function(){
								_self.orderdo("price")
							});
							$('.right_glc_tool .default').click(function(){
								var index=[];
								var newdate=[];
								_self.orderindex=0;
								for(var i=0;i<_self.date.length;i++){
									index.push(i);	
								};
								for(var i=0;i<index.length;i++){
									newdate.push(_self.date[parseInt(index[i])]);
								};
								_self.orderdate=newdate;
								//console.log(_self.orderdate);
								$('.good_indroduce>ul').empty();
								_self.right_indr_load(_self.pages);
							});
						}
						this.orderdo=function(g){
								var index=[];
								var newdate=[];
								var sales=[];
								_self.orderindex=0;
								var temp=[];
								_self.orderdate=0;
								for(var i=0;i<_self.date.length;i++){
									index.push(i);
								};
								//console.log(index);
								for(var i=0;i<_self.date.length;i++){
									var m=parseInt(_self.date[i][g]);
									sales.push(m);
								}
								
								for(var i=0;i<sales.length-1;i++){
									for(var j=0;j<sales.length-1-i;j++){
										if(sales[j]<sales[j+1]){
											var c=index[j];
											index[j]=index[j+1];
											index[j+1]=c;

											var d=sales[j];
											sales[j]=sales[j+1];
											sales[j+1]=d;

										}
									}
								};
								//console.log(sales);
								for(var i=0;i<sales.length;i++){
									newdate.push(_self.date[parseInt(index[i])]);
								};
								_self.orderdate=newdate;
								_self.orderindex=index;
								//console.log(index);
								$('.good_indroduce>ul').empty();
								_self.right_indr_load(_self.pages);
						}
						this.right_indr_load=function(a){
							var s=0;
							//console.log(11)
							if(a*36>=_self.date.length){
								s=_self.date.length;
							}else{
								s=a*36;
							}
							for(var i=(a-1)*36;i<s;i++){
							$('.good_indroduce>ul').append('<li><div class="shell"><div class="sign"></div><img src="images1/right/good/'+this.orderdate[i]['pic']+'.jpg"><div class="decoration"><ul><li><img src="images1/right/good/'+this.orderdate[i]['pic']+'.jpg"></li></ul><a>'+this.orderdate[i]['name']+'<b>'+this.orderdate[i]['nameb']+'</b></a><div class="price"><p class="price_left">￥'+this.orderdate[i]['price']+'&nbsp<span>￥'+this.orderdate[i]['discount']+'</span></p><p class="price_right"><img src="images1/right/star-on.png" alt=""><img src="images1/right/star-on.png" alt=""><img src="images1/right/star-on.png" alt=""><img src="images1/right/star-on.png" alt=""><img src="images1/right/star-on.png" alt=""></p></div><div class="contrast"><span>赠品</span><a href="">郑欧班列自营</a><p><i></i>加入对比</p></div><div class="comment"><ul><li class="fir"><p>'+this.orderdate[i]['sales']+'</p><span>商品销量</span></li><li class="sec"><p>'+this.orderdate[i]['comment']+'</p><span>用户评论</span></li><li class="thir"><p><a href=""></a></p><span>在线客服</span></li></ul></div><div class="life"><p>'+this.orderdate[i]['shop']+'</p></div><div class="add"><a href="javascript:;">加入购物车</a></div></div></div></li>');
							//此处可加各种特效，目前先不添加
						}
							this.addCookie();
							this.todetails();
						}
						this.todetails=function(){//设置cookie并跳转至详情页面
							$('.good_indroduce .decoration>a').click(function(){
								
								var a=$('.good_indroduce .decoration>a').index(this)+(_self.pages-1)*36;
								//console.log(_self.orderindex)
								_self.setCookie("turn","["+a+",["+_self.orderindex+"]]",7);//主要是a与i之间的关系date与orderdata之间的关系
								console.log(eval(_self.getCookie('turn'))[1])
								window.open('http://localhost/zosc/sub%20page/good_details/good_details.html',"_top");
							})
						}
						this.details_do=function(){
							var i=parseInt(eval(this.getCookie('turn'))[0]);
							var q=eval(_self.getCookie('turn'))[1];
							console.log(i);
							console.log(eval(_self.getCookie('turn'))[1])
							$.get('../good_list/json/gd.json',function(data){//此处data未排序仍需改进！
							var date=eval(data);
							$('.good_summary .show .img1 img').attr({src:"../good_list/images1/right/good/"+date[q[i]]['pic']+".jpg"});
							$('.good_summary .show .output img').attr({src:"../good_list/images1/right/good/"+date[q[i]]['pic']+".jpg"});
							$('.good_summary .show .usmall .small img').attr({src:"../good_list/images1/right/good/"+date[q[i]]['pic']+".jpg"});
							$('.good_summary .description .name').html(date[q[i]]['name']);
							$('.good_summary .description .main_in .oprice span b').html(date[q[i]]['price']);
							$('.good_summary .description .main_in .price span b').html(date[q[i]]['discount']);
							$('.good_summary .description .services .shop').html(date[q[i]]['shop'])
							$('.good_summary .description .amount img').attr({src:"../good_list/images1/right/good/"+date[q[i]]['pic']+".jpg"});
							$('#ma .addr .name').html(date[q[i]]['name']);
						},'text');
							$('.description .add').click(function(){
								var b=detail_amount.value;
								_self.dealCookie(i,b);
							})
						}
						this.setCookie=function(key,value,days){
							//console.log(1)
							var dDate=new Date();
							dDate.setDate(dDate.getDate()+days);
							document.cookie=key+"="+encodeURIComponent(value)+"; expires="+dDate+"; path=/zosc/";
						}
						this.getCookie=function(key){
							var aCookie=document.cookie.split('; ');
							var a=false;
							for(var i=0;i<aCookie.length;i++){
								var aCook = aCookie[i].split('=');
								//aCook = decodeURIComponent(aCook);
								if(aCook[0] == key){
									a=true;
									return decodeURIComponent(aCook[1]);
								}
							}
							if(a==false){
								return false;
							}
						}
						this.dealCookie=function(a,b){
								if(_self.getCookie('car')){
									console.log(1);
									_self.index=eval(_self.getCookie('car'))[0]["index"];
									//console.log(_self2.index);
									_self.count=eval(_self.getCookie('car'))[0]["count"];
									for(var i=0;i<_self.index.length;i++){
										if(_self.index[i]==a){
											alert("您已添加过此商品！请于购物车中编辑数量即可！");
											return;
										}
									}
									_self.index.push(a);
									_self.count.push(b);
									_self.setCookie("car","[{index:["+_self.index+"],count:["+_self.count+"]}]", 7);
									console.log(_self.getCookie('car'));
								}else{
									_self.setCookie("car","[{index:["+a+"],count:["+_self.count+"]}]", 7);
									//console.log(2);
								}
						}
						this.addCookie=function(){
							var _self2=this;
							$('.good_indroduce>ul>li .add a').click(function(){//设置cookie中的内容；
								//console.log($('.good_indroduce>ul>li .add a').index(this));
								//if(document.cookie.length>0){
								var a=$('.good_indroduce>ul>li .add a').index(this)
								_self2.dealCookie(a,1);
							})
						}
					
						this.changegood=function(){//根据COOKIE加载购物车商品以及其价格等信息
									$.get('../good_list/json/gd.json',function(data){
										var ind=eval(_self.getCookie('car'))[0]["index"];
										var cou=eval(_self.getCookie('car'))[0]["count"];
										var aDate=eval(data);
										//console.log(ind);
										//console.log(cou.length);
										for(var i=0;i<ind.length;i++){
											//console.log(ind[i]);
											var subtotal=cou[i]*aDate[ind[i]]["price"];
											$('#sh .cart .shop .good').append('<ul><li class="confirm"><input class="all" type="checkbox" checked="">全选</li><li class="pic"><img src="../good_list/images1/right/good/'+aDate[ind[i]]["pic"]+'.jpg" alt=""></li><li class="name"><p>'+aDate[ind[i]]["name"]+'</p></li><li class="price">'+aDate[ind[i]]["price"]+'</li><li class="amount"><a href="javascript:;" class="sub" title="减少商品件数">-</a><input class="number" type="text" value="'+cou[i]+'"/><a href="javascript:;" class="add" title="增加商品件数">+</a></li><li class="subtotal">'+subtotal.toFixed(2)+'</li><li class="tax">0.00</li><li class="edit"><p><a class="collect">收藏</a></br><a class="del">删除</a></p></li></ul>');
											_self.total+=parseInt(subtotal);
											//console.log($('.shop .classify .fir input').attr('checked'));
										}
											//console.log($('#sh .cart .shop .good .sub')[0])
										$('.cart .shop .total p span').html(_self.total.toFixed(2));
										_self.changecount();
										_self.allselcet();
										_self.select();
										_self.delgood();
										//console.log(eval(_self.getCookie('car'))[0]["index"]);
										//console.log(eval(_self.getCookie('car'))[0]["count"]);
									},"text")
								}
						this.delgood=function(){
							$('#sh .cart .shop .good .edit .del').click(function(){
								alert("确认删除此商品吗？");
								//console.log($('#sh .cart .shop .good .edit .del').index(this));
								if($('#sh .cart .shop .good .confirm input').eq($('#sh .cart .shop .good .edit .del').index(this)).attr('checked')){
								_self.total-=parseInt($(this).parents('ul').children('.subtotal').html());}//改变总价格,先判断其是否被选中，否则会影响总价格
								$('#sh .cart .shop .total p span').html(_self.total.toFixed(2));//改变页面总价格;
								_self.index_cart=eval(_self.getCookie('car'))[0]["index"];//获得cookie中商品序号
								_self.count_cart=eval(_self.getCookie('car'))[0]["count"];///获得各个商品对应的数量数组
								_self.index_cart.splice($('#sh .cart .shop .good .edit .del').index(this),1);
								console.log(_self.index_cart);
								_self.count_cart.splice($('#sh .cart .shop .good .edit .del').index(this),1);
								_self.setCookie("car","[{index:["+_self.index_cart+"],count:["+_self.count_cart+"]}]", 7);
								$('#sh .cart .shop .good')[0].removeChild($(this).parents('ul')[0]);
							})
						}

						this.dealcount=function(a,index){//处理商品数量变化函数
										//console.log(a);
										var pre=parseInt(_self.count_cart[index]);
												//console.log(_self.count);
										var b=parseInt($('#sh .cart .shop .good .price').eq(index).html());//获得当前商品的价格;
										var c=0,q=0;//q表示前一状态价格
										if(a>0){
											c=parseInt(a*b).toFixed(2);
											q=parseInt(pre*b).toFixed(2);
											_self.total+=(c-q);
											//console.log(a);
											_self.count_cart.splice(index,1,a);//改变cookie中的商品数量值
											$('#sh .cart .shop .good .subtotal').eq(index).html(c);//改变当前页面的小计价格；
											console.log(index);
											if($('.shop .good .confirm input').eq(index).prop('checked')){
											$('#sh .cart .shop .total p span').html(_self.total.toFixed(2));}//改变商品总价格
											_self.setCookie("car","[{index:["+_self.index_cart+"],count:["+_self.count_cart+"]}]", 7);
											

												}else{
													a=0;
													c=0;
													q=parseInt(pre*b).toFixed(2);
													_self.total-=q;
													//console.log(a);
													_self.count_cart.splice(index,1,a);//改变cookie中的商品数量值
													$('#sh .cart .shop .good .subtotal').eq(index).html(c);//改变当前页面的小计价格；

													$('#sh .cart .shop .total p span').html(_self.total.toFixed(2));//改变商品总价格
													_self.setCookie("car","[{index:["+_self.index_cart+"],count:["+_self.count_cart+"]}]", 7);
												}}
						this.changecount=function(){//购物车中点击事件改变数量从而改变价格，此函数可封装写，先写在一块,此处用的自身序号较多，拆分写需要传入较多参数；
										$('#sh .cart .shop .good .number').blur(function(){
											var index=$('#sh .cart .shop .good .number').index(this);
											if($('.shop .good .confirm input').eq(index).prop('checked')){
											_self.index_cart=eval(_self.getCookie('car'))[0]["index"];//获得cookie中商品序号
											_self.count_cart=eval(_self.getCookie('car'))[0]["count"];
											var a=parseInt($(this).val())
											_self.dealcount(a,index)}
										})//随意输入数字，改变数量值！！
										$('#sh .cart .shop .good .sub').click(function(){
											var index=$('#sh .cart .shop .good .sub').index(this);
											if($('.shop .good .confirm input').eq(index).prop('checked')){
											_self.index_cart=eval(_self.getCookie('car'))[0]["index"];//获得cookie中商品序号
											_self.count_cart=eval(_self.getCookie('car'))[0]["count"];
											var a=parseInt(_self.count_cart[$('#sh .cart .shop .good .sub').index(this)]);
											if(a>0){
												a--;
											}else{
												a=0;
											}
											$(this).next().attr({value:a})
											_self.dealcount(a,index);}
											});//减1数量值
										$('#sh .cart .shop .good .add').click(function(){
											var index=$('#sh .cart .shop .good .add').index(this)
											if($('.shop .good .confirm input').eq(index).prop('checked')){
											_self.index_cart=eval(_self.getCookie('car'))[0]["index"];//获得cookie中商品序号
											_self.count_cart=eval(_self.getCookie('car'))[0]["count"];
											var a=parseInt(_self.count_cart[$('#sh .cart .shop .good .add').index(this)]);
												a++;
											$(this).prev().attr({value:a})
											_self.dealcount(a,index);}
											});	//加1数量值			
								}
						this.select=function(){//单个选中
							$('.shop .good .confirm input').click(function(){
									var e=0;
									var d=0;
									var f=0;
									var n=0;
								if($(this).attr('checked')){
									$(this).attr({"checked":false});
									$('#sh .cart .shop .good .number').eq($('.shop .good .confirm input').index(this)).prop({readonly:"readonly"})
									e=parseInt($('#sh .cart .shop .good .amount input').eq($('.shop .good .confirm input').index(this)).attr("value"));
									//console.log(e);
									d=parseInt($('#sh .cart .shop .good .price').eq($('.shop .good .confirm input').index(this)).html());
									//console.log(d);
									f=parseInt(e*d);
									_self.total-=f;
									//console.log($('.shop .good .confirm input').index(this));
									$('#sh .cart .shop .total p span').html((_self.total).toFixed(2));
								}else{
									$(this).attr({"checked":true});
									$('#sh .cart .shop .good .number').eq($('.shop .good .confirm input').index(this)).removeAttr('readonly')
									e=parseInt($('#sh .cart .shop .good .amount input').eq($('.shop .good .confirm input').index(this)).attr("value"));
									d=parseInt($('#sh .cart .shop .good .price').eq($('.shop .good .confirm input').index(this)).html());
									f=parseInt(e*d);
									_self.total+=f;
									$('#sh .cart .shop .total p span').html((_self.total).toFixed(2));
									//console.log($('.shop .good .confirm input').index(this)+111);
								}
							})
						}
						this.allselcet=function(){//全部选中
							$('.shop .classify .fir input').click(function(){
								if($('.shop .classify .fir input').attr('checked')){
									 //$(":checked").hide();
									 console.log(1)
									$('.shop .good .confirm input').attr({"checked":false});
									$(this).attr({"checked":false});
									_self.total=0;
									$('#sh .cart .shop .total p span').html(_self.total.toFixed(2));//清除购物车所有选中，清除所有价格;
								}else{//此处的prop用于处理某些元素被删除属性值后出现错误，无法重新添加属性值得情况详见JQprop解释；
									console.log(2)
									$(this).attr({"checked":true})
									$('.shop .good .confirm input').prop("checked",true)
									_self.total=0;
									for(var i=0;i<$('#sh .cart .shop .good .subtotal').length;i++){
										_self.total+=parseInt($('#sh .cart .shop .good .subtotal').eq(i).html());
									}
									$('#sh .cart .shop .total p span').html(_self.total.toFixed(2));//恢复购物车所有选中，恢复所有价格；
								}
							})

						}				
						}
/*详情页JS放大镜部分在上部*/
function js_content(){
				this.date=0;
				this.switch=false;
				var _self=this;
				this.add=function(url){
					$.get(url,function(data){
						_self.date=eval(data);
						//console.log(_self.date)
						//console.log($('.range .list'))
						$('.range .list').html('');
						for(var i=0;i<_self.date.length;i++){
						$('.range .list').append('<li><dl><dt><img src="images1/content/'+_self.date[i]["pic"]+'.jpg"></dt><dd><p class="name">'+_self.date[i]["name"]+'</p><p class="price">￥<span>'+_self.date[i]["price"]+'</span></p><p class="sales"><b></b>售出：<span>'+_self.date[i]["sale"]+'</span>笔</p></dd></dl></li>')
							}
					},'text');
					$('#con .con_right #title1').css({left:$('#wrap .con_right')[0].offsetLeft+$('#wrap')[0].offsetLeft+"px"})
					window.onscroll=function(){
						var scroll=document.body.scrollTop||document.documentElement.scrollTop;
						//console.log(scroll);
						if(scroll>=710){
							$('#con .con_right #title1').css({position:"fixed",top:"0%",zIndex:"100",transition:"all .0s",background:"#FFF",left:$('#wrap .con_right')[0].offsetLeft+$('#wrap')[0].offsetLeft+"px",width:"100%"});
							$('#con .con_right #title1 .fir').css({borderTop:"2px solid #f87622"});
							$('.switch_bar').css({display:"block"});
							console.log($('#wrap #con')[0].offsetLeft);
						}else if(scroll<710){
							$('#con .con_right #title1').css({position:"relative",top:"0px",left:"0px"})
							$('.switch_bar').css({display:"none"});
						}
					}
					$('.switch_bar').click(function(){
						console.log(1);
						if(_self.switch==false){
							_self.switch=true;
							$('#con .con_right #title1').css({width:"100%"});
							$('#wrap .con_right').css({position:"absolute",left:"-20px",top:"0",zIndex:"1000",width:"100%"})
							$('.con_right .title .last').css({width:"541px"})
							$('.con_right .consult1  .last').css({width:"484px"})
							$('.switch_bar').css({backgroundPosition:"-15px 0px",left:$('#wrap .con_right')[0].offsetLeft+$('#wrap')[0].offsetLeft+"px",zIndex:"1001"});
							$('#con .con_right #title1').css({position:"fixed",top:"0%",zIndex:"100",transition:"all .0s",background:"#FFF",left:$('#wrap .con_right')[0].offsetLeft+$('#wrap')[0].offsetLeft+"px",width:"100%"});
							console.log(2);
						}else{
							_self.switch=false;
							console.log(3);
							$('#wrap .con_right').css({position:"static",width:"970px"})
							$('.con_right .title .last').css({width:"308px"})
							$('.con_right .consult1  .last').css({width:"248px"})
							$('.switch_bar').css({backgroundPosition:"-0px 0px",left:$('#wrap .con_right')[0].offsetLeft+$('#wrap')[0].offsetLeft+(-20)+"px",zIndex:"1001"});
							$('#con .con_right #title1').css({position:"fixed",top:"0%",zIndex:"100",transition:"all .0s",background:"#FFF",left:$('#wrap .con_right')[0].offsetLeft+$('#wrap')[0].offsetLeft+"px",width:"100%"});	
						}
					})
					$('#con .con_right #title1 li').click(function(){
						$('#con .con_right #title1 li').css({borderBottom:"1px solid #e6e6e6",
    					borderTop:"1px solid #e6e6e6"})
						$(this).css({borderBottom:"none",height:"32px",borderTop:"4px solid #f87622"});
						switch($('#con .con_right #title1 li').index(this)){
							case 0:
								scrollTo(0,700)
								break;
							case 1:
								scrollTo(0,7620)
								break;
							case 2:
								scrollTo(0,7950)
								break;
							case 3:
								scrollTo(0,8224)
								break;
						}
						

					})

					
				}}
/*登录注册JS*/
function js_con(){//notice:c此处转码与EVAL之间出现问题，故暂时将数据以字符串形式存入数组，并在进行EVAL转换为数组！！！！！！！！！
			this.content_a=0;
			this.content_b=0;
			this.verify_a=false;//判断登录用户信息开关
			this.verify_b=false;
			this.verify_c=false;
			this.register_a=false;//无用变量
			this.register_b=false;
			this.register_c=false;
			this.sw1=false;//判断注册输入内容开关
			this.sw2=false;
			this.sw3=false;
			this.name=[];//暂存当前账户注册信息
			this.password=[];
			this.email=[];
			this.arr_code=["8RVJ","BBK9","CVKH","C6JV"];
			this.state=false;

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
						if(ipt_re01.value==eval(_self.getCookie('account'))[0]['name'][0].split(",")[i]){//判断用户名是否已使用
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
						if(ipt_re03.value==eval(_self.getCookie('account'))[0]['email'][0].split(',')[i]){//判断邮箱是否已使用
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
				 		_self.state=false;
				 		_self.setCookie("state",_self.state,7)
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
					//console.log(_self.content_b)
				var ID=ipt01.value,password=ipt02.value,code=ipt03.value;
				if(_self.getCookie('account')){
				 	for(var i=0;i<eval(_self.getCookie('account'))[0]['name'][0].split(",").length;i++){
						if(ID==eval(_self.getCookie('account'))[0]['name'][0].split(",")[i]){
							_self.verify_a=true;
						if(password==eval(_self.getCookie('account'))[0]['password'][0].split(",")[i]){
								console.log(22)
							_self.verify_b=true;}}
						if(code==_self.arr_code[_self.content_b]){
								console.log(22)
								_self.verify_c=true;
							}
						
				
			};
				}//判断登录条件是否成立
				if(!(_self.verify_a&&_self.verify_b&&_self.verify_c)){
					if(_self.verify_a==false){
						_self.alert("账户名错误，不存在该用户");
						console.log(1)
						return;
					}
					if(_self.verify_b==false){
						_self.alert("密码错误，请重新输入");
						console.log(2)
						return;
					}
					if(_self.verify_c==false){
						_self.alert("验证码错误！");
						console.log(3)
						return;
					}
					//_self.alert("登录失败");
				}else{
					_self.alert("登录成功");
					_self.state=true;
					_self.setCookie('state','['+_self.state+',\''+ID+'\']',7);
					console.log(_self.getCookie('state'))
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
							document.cookie=key+"="+encodeURIComponent(value)+"; expires="+dDate+"; path=/zosc/";
							//console.log(unescape(document.cookie));//另一种解码方式
							
						}
			this.getCookie=function(key){
							var aCookie=document.cookie.split('; ');
							var a=false;
							for(var i=0;i<aCookie.length;i++){
								var aCook = aCookie[i].split('=');
								//aCook = decodeURIComponent(aCook);
								if(aCook[0] == key){
									a=true;
									return decodeURIComponent(aCook[1]);
								}
							}
							if(a==false){
								return false;
							}
						}}				