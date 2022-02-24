let word = prompt("Enter the world", "");
let target = ["e", "u", "o", "a", "i",];
let str = "";
let str1 = "";
let result;
for (let i = 0; i < word.length; i++) {
    let letter = target.includes(word[i]);
    if (letter) {
        str += word[i];
    } else {
        str1 += word[i];
    }
}
result = str + str1;
alert(result);