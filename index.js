const display_element = document.querySelector(".display");
var first_number = "";
var second_number = "";
var operation = "";
display_element.innerHTML = "";

function onclick_number(value) {
    display_element.innerHTML += value;
}

function onclick_op(operator) {
    operation = operator;

    if(first_number == "") {
        first_number = parseFloat(display_element.innerHTML);
        onclick_clear()
    }
   
}

function onclick_equals() {
    second_number = parseFloat(display_element.innerHTML);
    onclick_clear()
    switch (operation) {
        case "+":
            display_element.innerHTML = first_number + second_number;
            break;
        
        case "-":
            display_element.innerHTML = first_number - second_number;
            break;

        case "x":
            display_element.innerHTML = first_number * second_number;
            break;

        case "/":
            display_element.innerHTML = first_number / second_number;
            break;
    

    }
    
    first_number = "";
    second_number = "";
}

function onclick_clear() {
    display_element.innerHTML = "";
}