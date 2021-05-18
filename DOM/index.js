

let redP = document.createElement('p');

redP.textContent = "Hey, I'm red.";
redP.style.color = "red";
document.body.appendChild(redP)


let blueH =document.createElement('h3');
blueH.textContent = "Hey, I'm blue.";
blueH.style.color = "blue";
document.body.appendChild(blueH);

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p')

div.style.cssText = "background-color:pink; border:2px solid black;";
h1.textContent= "I'm inside a Div."
p.textContent = "ME TOO!!!"
div.appendChild(h1);
div.appendChild(p);
document.body.appendChild(div)

button = document.createElement('button')

button.innerHTML = "hello"
button.setAttribute('id', 'blue');

button.addEventListener('click', (e) => e.target.style.background = "blue");

document.body.appendChild(button)

buttons = document.querySelectorAll('button');

buttons.forEach((button) => 

button.addEventListener('click', () => alert(button.id))

);