let count = [];
let saveAction;

const MAX_VISOR_CHAR = 10;

function addNumber(num) {
    let totalDisplay = document.querySelector("#total");
    totalDisplay.removeAttribute("hidden");
    // console.log(num);
    // console.log(totalDisplay.innerHTML.length);
    if(totalDisplay.innerHTML.length < MAX_VISOR_CHAR) {
        totalDisplay.innerHTML += num;
    }
}

function calAction(action) {
    let currentNumber = document.querySelector("#total").innerHTML;

    if(currentNumber.length === 0 )  return;
    
    count.push(Number(currentNumber));

    (currentNumber.split('')[currentNumber.length[-1]] == ".") ? 
        document.querySelector("#accumulator").innerHTML += ` ${currentNumber}0 ${action} ` 
    :
        document.querySelector("#accumulator").innerHTML += ` ${currentNumber} ${action} `;

    document.querySelector("#total").innerHTML = "";

    count.push(action);    
}

function addDot() {
    let currentNumber = document.querySelector("#total").innerHTML;

    if(currentNumber == "") {
        document.querySelector("#total").removeAttribute("hidden");
        document.querySelector("#total").innerHTML = "0.";
    }else if(!currentNumber.includes(".")) {
        document.querySelector("#total").innerHTML += ".";
    }

}

function result() {
   let currentAccumNum =  document.querySelector("#accumulator").innerHTML;
   let currentNumber =  document.querySelector("#total").innerHTML;

   console.log(currentAccumNum);

   if(currentAccumNum[currentAccumNum.length - 1] === "=" && currentNumber.length > 0) {
    currentNumber = processAction(Number(currentNumber), Number(currentNumber), saveAction).toString().substring(0, MAX_VISOR_CHAR); 
   }

   if(count.length === 0) return;

   count.push(Number(currentNumber))

   console.log(count);
}

function processAction(num1, num2, action) {
    switch (action) {
        case "+" : return num1 + num2
        case "-" : return num1 - num2
        case "x" : return num1 * num2
        case "/" : return num1 / num2
    }
}