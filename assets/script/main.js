// Structor page
const container = document.createElement("main");
const counterBox = document.createElement("div");

// Display for value
const counterDisplay = document.createElement("div");
const counterValue = document.createElement("span");
counterValue.textContent = "0";

// Platform for plusBtn and minusBtn

const counterPlatform = document.createElement("div");
const plusBtn = document.createElement("button");
plusBtn.textContent = "+";
const minusBtn = document.createElement("button");
minusBtn.textContent = "-";

// Stucture HTML
document.body.append(container);
container.append(counterBox);

counterBox.append(counterDisplay);
counterDisplay.append(counterValue);

counterBox.append(counterPlatform);
counterPlatform.append(plusBtn);
counterPlatform.append(minusBtn);

// Add class CSS

container.classList.add("counter");
counterBox.classList.add("counter__box")
counterDisplay.classList.add("counter__display")
counterValue.classList.add("counter__value")
counterPlatform.classList.add("counter__platform")
plusBtn.classList.add("counter__btn-plus")
minusBtn.classList.add("counter__btn-minus")





