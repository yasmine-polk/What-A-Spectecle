$(document).ready(function(){

    
    $(".writing-sample").click(function(){
        $(this).children(".modal").toggle().animate({
        opacity: "1"
        }, 400)
    })
    
    $(".close").click(function(){
        $(this).parent(".modal").toggle().css("opacity", "0");
    })
})




