$('.g1').mouseover(function () {
    $(this).css({
        'background': 'white',
        'color': 'rgb(255,103,0)'
    })
    $('.gouwuche').css('display', 'block')
})
$('.gouwuche').mousemove(function () {
    $('.gouwuche').css('display', 'block')
    $('.g1').css({
        'background': 'white',
        'color': 'rgb(255,103,0)'
    })
})

$('.gouwuche').mouseout(function () {
    $('.gouwuche').css('display', 'none')
    $('.g1').css({
        'background': 'rgb(255,103,0)',
        'color': 'white'
    })
})

$('.g1').mouseout(function () {
    $(this).css({
        'background': 'rgb(255,103,0)',
        'color': 'white'
    })
    $('.gouwuche').css('display', 'none')
})

$('.btn').mouseover(function(){
    $(this).css({'background': 'rgb(255,103,0)',
    'color': 'white'
})
})

$('.btn').mouseout(function(){
    $(this).css({'background': 'white',
'color':'black'
})
})

$('.inp').focus(function(){
    $(this).css(
        'border-color','rgb(255,103,0)'
    )
    $('.btn').css('border-color',' rgb(255,103,0)')
    $('.scarch ol').css('display','block')
})


$('.inp').blur(function(){
    $(this).css(
        'border-color', ' rgb(176,176,176)'
    )
    $('.btn').css('border-color',' rgb(176,176,176)')
    // $('.scarch ol').css('display','none')
})

$('.scarch ol li').click(function(){
    $('.inp').val($(this).html())
    $('.scarch ol').css('display','none')
    
})

$('.nav>ul li').mouseover(function(){
    $(this).children('.nav-pic').css('display','block')
})


$('.nav>ul li').mouseout(function(){
    $(this).children('.nav-pic').css('display','none')
})

$('.nav-list>ul li').mouseover(function(){
    $(this).css('background','rgb(255,103,0)').children('.nav-list2').css('display','block')
})
$('.nav-list>ul li').mouseout(function(){
    $(this).css('background','rgba(0,0,0,0)').children('.nav-list2').css('display','none')   
})

$('.res').mouseover(function(){
    $(this).children('.cmg').css('display','block')
})
$('.res').mouseout(function(){
    $(this).children('.cmg').css('display','none')
})

