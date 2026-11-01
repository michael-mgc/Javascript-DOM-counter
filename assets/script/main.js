// Structure page
const container = document.createElement("main");
const counterBox = document.createElement("div");
const arrowContainer = document.createElement("div");



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
container.append(arrowContainer);


counterBox.append(counterDisplay);
counterDisplay.append(counterValue);

counterBox.append(counterPlatform);
counterPlatform.append(minusWrapper);
counterPlatform.append(plusWrapper);

minusWrapper.append(minusBtn);
minusWrapper.append(bonusMinusBtn);

plusWrapper.append(plusBtn);
plusWrapper.append(bonusBtn);

counterBox.append(resetBtn);
resetBtn.append(resetIcon);


// Add class CSS

container.classList.add("counter");
arrowContainer.classList.add("arrow-container");
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
// container.style.background = "#111";
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
let comboTimer;

function createArrowRain(direction) { 
    for (let i = 0; i < 30; i++){

        const delay = Math.random() * 3000;

        setTimeout(() => {
            const arrow = document.createElement("span");

        arrow.textContent = direction === "up" ? "↓" :  "↑";
        arrow.classList.add("falling-arrow");

        arrow.classList.add(direction === "up" ? "arrow-red" : "arrow-blue")

        arrow.style.left = Math.random() * 100 + "%";
        arrow.style.fontSize = (25 + Math.random() * 2) + "px";

        arrowContainer.append(arrow);

        arrow.addEventListener("animationend", () => {
            arrow.remove();
        });
    }, delay);
}
 }

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

    clearTimeout(comboTimer);
    startComboTimer();

    if (comboClicks >= 5){
        bonusMinusBtn.hidden = false;
    }

    counter--;
    counterValue.textContent = counter;
    localStorage.setItem("counter", counter);

    updateAura("minus");
    buttonAnimation(minusBtn);
}

function plus () {
    if(lastClick !== "plus"){
        comboClicks = 0;
        bonusMinusBtn.hidden = true;
    }

    lastClick = "plus";
    comboClicks++;

    clearTimeout(comboTimer);
    startComboTimer();


    if (comboClicks >= 5){
        bonusBtn.hidden = false;
    }


    counter++;
    counterValue.textContent = counter;
    localStorage.setItem("counter", counter);

    updateAura("plus")
    buttonAnimation(plusBtn);
}

function startComboTimer() {

    comboTimer = setTimeout(() => {

        comboClicks = 0;
        lastClick = null;
        bonusBtn.hidden = true;
        bonusMinusBtn.hidden = true;
    },5000);
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

    clearTimeout(comboTimer);
    startComboTimer();

    // bonusBtn.hidden = false;
    updateAura("plus")
    buttonAnimation(plusBtn);
    createArrowRain("down");
}

function useMinusBonus() {
        counter -= 3;
    counterValue.textContent = counter;
    localStorage.setItem("counter", counter);

    clearTimeout(comboTimer);
    startComboTimer();

    // bonusMinusBtn.hidden = false;
    updateAura("minus");
    buttonAnimation(minusBtn);
    createArrowRain("up");
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












