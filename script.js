function calculateBmi() {
let weight = document.bmiCal.weight.value;
let height = document.bmiCal.height.value;
let bmi = weight/(height/100*height/100);

document.bmiCal.bmi.value = bmi;

if(bmi >= 15 && bmi < 18.5){
document.bmiCal.meaning.value = "Underweight";
}
else if(bmi >= 18.5 && bmi < 25){
document.bmiCal.meaning.value = "Healthy Weight";
}
else if(bmi >= 25 && bmi <30){
document.bmiCal.meaning.value = "Overweight"
}
else if(bmi >=30 && bmi <45){    
document.bmiCal.meaning.value = "Obese";  
}else {   
document.bmiCal.meaning.value = "Error"  } 
}


