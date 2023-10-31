function bmiCalculator(weight, height)
{
    return Math.round(weight/(height*height));
}

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);
