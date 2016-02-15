$(function(){
  'use strict';


$(".box1").keypress(function(){

  if( $(".box1").val() <= 1){
    $("#list").append("<br><input type='text' value=''>");
  }
    console.log($(".box1").val())
});

// $(this).keydown(function(){
//   console.log(this)
//   if($(this).text.length > 0 && $(this).text.length <= 1){
//     $("#list").append("<br><input type='text' value=''>");
//   }
// });

});
