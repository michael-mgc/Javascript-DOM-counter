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

const minusWrapper = document.createElement("div");
const plusWrapper = document.createElement("div");

const resetBtn = document.createElement("button");
const resetIcon = document.createElement("span");
resetIcon.textContent="↻";

const bonusBtn = document.createElement("button");
bonusBtn.textContent = "+ 3";
bonusBtn.type = "button";
bonusBtn.hidden = true;

const bonusMinusBtn = document.createElement("button");
bonusMinusBtn.textContent = "- 3";
bonusMinusBtn.type = "button";
bonusMinusBtn.hidden = true;



// Build DOM
document.body.append(container);
container.append(counterBox);

counterBox.append(counterDisplay);
counterDisplay.append(counterValue);

counterBox.append(counterPlatform);
counterPlatform.append(minusWrapper);
minusWrapper.append(minusBtn);
minusWrapper.append(bonusMinusBtn);
counterPlatform.append(plusWrapper);
plusWrapper.append(plusBtn);
plusWrapper.append(bonusBtn);
counterBox.append(resetBtn);
resetBtn.append(resetIcon);


// Add class CSS

container.classList.add("counter");
counterBox.classList.add("counter__box");
counterDisplay.classList.add("counter__display");
counterValue.classList.add("counter__value");
counterPlatform.classList.add("counter__platform");
plusWrapper.classList.add("counter__plus-wrapper");
minusWrapper.classList.add("counter__minus-wrapper");
plusBtn.classList.add("counter__btn-plus");
minusBtn.classList.add("counter__btn-minus");
resetBtn.classList.add("counter__btn-reset");
bonusBtn.classList.add("counter__btn-bonus");
bonusMinusBtn.classList.add("counter__btn-bonusMinus");


// Apply inline styles
container.style.background = "#111";
container.style.height = "100vh";
container.style.display = "flex";
container.style.justifyContent = "center";

counterBox.style.display = "flex";
counterBox.style.flexDirection = "column";
counterBox.style.justifyContent= "center";
counterBox.style.alignItems = "center";
counterBox.style.gap = "60px";




// Increase and decrease counter value
const valoreSalvato = localStorage.getItem("counter")
let counter = Number(valoreSalvato) || 0;
counterValue.textContent = counter;

// Combo Click
let comboClicks = 0;
let lastClick = null;

function updateAura(direction) {
    container.classList.remove("aura-blue", "aura-red");

    void container.offsetWidth;

    if (direction === "plus") {
        container.classList.add("aura-blue");
        container.classList.remove("aura-red");
    } else if (direction === "minus") {
        container.classList.add("aura-red");
        container.classList.remove("aura-blue");

    }
}


function minus () {
    if(lastClick !== "minus"){
        comboClicks = 0;
        bonusBtn.hidden = true;
    }

    lastClick = "minus";
    comboClicks++;
    if (comboClicks >= 5){
        bonusMinusBtn.hidden = false;
    }

    counter--;
    counterValue.textContent = counter;
    localStorage.setItem("counter", counter);

    updateAura("minus");

}
function plus () {
    if(lastClick !== "plus"){
        comboClicks = 0;
        bonusMinusBtn.hidden = true;
    }

    lastClick = "plus";
    comboClicks++;

    if (comboClicks >= 5){
        bonusBtn.hidden = false;
    }

    counter++;
    counterValue.textContent = counter;
    localStorage.setItem("counter", counter);

    updateAura("plus")
    buttonAnimation(plusBtn);
}

function reset() {
    counter = 0;
    counterValue.textContent = counter;
    localStorage.setItem("counter", counter);

    comboClicks = 0;
    lastClick = null;

    bonusBtn.hidden = true;
    bonusMinusBtn.hidden = true;

    container.classList.remove("aura-blue", "aura-red");
  }

function useBonus() {
        counter += 3;
    counterValue.textContent = counter;
    localStorage.setItem("counter", counter);

    bonusBtn.hidden = false;
}

function useMinusBonus() {
        counter -= 3;
    counterValue.textContent = counter;
    localStorage.setItem("counter", counter);

    bonusMinusBtn.hidden = false;
}

function buttonAnimation(button){
    button.classList.remove("clicked");
    void button.offsetWidth;
    button.classList.add("clicked")
}





minusBtn.addEventListener("click", minus);
plusBtn.addEventListener("click", plus);
resetBtn.addEventListener("click", reset);

bonusBtn.addEventListener("click", useBonus);
bonusMinusBtn.addEventListener("click", useMinusBonus);












