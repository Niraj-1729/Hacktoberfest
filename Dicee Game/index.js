var button = document.querySelector(".dice img");

button.addEventListener('click', function(){
  var rand1 = Math.floor((Math.random()*6)+1);
  var rand2 = Math.floor((Math.random()*6)+1);

  var img1 = "images/dice"+rand1+".png";
  var img2 = "images/dice"+rand2+".png";

  document.querySelector(".img1").setAttribute("src", img1);
  document.querySelector(".img2").setAttribute("src", img2);

  if(rand1>rand2){
    document.querySelector(".heading").textContent = "Player 1 wins!";
  } else if(rand1<rand2) {
    document.querySelector(".heading").textContent = "Player 2 wins!";
  } else {
    document.querySelector(".heading").textContent = "Match Drew";
  }
});