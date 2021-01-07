$('.zhanghao').blur(function(){
    var reg = /^\w{6,8}$/;
    var username = $(this).val()
    if(reg.test(username)){
        $('.tx1').html('用户名可以注册')
    }else{
        $('.tx1').html('用户名必须是6-8位的字母数字或者下划线')
    }

})
$('.mima').blur(function(){
    var password = $(this).val()
   
    if(/^[\w~!@#]{8,12}$/.test(password)&&/\d+/.test(password)&&/[A-Z]+/.test(password)&&/[a-z]+/.test(password)&&/[~!@#]+/.test(password)){
        $('.ps1').html ("密码强度高")  ;
        return true
    }
    if(/^[\w~!@#]{8,12}$/.test(password)){
        $('.ps1').html("密码强度低")  ;
        return true
    }else{
        $('.ps1').html('密码必须是8-12的字母,数字或者特殊符号') ;
        return false;
    }		
})

$('.sub').click(function(){
    $.ajax({
        url:"./json/reg.json",
        data:{
            username:$('.zhanghao').val(),
            password:$('.mima').val()
        },
        dataType:'json',
        success:function(res){
            if(res.code==1){
                // 注册成功，信息添加到本地存储
                localStorage.setItem('name',$('.zhanghao').val());
                localStorage.setItem('password',$('.mima').val());
                location.href = "./login.html"
            }
        }
    });
});