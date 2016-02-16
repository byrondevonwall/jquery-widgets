$(function(){
  'use strict';


$("#list").change(function(){

  if( $(".box1").text.length == true && $(".box1").text.length <= 1){
    $("#list").append("<br><input type='text' class='box box2'>");
  }

    console.log($(".box1").text.length);
});

$("#list").keyup(function(){
  if ($(".box2").val() == false ){
      $("input:last-child", this).remove();
      console.log("bug")
  }
});

// $("#list").keypress(function(){
//   if(){
//
//   }
// });

// $("#list").keypress(function(){
//
//   if( $(".box2").val() ){
//     $("#list").append("<br><input type='text' class='box2 '>");
//   }
//
// });



// $(":input[value=''][value!='.']").attr('disabled', true);
// $( '#list:empty' ).remove();


});




// if($(".box2").text.length === 0){
//   $(".box2").remove();
// }

// $("#list").filter(function(){
//     return $.trim(this.innerHTML) === "&nbsp;"
// }).remove();
