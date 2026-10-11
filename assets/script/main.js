// Structure page
const container = document.createElement("main");
const counterBox = document.createElement("div");

// Display for value
const counterDisplay = document.createElement("div");
const counterValue = document.createElement("span");

// Platform for plusBtn and minusBtn

const counterPlatform = document.createElement("div");

const minusBtn = document.createElement("button");
minusBtn.textContent = "-";

const plusBtn = document.createElement("button");
plusBtn.textContent = "+";

const resetBtn = document.createElement("button");
const resetIcon = document.createElement("span");
resetIcon.textContent="↻";



// Build DOM
document.body.append(container);
container.append(counterBox);

counterBox.append(counterDisplay);
counterDisplay.append(counterValue);

counterBox.append(counterPlatform);
counterPlatform.append(minusBtn);
counterPlatform.append(plusBtn);
counterBox.append(resetBtn);
resetBtn.append(resetIcon);


// Add class CSS

container.classList.add("counter");
counterBox.classList.add("counter__box");
counterDisplay.classList.add("counter__display");
counterValue.classList.add("counter__value");
counterPlatform.classList.add("counter__platform");
plusBtn.classList.add("counter__btn-plus");
minusBtn.classList.add("counter__btn-minus");
resetBtn.classList.add("counter__btn-reset");


// Apply inline styles
container.style.background = "#111";
container.style.height = "100vh";
container.style.display = "flex";
container.style.justifyContent = "center";

counterBox.style.display = "flex";
counterBox.style.flexDirection = "column";
counterBox.style.justifyContent= "center";
counterBox.style.alignItems = "center";
counterBox.style.gap = "100px";


// Increase and decrease counter value
const valoreSalvato = localStorage.getItem("counter")
let counter = Number(valoreSalvato) || 0;
counterValue.textContent = counter;

function minus () {
    counter--;
    counterValue.textContent = counter;
    localStorage.setItem("counter", counter);

}
function plus () {
    counter++;
    counterValue.textContent = counter;
    localStorage.setItem("counter", counter);
}

function reset() {
    counter = 0;
    counterValue.textContent = counter;
    localStorage.setItem("counter", counter);
  }


minusBtn.addEventListener("click", minus);
plusBtn.addEventListener("click", plus);
resetBtn.addEventListener("click", reset);












