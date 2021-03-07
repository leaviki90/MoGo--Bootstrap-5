$(document).ready(function () {






function scrollCheck(){
    let topPosition = $('header').offset().top;
   if(topPosition > 100){
     $('header').css('background-color', '#F38181'); 
   } else{
       $('header').css('background-color', 'transparent');
   }
   
}

scrollCheck();
 $(window).scroll(function(){
        scrollCheck();
        
 });













});