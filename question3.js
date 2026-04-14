function isPalindrome(num) 
{
    let str = num.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

let X = -1;
for (let x = 0; x <= 100000; x++) 
{
    let value = N + x;
    if (isPalindrome(value) && value % K === 0) 
    {
        X = x;
        break;
    }
}
alert(X);
