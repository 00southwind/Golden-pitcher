
$(function(){
   //侧边栏动态
    $('.hide0 li').hover(function(){
            $(this).animate({left:'30'},300).siblings().css('left','64px')
            },function(){
            $(this).animate({left:'64'},300)});

     //侧边栏点击返回顶部效果
     var timer=null;
    $('.hide0').find('li').eq(4).click(function(){
        timer=setInterval(function(){
            var scrollh=$('body').scrollTop();//获取滚动高度
           
            var speed=Math.floor(-scrollh/8);
            if($('body').scrollTop()==0){clearTimeout(timer);}

           document.documentElement.scrollTop= document.body.scrollTop=scrollh +speed;//重新定义滚动高度
        }, 50)
    });
	
	//侧边栏隐藏与出现
   $(document).on('scroll',function(){
    var h=$(window).scrollTop();
    if(h>=500){
         $('.hide0').css({top:($(window).height()-$('ul').height())/2+h,display:'block'})
    }else{
        $('.hide0').css('display','none')
    }
})

  //表单验证
   $('#account').on('focus',function(){
            $('.mm').html('请输入手机号码').css({color:'blue'});
    });

    $('#accoun').on('blur',function(){
        var a=$('#accoun').val();
        var re=/^1[3|4|5|7|8][0-9]\d{8}$/;
        if(a==""){
            $('.mm').html('账户不能为空！').css({color:'red'});
            return false;
        }else{
            if(!re.test(a)){
            $('.mm').html('请输入正确手机号！').css({color:'red'});
            return false;
            }
            else{
            $('.mm').html('账户可使用！').css({color:'green'});
            return true;
            }
        }
    });

    $('#password').on('focus',function(){
            $('.mm').html('请输入密码').css({color:'blue'});
    });


    $('#password').on('blur',function(){
        var b=$('#password').val();
        var re=/\d{6,20}/;
        if(b==""){
            $('.mm').html('密码不能为空！').css({color:'red'});
            return false;
        }else{
            if(!re.test(b)){
            $('.mm').html('请输入6-20位数字字母组合密码！').css({color:'red'});
            return false;
            }
            else{
            $('.mm').html('密码正确！').css({color:'green'});
            return true;
            }
        }
    });


});
