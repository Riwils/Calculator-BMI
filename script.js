function calculateBmi() {
let weight = document.bmiCalc.weight.value;
let height = document.bmiCalc.height.value;
let bmi = weight/(height/100*height/100);

document.bmiCalc.bmi.value = bmi;
bmi.toFixed(1)

if(bmi >= 15 && bmi < 18.5){
    document.bmiCalc.meaning.value= "Underweight";
}
else if(bmi >= 18.5 && bmi < 25){
    document.bmiCalc.meaning.value = "Healthy Weight";
}
else if(bmi >= 25 && bmi <30){
    document.bmiCalc.meaning.value = "Overweight";
}
else if(bmi >=30 && bmi <45){    
    document.bmiCalc.meaning.value = "Obese";  
}
else {   
    document.bmiCalc.meaning.value = "Error";
}
return false;
}

document.calc.display.value