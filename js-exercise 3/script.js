let str = prompt('Введите числа', '');
let re = /\s*,\s*/;
let d = 0;
let result;
let numbers = str.split(re);
for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] > 0) && (numbers[i] < 100)) {
        d += Number(numbers[i]);
    }
}
if (numbers.length > 0) {
    result = d/numbers.length;
}
if (result < 60) {
    alert('F')
} else if (result < 70) {
    alert('D')
} else if (result < 80) {
    alert('C')
} else if (result < 90) {
    alert('B')
} else if (result < 100) {
    alert('A')
}