var year = prompt("enter the year");

if(year%4 == 0 )
{

    if(year%100 == 0)
    {
        if(year%400 == 0)
        {
            alert("leap year");
        } 
        else
        {
            alert("no leap year");
        }
    }
    else
    {
        alert("leap year");
    }
    
}
