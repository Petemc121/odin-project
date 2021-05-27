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
    let numeric1;
    let numeric2;

    if (x !== "" && y !== "")
    {
        if (x.includes(".") || y.includes("."))
        {
            numeric1 = parseFloat(x);
            numeric2 = parseFloat(y);

        } else{
         numeric1 = parseInt(x, 10);
         numeric2 = parseInt(y, 10);
        
        }
 
    console.log(numeric1);
    console.log(numeric2);
    console.log(operator);


    if (operator == "+")
    {
        return add(numeric1,numeric2);
    }

    if (operator == "-")
    {
        return subtract(numeric1,numeric2);
    }

    if (operator == "x")
    {
        return multiply(numeric1,numeric2);
    }

    if (operator == "/")
    {
        return divide(numeric1,numeric2).toFixed(2);
    }
}
}


for (let i = 0; i < numbers.length; i++)
    {   
    numbers[i].addEventListener('click', () => {

        if (data.num1 == input.value)
        {
            input.value = "";
            input.value += numbers[i].innerHTML; 
        } else{

        input.value += numbers[i].innerHTML;  
        }
        });

    }

    for (let i = 0; i < buttons.length; i++)
    {  
            buttons[i].addEventListener('click', () => {

                
            
                if (data.num1 == "")
            {
                data.operator = buttons[i].innerHTML;
                data.num1 = input.value;
               
            } else
            {
                data.num2 = input.value;
                input.value = "";
                input.value = operate(data.operator, data.num1, data.num2);
                data.operator = buttons[i].innerHTML;
                data.num1 = input.value;
             
            }
            
            // input.value = operate(data.opterator, data.num1, data.num2);
            });
    }

    equals.addEventListener('click', () => {
      
        data.num2 = input.value;

            if (data.num1 !== "" && data.num2 !== "" && data.operator !== "")
            {
                input.value = operate(data.operator, data.num1, data.num2);
                data.num1 = "";
                data.num2 = "";
                data.operator = "";
            } else {
                alert("Please enter values to calculate");
            }
    });



clear.addEventListener('click', () => {
    input.value = ""
    x = "";
    y = "";
});
