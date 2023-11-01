
var output = [];
var num = 0;


function fizzbuzz()
{
    
num++;
    
    if(num%3==0 && num%5==0)
    {
        output.push('fizzbuzz');
    }
   else if(num%3==0)
    {
            output.push('fizz');
    }
    else if(num%5==0)
     {
                output.push('buzz');
     }
      else
      {
            output.push(num);   
      }
 console.log(output);
    
}


//by loop
var output= [];
var num = 1;
while(num<101)
{
     if(num%3==0 && num%5==0)
    {
        output.push('fizzbuzz');
    }
   else if(num%3==0)
    {
            output.push('fizz');
    }
    else if(num%5==0)
     {
                output.push('buzz');
     }
      else
      {
            output.push(num);   
      }

    num++;        
}

console.log(output);
