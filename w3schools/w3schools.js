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

  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.color = "black";
   }
}

function myFunction2() {
  document.body.style.backgroundColor = "red";

  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.color = "black";
   }for (var i=0, max=all.length; i < max; i++) {
   all[i].style.color = "black";
  }
}

function myFunction3() {
  document.body.style.backgroundColor = "yellow";

  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.color = "black";
   }
}

function myFunction4() {
  document.body.style.backgroundColor = "green";
  var all = document.getElementsByTagName("*");

  for (var i=0, max=all.length; i < max; i++) {
   all[i].style.color = "black";
  }
}

function myFunction5() {
  document.body.style.backgroundColor = "black";
  var all = document.getElementsByTagName("*");

  for (var i=0, max=all.length; i < max; i++) {
   all[i].style.color = "red";
  }
}

