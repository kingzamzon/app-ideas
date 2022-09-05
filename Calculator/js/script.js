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

//    console.log(count);
   document.getElementById("accumulator").innerHTML += `${document.getElementById("total").innerHTML} = `;
   processResult();
}

function processAction(num1, num2, action) {
    switch (action) {
        case "+" : return num1 + num2
        case "-" : return num1 - num2
        case "x" : return num1 * num2
        case "/" : return num1 / num2
    }
}

function processResult() {
    let action = null;
    let current = null;

    let total = 0;

    if (isNaN(count[count.length - 1])) {
        count.pop();
    }

    count.forEach(n => {
        if(!isNaN(n)) {
            if(current == null) {
                current = n;
            } else {
                total += processAction(current, n, action)
                current = null
            }
        } else {
            action = n;
            saveAction = n;
        }
    })

    if(current != null) {
        total = processAction(total, current, action)
    }

    document.getElementById("total").innerHTML = total.toString().substring(0, MAX_VISOR_CHAR)
}

function cleanCurrentEntry() {
    document.getElementById("total").innerHTML = "";
}

function cleanAll() {
    document.getElementById("total").innerHTML = "";
    document.getElementById("accumulator").innerHTML = "";
    count = [];
}

function percentage() {
    let currentNumber = document.getElementById("total").innerHTML
    if (currentNumber != "") {
        document.getElementById("total").innerHTML = Number(currentNumber) / 100;
    }
}