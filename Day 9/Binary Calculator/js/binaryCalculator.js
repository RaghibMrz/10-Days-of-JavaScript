let screen = document.getElementById("res")
const btn0 = document.getElementById("btn0")
btn0.addEventListener('click', () => {
    screen.innerText += "0"
});

const btn1 = document.getElementById("btn1")
btn1.addEventListener('click', () => {
    screen.innerText += "1"
});

const btnClr = document.getElementById("btnClr")
btnClr.addEventListener('click', () => {
    screen.innerText = ""
});

const btnEql = document.getElementById("btnEql")
btnEql.addEventListener('click', () => {
    switch (parseInput(screen.innerText)) {
        case("P"):
            add(screen.innerText)
            break;
        case("S"):
            sub(screen.innerText)
            break;
        case("M"):
            mul(screen.innerText)
            break;
        case("D"):
            div(screen.innerText)
            break;
        default:
            //idk do nothing i guess
            console.log("error chief")
    }
});

const btnSum = document.getElementById("btnSum")
btnSum.addEventListener('click', () => {
    screen.innerText += "+"
});
const btnSub = document.getElementById("btnSub")
btnSub.addEventListener('click', () => {
    screen.innerText += "-"
});
const btnMul = document.getElementById("btnMul")
btnMul.addEventListener('click', () => {
    screen.innerText += "*"
});
const btnDiv = document.getElementById("btnDiv")
btnDiv.addEventListener('click', () => {
    screen.innerText += "/"
});

function parseInput(string) {
    if (string.includes("+")) {
        return "P"
    }
    else if (string.includes("-")) {
        return "S"
    }
    else if (string.includes("*")) {
        return "M"
    }
    else if (string.includes("/")) {
        return "D"
    }
    else {
        "default"
    }
}

function add(string) {
    const numArr = string.split("+");
    const firstNum = parseInt(numArr[0], 2)
    const secondNum = parseInt(numArr[1], 2)
    const res = firstNum + secondNum;
    screen.innerText = res.toString(2)
}

function sub(string) {
    const numArr = string.split("-");
    const firstNum = parseInt(numArr[0], 2)
    const secondNum = parseInt(numArr[1], 2)
    const res = firstNum - secondNum;
    screen.innerText = res.toString(2)
}

function mul(string) {
    const numArr = string.split("*");
    const firstNum = parseInt(numArr[0], 2)
    const secondNum = parseInt(numArr[1], 2)
    const res = firstNum * secondNum;
    screen.innerText = res.toString(2)
}

function div(string) {
    const numArr = string.split("/");
    const firstNum = parseInt(numArr[0], 2)
    const secondNum = parseInt(numArr[1], 2)
    const res = Math.floor(firstNum / secondNum);
    screen.innerText = res.toString(2)
}
