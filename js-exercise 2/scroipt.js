let array = [];
let array1 = [];
let str = "";
let str1 = "";
let result = "";
let word = prompt("Enter the world", "");
let target = ["e", "u", "o", "a", "i",];

for (let i = 0; i < word.length; i++) {
    let letter = target.includes(word[i]);
    if (letter) {array.push(word[i])
    } else {array1.push(word[i]);
    }
}
for (let i = 0; i < array.length; i++) {
    str += array[i];
}
for (let i = 0; i < array1.length; i++) {
    str1 += array1[i];
}
result = str + str1;
alert(result);