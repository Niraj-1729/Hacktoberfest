let bar = document.getElementById("barDiv");
let item = document.getElementById("item");
bar.addEventListener("click",()=>{
  if(item.style.right == "-250px"){
    item.style.right = "0px";
  }
  else{
    item.style.right = "-250px";
  }
})