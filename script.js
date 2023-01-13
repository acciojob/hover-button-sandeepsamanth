//your code here
document.getElementById("btn").onmouseover = function() {
  this.style.backgroundColor = "yellow";
  this.style.color = "black";
  this.style.borderRadius = "30px";
}
document.getElementById("btn").onmouseout = function() {
  this.style.backgroundColor = "black";
  this.style.color = "white";
  this.style.borderRadius = "5px";
}