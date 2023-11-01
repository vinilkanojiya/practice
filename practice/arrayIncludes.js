var name =["Aashvi","Lakshmi","Meera","Saanvi","Sarika","Shyla","Sita","Uma"];
var findName = prompt('enter your name to check list');
var firstChar = findName.slice(0,1);
firstChar = firstChar.toUpperCase();
findName = firstChar + findName.slice(1,).toLowerCase();
console.log(findName);

if(name.includes(findName))
{
    alert("yes");
}
else{
    alert("no");
}
