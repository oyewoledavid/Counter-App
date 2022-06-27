let num = 0;
let show = document.querySelector("#number");
document.querySelector("#increase").addEventListener("click", increase);
document.querySelector("#decrease").addEventListener("click", decrease);
document.querySelector("#reset").addEventListener("click", reset);


function increase() {
  num += 1;
  show.innerHTML = num;
    if (num % 2 === 0) {
      show.style.background = "green";
    } else if (num % 2 > 0) {
      show.style.background = "red";
    }
}

function decrease() {
  num -= 1;
  show.innerHTML = num;
    if (num % 2 === 0) {
      show.style.background = "green";
    } else if (num % 2 > 0) {
      show.style.background = "red";
    }
}

function reset() {
  num = 0;
  show.innerHTML = num;
  show.style.background = "none"
}