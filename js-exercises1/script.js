function factorial() {
    let input = document.getElementById(N);
    let  n = input.value;
    n = Math.floor(n);
    if (n == 0) {
        n = 1;
        alert(n);
    } else if (n < 0 ) {
        alert("Error: the number is too small")
    } else if (n > 10) {
        alert("Error: the number is too large")
    } else {
        for (let i = n - 1; i > 0 ; i--) {
            n = n * i
        }
        alert(n)
    }

}