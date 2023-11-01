var i = 100;
while(i >= 0)
   {
      n = i-1;  
      if(n==0)
      {
         n = 'No';
      }
      else if(n<0||i==0){
         n = 99;
         i = 'No';
      }
      
      console.log( i + " bottles of beer on the wall, "+ i +" bottles of beer."); 
      
      if(i=='No')
      {
         console.log('go to store');
      }
      else
      {
         console.log("Take one down and pass it around, " + n + " bottles of beer on the wall.");
      }
      i--;
      
   }
