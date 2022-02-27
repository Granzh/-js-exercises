let word = prompt("Enter the world", "");
let target = ["e", "u", "o", "a", "i",];
let str = "";
let str1 = "";
let result;
for (const l of word) {
    const letterIsThere = target.includes(l);
    if (letterIsThere) {
        str += l;
    } else {
        str1 += l;
    }
}
result = str + str1;
alert(result);