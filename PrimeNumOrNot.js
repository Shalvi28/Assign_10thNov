//Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not

function test_prime(a)
{

  if (a===1)
  {
    return false;
  }
  else if(a === 2)
  {
    return true;
  }else
  {
    for(var n = 2; n < a; n++)
    {
      if(a % n === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(57));

