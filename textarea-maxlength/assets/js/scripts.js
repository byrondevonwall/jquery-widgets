// $(document).ready(function()  {
    var characters = 190;
    $("#counter").append(characters);
    $("#text").keyup(function(){
        if($(this).val().length > characters){
        $(this).val($(this).val().substr(0, characters));
        }
    var remaining = characters - $(this).val().length;
    $("#counter").html(remaining);
    });
// });
