let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));
let current = N;
for (let i = 0; i < 3; i++) 
    {
    if (current % 2 === 0) 
    {
        current = Math.floor(current / 2) + seed;
    } else 
        {
        current = current * 3 - seed;
    }
}

let isThreeDigit = current >= 100 && current <= 999;
let middleDigit = Math.floor((current % 100) / 10);
let isMiddleEqualSeed = middleDigit === seed;

if (isThreeDigit && isMiddleEqualSeed) 
{
    alert("YES, " + current);
} else 
{
    alert("NO, " + current);
}
