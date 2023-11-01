function whosPaying(names) {
    


var numberOfperson = names.length;
    var randomNumber = Math.floor(Math.random()*numberOfperson);
    var randomPerson = names[randomNumber];
    return(randomPerson);
    
}

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(names);


