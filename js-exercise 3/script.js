let str = prompt('Введите числа', '');
let re = /\s*,\s*/;
let D = 0;
let Result;
let Numbers = str.split(re);
for (let i = 0; i < Numbers.length; i++) {
    if ((Numbers[i] > 0) && (Numbers[i] < 100)) {
        D += Number(Numbers[i]);
    }
}
if (Numbers.length > 0) {
    Result = D/Numbers.length;
}
if (Result < 60) {
    alert('F')
} else if (Result < 70) {
    alert('D')
} else if (Result < 80) {
    alert('C')
} else if (Result < 90) {
    alert('B')
} else if (Result < 100) {
    alert('A')
}