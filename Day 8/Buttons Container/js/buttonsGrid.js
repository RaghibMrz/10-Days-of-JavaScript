const btn5 = document.getElementById("btn5")
btn5.addEventListener('click', () => {
    const btn1 = document.getElementById("btn1")
    const btn1Num = btn1.innerText
    const btn2 = document.getElementById("btn2")
    const btn2Num = btn2.innerText
    const btn3 = document.getElementById("btn3")
    const btn3Num = btn3.innerText
    const btn6 = document.getElementById("btn6")
    const btn6Num = btn6.innerText
    const btn9 = document.getElementById("btn9")
    const btn9Num = btn9.innerText
    const btn8 = document.getElementById("btn8")
    const btn8Num = btn8.innerText
    const btn7 = document.getElementById("btn7")
    const btn7Num = btn7.innerText
    const btn4 = document.getElementById("btn4")
    const btn4Num = btn4.innerText
    
    btn2.innerText = btn1Num
    btn3.innerText = btn2Num
    btn8.innerText = btn9Num   
    btn9.innerText = btn6Num
    btn6.innerText = btn3Num
    btn1.innerText = btn4Num
    btn7.innerText = btn8Num
    btn4.innerText = btn7Num
});
