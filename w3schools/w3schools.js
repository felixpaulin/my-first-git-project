// Function to calculate
function myadd(value1, value2) {
    console.log("Value 1 is " + value1)
    console.log("Value 2 is " + value2)

    var result = parseFloat(value1) + parseFloat(value2)
    console.log("my function myadd returns " + result)
    
    window.alert("The result is " + result)

    document.getElementById('addResult').value = result
  }
 


  
function changeColorStyle(backgroundColor, textColor) 
{
    document.body.style.backgroundColor = backgroundColor;

    var all = document.getElementsByTagName("*");
    for (var i=0; i < all.length; i++) {
      all[i].style.color = textColor;
     }
}


