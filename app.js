var count = 0;
var betorhold; 

function cc(card1) {


switch (card1){
   case "2":
	      card1 = 2;
        break;
   case "3":
        card1 = 3;
        break;
   case "4":
	      card1 = 4;
        break;
   case "5":
        card1 = 5;
        break;
   case "6":
	      card1 = 6;
        break;
   case "7":
        card1 = 7;
        break;
   case "8":
        card1 = 8;
        break;
   case "9":
	      card1 = 9;
        break;
   case "10":
        card1 = 10;
        break;
}

 switch (card1){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    
      count++; 
      break;
    case 7:
    case 8:
    case 9:
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;   
  }
  
  

  if (count < 0) {
    var betorhold = "hold";  
  } else if (count > 0) {
    var betorhold = "bet";  
  } else {
    var betorhold = "hold";  
  } 

}





$(document).ready(function(){
  $("button").click(function(){
      $("#yourHandIs").html(
        "Your hand: " + 
        $("#card1").val() + ", " +  
        $("#card2").val() + ", " +   
        $("#card3").val() + ", " + 
        $("#card4").val() + ", " + 
        $("#card5").val());
    
     $("#cardCountTotal").html(
       "Card count total: " + count); 
    
     $("#recommendedMove").html(
       "You should " + betorhold);
    
    $("#testDiv").html(card1);
    
  });
});

console.log(count + betorhold);



