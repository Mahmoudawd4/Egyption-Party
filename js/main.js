
let boxWidth  = $("#navbar").outerWidth();

$("#closeNav i").click(function(){

    if( $("#navBox").css("left") == "0px" )
    {
        $("#navBox").animate({left:`-${boxWidth}`} , 1500);
    }
    else
    {
        $("#navBox").animate({left:`0px`} , 1500);
    }

})




$(document).ready(function(){

    $("#eventbox2 div").eq(0).css("display","block");

        $("#eventbox2 h3").click(function(){
            
            $(this).next().slideToggle(500);
            $("#eventbox2 div").not($(this).next()).slideUp(500);
            
    }); 


})





var countDownDate = new Date("Jan 5 , 2021 15:37:25").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result 
  document.getElementById("days").innerHTML = "<h3>"+  days + " D"+"</h3>";
  document.getElementById("days").innerHTML = "<h3>"+  days + " D"+"</h3>";

  document.getElementById("hours").innerHTML ="<h3>"+  hours + " h"+"</h3>";
  document.getElementById("minutes").innerHTML = "<h3>"+  minutes + " m"+"</h3>";
  document.getElementById("seconds").innerHTML = "<h3>"+  seconds + " s"+"</h3>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);











    
    $("textarea").keyup(function(){
        
        let length=$(this).val().length;
        let char = 100 - length;
        if(char <= 0)
            {
                 $("#rsala").text("your available character finished"); 
                
            }
            else
            {
                    $("#rsala").text(char);
            }
        
    });



























