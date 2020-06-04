function bmi(weight, height) {
      

  let bmi = weight / (height**2);
  
  
    if (bmi < 15){
    return "Error";
  } else if(bmi > 15 && bmi < 18.5){
    return "Underweight";
  }else if (bmi >= 18.5 && bmi <25){
    return "Healthy weight";
  }else if (bmi >= 25 && bmi <30){
    return "Overweight";
  }else if (bmi >=30 && bmi <45){
    return "Obese";
  }else {
    return "Error"
  } 
}


function ClearForm(form){

  form.weight.value = "";
  form.height.value = "";
  form.bmi.value = "";
}
    
    

  	