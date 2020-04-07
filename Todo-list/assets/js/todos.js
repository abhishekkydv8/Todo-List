//check off specific todos by clicking
$("ul").on("click","li", function(){
  $(this).toggleClass("cross");  
});

//deleting the todos
$("ul").on("click","span", function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
});


//adding the todos
$("input[type='text'").keypress(function(e){
    
    //on hitting enter text from input box will be extacted
    if(e.which===13)
    {
        var text=$(this).val(); //grabbing input
        $(this).val("");        //making text box look empty
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+" "+text+"</li>");  //appending new todos in the list
    }
});


//for toggling the input box
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});