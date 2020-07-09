createNewButton(0);

function createNewButton(num) {
    var button = document.createElement("button");
    button.id = "btn";
    button.innerHTML = num;
    button.addEventListener('click', (e) => {
          const count = Number(e.currentTarget.innerText) + 1;
        
          e.currentTarget.innerText = count;
     });
    document.body.appendChild(button);
}