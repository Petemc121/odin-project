const numbers = document.querySelectorAll('.number');
const buttons = document.querySelectorAll('.button');
const equals = document.getElementById('equals');
const addition = document.getElementById('add');
const division = document.getElementById('divide');
const minus = document.getElementById('minus');
const multiplication = document.getElementById('multiply');
const clear = document.getElementById('clear');
const input = document.getElementById('input');

let data = {
    num1: "",
    num2: "",
    operator: ""
}

let add = (x, y) =>
{
    
    return x + y;
}

let subtract = (x, y) =>
{
    return x - y;
    
}

let divide = (x, y) =>
{
    return x / y;
}

let multiply = (x, y) =>
{
    return x * y;
}

let operate = (operator, x, y) =>
{

    if (x !== "" && y !== "")
    {

    parseInt(x, 10);
    parseInt(y, 10);


    if (operator == "+")
    {
        return add(x,y);
    }

    if (operator == "-")
    {
        return subtract(x,y);
    }

    if (operator == "x")
    {
        return multiply(x,y);
    }

    if (operator == "/")
    {
        return divide(x,y);
    }
}
}


for (let i = 0; i < numbers.length; i++)
    {   
    numbers[i].addEventListener('click', () => {
        input.value += numbers[i].innerHTML;
            
        });

    }

    for (let i = 0; i < buttons.length; i++)
    {  
            buttons[i].addEventListener('click', () => {

                data.operator = buttons[i].innerHTML;
            
                if (data.num1 == "")
            {
                data.num1 = input.value;
                input.value = "";
            } else
            {
                data.num2 = input.value;
                input.value = "";
                input.value = operate(data.operator, data.num1, data.num2);
                data.num1 = input.value;
                data.num2 = ""
            }
            
            // input.value = operate(data.opterator, data.num1, data.num2);
            });
    }





clear.addEventListener('click', () => {
    input.value = ""
    x = "";
    y = "";
});
