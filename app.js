//VARIABLE DECLARATION.
let count = document.querySelector("#value");
let decrease = document.querySelector(".decrease");
let increase = document.querySelector(".increase");
let reset = document.querySelector(".reset");
let counter = 0;
// console.log(decrease, increase, reset);

//LISTEN FOR CLICKS
increase.addEventListener("click", increment);
decrease.addEventListener("click", decrement);
reset.addEventListener("click", resetter);

// INCREMENT OPERATION
function increment() {
  //   counter = 1;
  console.log(counter);
  count.innerHTML = counter++;
  console.log(counter);
  if (count.innerHTML > 0) {
    count.style.color = "green";
  }
}

// DECREMENT OPERATION
function decrement() {
  count.innerHTML = counter--;
  if (count.innerHTML < 0) {
    count.style.color = "red";
  }
}

// RESET OPERATION
function resetter() {
  counter = 0;
  count.innerHTML = counter;
  if (count.innerHTML === 0) {
    count.style.color = "black";
  }
  count.style.color = "black";
}
