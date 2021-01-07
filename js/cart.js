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


$('#all1').click(function(){
    $("input[type='checkbox']").prop("checked", function( i, val ) {
        return !val;
      });
});


// $('.btn').click(function(){
    

// })


// 加入进货单
function getCart(){
    var list = localStorage.getItem('cart')||"[]"; //字符串
    return JSON.parse(list);
}
function setCart(arr){

    localStorage.setItem('cart',JSON.stringify(arr))
}

// 点击加入进货单
$('.btn').click(function(){
    var newProduct = {
        id:$(this).data('id'),
        name:$(this).data('name'),
        img:$(this).data('img'),
        price:$(this).data('price'),
    };
    
    // 先获取原来的商品列表数组
    var productList = getCart();
    // 把新商品添加进去
    productList.push(newProduct);//如果有同id商品，不能直接push，要把num增加
    // 存回本地存储
    setCart(productList);

   if( productList){
       $.each(productList,function(index,item){

    $('.list-list').append(`<ul>
    <li>
     <input type="checkbox" >
    </li>
    <li>
     <img src="${ item.img}" alt=""></li>
     <li>
       <p>${ item.name}</p>
     </li>
     <li>
       <p>${ item.price}</p>

       </li>
     <li>
       <div class="jsx">
         <button class="del">-</button>
         <input class="num" type="text" value="1">
         <button class="add">+</button>
       </div>
     </li>
     <li><span>${ item.price}</span></li>
     <li><div class="rem">X</div></li>
   </ul>`)
 })
   }



//加
$('.add').click(function(){
  if( $(this).siblings('.num').val()>=0){

       var num= Number($(this).siblings('.num').val())
       num+=1
       $(this).siblings('.num').val(num)
  var  str=parseInt( $(this).parent().parent().prev().children('p').html())

    $(this).parent().parent().next().children().html(`${str*num}元`)   
   }
})

//减
$('.del').click(function(){
   if( $(this).siblings('.num').val()<=1){
       alert('不能再减少了')
   }else{
       var num= Number($(this).siblings('.num').val())
       num-=1
       $(this).siblings('.num').val(num)
  var  str=parseInt( $(this).parent().parent().prev().children('p').html())

    $(this).parent().parent().next().children().html(`${str*num}元`)   
   }


   }
)
$('.rem').click(function(){
   $(this).parent().parent().remove()
})


localStorage.removeItem('cart')

});


//加
$('.add').click(function(){
  if( $(this).siblings('.num').val()>=0){

       var num= Number($(this).siblings('.num').val())
       num+=1
       $(this).siblings('.num').val(num)
  var  str=parseInt( $(this).parent().parent().prev().children('p').html())

    $(this).parent().parent().next().children().html(`${str*num}元`)   
   }
})

//减
$('.del').click(function(){
   if( $(this).siblings('.num').val()<=1){
       alert('不能再减少了')
   }else{
       var num= Number($(this).siblings('.num').val())
       num-=1
       $(this).siblings('.num').val(num)
  var  str=parseInt( $(this).parent().parent().prev().children('p').html())

    $(this).parent().parent().next().children().html(`${str*num}元`)   
   }


   }
)
$('.rem').click(function(){
   $(this).parent().parent().remove()
})
