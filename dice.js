
var imagesArray = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

function displayImage() {

  var num1 = Math.floor(Math.random() * imagesArray.length);

  var num2 = Math.floor(Math.random() * imagesArray.length);



  
  if(num1 > num2)
  {
    document.getElementById("winner").innerHTML = "Player 1 wins!!";
  }
  else if( num1 === num2)
  {
    document.getElementById("winner").innerHTML = "Its a tie!!";

  }
  else{
    document.getElementById("winner").innerHTML = "Player 2 wins!!";
  }

  document.canvas1.src ="images/" + imagesArray[num1];
  document.canvas2.src ="images/" + imagesArray[num2];


}


