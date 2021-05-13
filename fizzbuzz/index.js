

function fizzbuzz(x)
{
    if (x == 100)
    {
      return;
    }

    if (x !== 0 )
    {
    if(x % 3 == 0 && x % 5 == 0)
    {
      console.log('fizzbuzz');
    } else
    if (x % 5 == 0)
    {
      console.log('buzz')
    } else
    if (x % 3 == 0)
    {
      console.log('fizz');
    } else
    {
      console.log(x)
    }
  }

    setTimeout(function() {fizzbuzz(x+1)}, 500);

}

fizzbuzz(0);

