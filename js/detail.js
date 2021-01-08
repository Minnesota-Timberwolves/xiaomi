
$('.ggg1').click(function(){
    location.href='./cart.html'
} )



$(window).scroll(function(){
    var scrollHeight = $(document).scrollTop();
    if(scrollHeight>=300){
        $('.hid').css({'display':'block'})
    
    }else{
        $('.hid').css({'display':'none'})
    }
})


$('.res').mouseover(function(){
    $(this).children('.cmg').css('display','block')
})
$('.res').mouseout(function(){
    $(this).children('.cmg').css('display','none')
})

$.ajax({
    url:'./json/detail.json',
    method:'get',
    dataType:'json',
    success:function(data){
        data.forEach(function(item){
            $(`
            <img src="${item.img}" alt="">
            `).appendTo($('.xiatu-main'))
        })
    }
})