$(window).on('mousewheel',function(e){ 
    var wheel = e.originalEvent.wheelDelta; 


    if(wheel>0){
      //스크롤 올릴때 
      
      $('#mainNav').fadeIn(); 
      $('.btn_gotop').fadeOut();
 
         
  
    } else { 
      //스크롤  내릴때 
      $('#mainNav').fadeOut();
      if ($(this).scrollTop() > 1000){
		$('.btn_gotop').fadeIn();
	}
    } 

  });


  $(window).scroll(function(){
	if ($(this).scrollTop() < 10){
		$('.btn_gotop').fadeOut();
	}
});

$('.btn_gotop').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});