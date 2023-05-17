// Function to calculate
function myadd(value1, value2) {
    console.log("Value 1 is " + value1)
    console.log("Value 2 is " + value2)

    var result = parseFloat(value1) + parseFloat(value2)
    console.log("my function myadd returns " + result)
    
    window.alert("The result is " + result)

    document.getElementById('addResult').value = result
  }
 

function myFunction() {
  document.body.style.backgroundColor = "lightblue";
  var all = document.getElementsByTagName("*");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.color = "blue";
   }
}

function myFunction2() {
  document.body.style.backgroundColor = "red";
  var all2 = document.getElementsByTagName("*");
  for (var i=0, max=all2.length; i < max; i++) {
    all2[i].style.color = "black";
   }
}

function myFunction3() {
  document.body.style.backgroundColor = "yellow";
  var all3 = document.getElementsByTagName("*");
  for (var i=0, max=all3.length; i < max; i++) {
    all3[i].style.color = "green";
   }
}

function myFunction4() {
  document.body.style.backgroundColor = "green";
  var all4 = document.getElementsByTagName("*");

  for (var i=0, max=all4.length; i < max; i++) {
   all4[i].style.color = "yellow";
  }
}

function myFunction5() {
  document.body.style.backgroundColor = "black";
  var all5 = document.getElementsByTagName("*");

  for (var i=0, max=all5.length; i < max; i++) {
   all5[i].style.color = "red";
  }
}

