/*
Exo 1
 */

let interger = document.getElementById('is-integer');

if (Number.isInteger(interger)) {
    interger.innerHTML = 'est un nombre entier'
}
else {
    interger.innerHTML = 'n\'est pas un nombre entier'
}

/*
Exo 2
 */

let nan = document.getElementById('is-nan');

if (isNaN(nan)) {
    nan.innerText = 'est NaN ( Not a Number )';
}
else {
    nan.innerText = 'est un nombre';
}

/*
Exo 3
 */
let value1 = document.getElementById('parse-float');
let number = parseFloat(value1.innerHTML);

value1.innerHTML = parseFloat(number * 30) + 'de la population blablabla';

/*
Exo4
 */

let parse = document.getElementById('parse-int');
let num = parseInt(parse.innerHTML);

parse.innerHTML = parseInt(num / 30);

/*
Exo 5
 */

let fixe = document.getElementById('to-fixed');
let numfixe = parseFloat(fixe.innerHTML)

fixe.innerHTML = numfixe.toFixed(2);