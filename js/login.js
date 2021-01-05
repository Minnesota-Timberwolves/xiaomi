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