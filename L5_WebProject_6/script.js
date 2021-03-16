var inputGrade = prompt("Enter a grade:");

var numberGrade = parseInt(inputGrade);

var letterGrade;



// Add your code below
if(numberGrade >= "90"){
alert("A");
}


if(numberGrade >= "80"){
  alert("B");
}

if(numberGrade >= "70"){
  alert("C");
}

if(numberGrade >= "60"){
  alert("D");
}

else{
alert("F");
}