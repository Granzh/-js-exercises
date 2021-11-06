let str = prompt("Enter the world", "");
let target = ["e", "y", "u", "o", "a", "i",];
for (let i = 0; i < target.length; i++) {
    let letter = str.includes(target[i]);
    if (letter == true) alert(target[i]);
}