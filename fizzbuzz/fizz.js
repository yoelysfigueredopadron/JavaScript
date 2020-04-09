var numero1 = 1;
var numero2 = 200;
var divisible = false;

fizzBuzz(numero1, numero2);

function fizzBuzz(numInicar, numFinal)
{
  for (var i = numInicar; i <= numFinal; i++)
  {
    divisible = false;
    //if(i % 3 == 0)
    if(esDivisible(i, 3))
    {
      document.write("Fizz");
      divisible = true;
    }
    //if(i % 5 == 0)
    if(esDivisible(i, 5))
    {
      document.write("Buzz");
      divisible = true;
    }
    //otra forma    if(i%3 != 0 && i%5 != 0){document.write(i);}
    //otra forma    if(!divisible)
    if(!esDivisible(i, 3) && !esDivisible(i, 5))
    {
      document.write(i);
    }
    document.write("<br />");
  }
}

function esDivisible(numero, divisor)
{
  if(numero % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
