var numbers = document.getElementsByClassName("numbers");
var screen = document.getElementById('Screen');
var container = document.getElementsByClassName('container');
var buttons = document.getElementsByTagName('button');
function isoperand(val) {
    return (val == '+' || val == '-' || val == '*' || val == '/');
}
// console.log(buttons);
// document.body.addEventListener('keydown', function (event) {
//     if (screen.innerText == '0')
//         screen.innerText = event.key;
//     else {
//         screen.innerText += event.key;
//     }
// });
// console.log(buttons[4].innerText);
var operand1 = 0, operand2 = null, operator = null, flag = 0;
var equal_flag = 0;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var val = this.innerText;
        if (val == "AC")
            screen.innerText = '0';
        else if (val == '=') {

            var expression = screen.innerText;
            var last = expression[expression.length - 1];
            if (isoperand(last)) { }
            else {
                flag = 1;
                screen.innerText = eval(expression);
            }
        }
        else {
            if (flag && !(isoperand(val)) && val != '.') {
                screen.innerText = val;
                flag = 0;
            }
            else {
                if (screen.innerText == '0')
                    screen.innerText = val;
                else screen.innerText += val;
            }
            flag = 0;
        }
    });
}