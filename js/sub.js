for (let i = 0; i < $('.tab-btn').length; i++){
  tabOpen(i);
}
function tabOpen(e){
  $('.tab-btn').eq(e).click(function(){
    $('.tab-btn').removeClass('active');
    $('.tab-content').removeClass('active');
    $('.tab-btn').eq(e).addClass('active');
    $('tab-content').eq(e).addClass('active');
  });
}


