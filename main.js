var newLine= true
var value1;
var currentOperator;
var value2;
var finalTotal;
function digitBtnPressed(button){
  
  if (newLine){
    document.getElementById("displayScreen").value=button;
    newLine=false;
  }else{
    var currentValue=document.getElementById("displayScreen").value;
    document.getElementById("displayScreen").value= currentValue + button;
    
  }
}

function btnACPressed(){
  document.getElementById("displayScreen").value=0;
  newLine= true;
}

function operatorBtnPressed(operator){
  currentOperator=operator;
  value1=parseInt(document.getElementById("displayScreen").value);
  newLine=true;
}

function equalsBtnPressed(){
  var value2=parseInt(document.getElementById("displayScreen").value);
  var finalTotal;
  
  switch (currentOperator) {
    case '+':
      finalTotal=value1+value2
      
      break;
    
    case '-':
      finalTotal=value1-value2
      
      break;
      
    case 'X':
      finalTotal=value1*value2
      
      break;
    
    case '/':
      finalTotal=value1/value2
      
      break;
    
  }
  document.getElementById("displayScreen").value=finalTotal;
  value1=0;
  newLine=true;
  
}
