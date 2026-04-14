function isPrime(n) 
{
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) 
    {
        if (n % i === 0) return false;
    }
    return true;
}

function sumOfDigits(num) 
{
    let sum = 0;
    while (num > 0) 
    {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function containsZero(num) 
{
    while (num > 0) 
    {
        if (num % 10 === 0) return true;
        num = Math.floor(num / 10);
    }
    return false;
}

let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

let count = 0;

for (let x = Math.ceil(L / K) * K; x <= R; x += K) 
    {
    if (!containsZero(x) && isPrime(sumOfDigits(x))) 
    {
        count++;
    }
}
alert(count);
