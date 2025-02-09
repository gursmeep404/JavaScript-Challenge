//TASK 1
const inputElementCalc = document.getElementById("user-number");
const buttonElement = document.querySelector("#calculator button");
function sum() {
  let sum = 0;
  for (let i = 1; i <= inputElementCalc.value; i++) {
    sum = sum + i;
  }
  const paragraph = document.getElementById("calculated-sum");
  paragraph.textContent = sum;
  paragraph.style.display = "block";
}

//TASK 2

buttonElement.addEventListener("click", sum);

const button2Element = document.querySelector("#highlight-links button");

function highlightText() {
  const anchorElement = document.querySelectorAll("#highlight-links a");
  for (const anchor of anchorElement) {
    anchor.classList.add("highlight");
  }
}
button2Element.addEventListener("click", highlightText);

// TASK 3

let dummyData = {
  name: "Anna",
  age: "17",
  college: "Berkely",
};

const button3Element = document.querySelector("#user-data button");

function dummy() {
  const unorderedList = document.getElementById("output-user-data");

  unorderedList.innerHTML = " ";

  for (let key in dummyData) {
    const dataListItem = document.createElement("li");
    dataListItem.textContent = key.toUpperCase() + ":" + dummyData[key];
    unorderedList.append(dataListItem);
  }
}
button3Element.addEventListener("click", dummy);

// TASK 4

const rollDiceButton = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumber() {
  const targetNum = document.getElementById("user-target-number");
  const diceRollsList = document.getElementById("dice-rolls");
  const enteredNumber = targetNum.value;
  diceRollsList.innerHTML = " ";

  let hasRolledTargetNumber = false;
  let numOfRolls = 0;
  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numOfRolls++;
    const newRollListItem = document.createElement("li");
    newRollListItem.textContent = "Roll" + numOfRolls + ": " + rolledNumber;
    diceRollsList.append(newRollListItem);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }
  const outputRoll = document.getElementById("outputRolls");
  const outputTarget = document.getElementById("outputNum");

  outputTarget.textContent = enteredNumber;
  outputRoll.textContent = numOfRolls;
}

rollDiceButton.addEventListener("click", deriveNumber);
