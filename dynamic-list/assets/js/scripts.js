$(function(){
  'use strict';


$("#list").keypress(function(){

  if( $(".box1").val() <= 1){
    $("#list").append("<br><input type='text' class='box2'>");
  }
    console.log($(".box1").val());
});

$("#list").keypress(function(){

  if( $(".box2").val() ){
    $("#list").append("<br><input type='text' class='box2 '>");
  }

});



// $(":input[value=''][value!='.']").attr('disabled', true);
$( '#list:empty' ).remove();


});




// if($(".box2").text.length === 0){
//   $(".box2").remove();
// }

// $("#list").filter(function(){
//     return $.trim(this.innerHTML) === "&nbsp;"
// }).remove();
