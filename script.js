let tempInput = document.getElementById("temp");
let fromUnit = document.getElementById("Fromunit");
let toUnit = document.getElementById("Tounit");
let convertBtn = document.getElementById("convert");
let resultBox = document.querySelector(".container4");

convertBtn.addEventListener("click", () => {

    let temp = Number(tempInput.value);

    if(tempInput.value === ""){
    alert("Please enter temperature");
    return;
}

    let from = fromUnit.value;
    let to = toUnit.value;

    let result;

    // Same unit
    if (from === to) {
        result = temp;
    }

    // Celsius conversions
    else if (from === "Celsius" && to === "Fahrenheit") {
        result = (temp * 9/5) + 32;
    }
    else if (from === "Celsius" && to === "Kelvin") {
        result = temp + 273.15;
    }

    // Fahrenheit conversions
    else if (from === "Fahrenheit" && to === "Celsius") {
        result = (temp - 32) * 5/9;
    }
    else if (from === "Fahrenheit" && to === "Kelvin") {
        result = (temp - 32) * 5/9 + 273.15;
    }

    // Kelvin conversions
    else if (from === "Kelvin" && to === "Celsius") {
        result = temp - 273.15;
    }
    else if (from === "Kelvin" && to === "Fahrenheit") {
        result = (temp - 273.15) * 9/5 + 32;
    }
    resultBox.style.display = "flex";
    resultBox.innerHTML = `<h2>Result: ${result.toFixed(2)} °${to}</h2>`;
});