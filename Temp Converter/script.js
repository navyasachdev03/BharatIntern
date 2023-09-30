function convertTemperature() {
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);

    let result;

    if (unitFrom === "celsius") {
      if (unitTo === "fahrenheit") {
        result = (inputTemp * 9/5) + 32;
      } 
      else if (unitTo === "kelvin") {
        result = inputTemp + 273.15;
      } 
      else {
        result = inputTemp;
      }
    } 
    
    else if (unitFrom === "fahrenheit") {
      if (unitTo === "celsius") {
        result = (inputTemp - 32) * 5/9;
      } 
      else if (unitTo === "kelvin") {
        result = (inputTemp - 32) * 5/9 + 273.15;
      } 
      else {
        result = inputTemp;
      }
    } 
    
    else if (unitFrom === "kelvin") {
      if (unitTo === "celsius") {
        result = inputTemp - 273.15;
      } 
      else if (unitTo === "fahrenheit") {
        result = (inputTemp - 273.15) * 9/5 + 32;
      } 
      else {
        result = inputTemp;
      }
    }

    document.getElementById("result").value = result.toFixed(2);
  }


function reset() {
    document.getElementById("unitFrom").value = "celsius";
    document.getElementById("unitTo").value = "celsius";
    document.getElementById("inputTemp").value = "";
    document.getElementById("result").value = "";
  }



