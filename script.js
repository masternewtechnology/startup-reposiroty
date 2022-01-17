let js = 'amazing';
let javascriptIsFun = true;
// if (js == 'amazing') {
//     alert('JavaScript is FUN!')
// }
console.log(40 + 8 + 23 - 10);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 'Siju');
console.log(typeof 23);

javascriptIsFun = 'YES!';

console.log(typeof javascriptIsFun);

let checkUndefined;
if (typeof checkUndefined == undefined) {
    alert("Logic using typeOf working");
} else {
    alert("Logic using typeOf Not Working");
}

//ES06 --> Template Literals

const birthYear = 1989;
const currentYear = 2022;
const firstName = 'Siju';
const job = "Software Engineer";

const outputES06 = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}! `;
console.log(outputES06);

