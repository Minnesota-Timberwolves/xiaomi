  $('.p2').click(function(){
      $('.form-one').css('display','none')
       $('.form-two').css('display','block')
       $(this).siblings().removeClass('active')
       $(this).addClass('active')
  })

  $('.p1').click(function(){
    $('.form-one').css('display','block')
     $('.form-two').css('display','none')
     $(this).siblings().removeClass('active')
     $(this).addClass('active')
})

$('#btn').click(function(){
  $.ajax({
      url:"./json/log.json",
      data:{
          username:$('#username').val(),
          password:$('#password').val()
      },
      dataType:"json",
      success:function(res){
          if(res.code==1){
              // 登录成功，信息添加到本地存储
              localStorage.setItem('name',$('#username').val());
              localStorage.setItem('password',$('#password').val());
              location.href = "./index.html"
          }
      }
  });
});