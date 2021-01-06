$('.res').mouseover(function(){
    $(this).children('.cmg').css('display','block')
})
$('.res').mouseout(function(){
    $(this).children('.cmg').css('display','none')
})

$('.flex2').mouseover(function(){
    $(this).children('.flex2>p:nth-of-type(3)').css('display','none')
    $(this).children('.flex2 button').css('display','block')
})

$('.flex2').mouseout(function(){
    $(this).children('.flex2>p:nth-of-type(3)').css('display','block')
    $(this).children('.flex2 button').css('display','none')
})