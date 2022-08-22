$(function(){
  $('.m-menu-list strong').on('click', function(){
    $('.m-menu-list-box').stop().slideUp()
    $(this).next().stop().slideDown()
  })
})




// $(function(){
//   isShow = true; //화면에 보이면 true, 보이지 않으면 false
//   $('.all-menu-btn').click(function(){
//     if(isShow){ //보이니까 숨기고
//       isShow = false;
//       $('.all-menu-box').hide(); //요소를 안보이게 한다.
//       $('.all-menu-btn').active();
//     } else { //안보이니까 보이게 한다.
//       isShow = true;
//       $('.all-menu-box').show(); //요소를 보이게 한다.
//       $('.all-menu-btn').active();
//     }
//   })
// })

$(function(){
  let num = 1;
  $('.all-menu-btn').on('click' , function(){
    if( num == 1) {
      $('.all-menu-box').show()
      num = 2;
    } else if( num == 2) {
      $('.all-menu-box').hide()
      num = 1;
    }
  })
})
