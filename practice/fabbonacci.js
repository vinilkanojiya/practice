function fibonacciGenerator (n) {

    
    var a = 0;
    var b = 1;
    var arr = []
    
    if(n>=1)
    {
    arr.push(a);
    }
    
    if(n>=2)
    {
    arr.push(b);
    }
    
    var c;
    if(n>=3)
    {
    for(var i=2;i<n;i++)
    {
       c = a+b;
       arr.push(c);
       a=b;
       b=c;
       
    }
    }
    return arr;
    
    
    
   
}

