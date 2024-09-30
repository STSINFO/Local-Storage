document.querySelector("button").addEventListener("click", addOne);
document.querySelector("span").innerText = localStorage.getItem("val");
let val = localStorage.getItem("val");
function addOne() {
  val++;
  localStorage.setItem("val", val);
  document.querySelector("span").innerText = val;

  console.log(val);
}
