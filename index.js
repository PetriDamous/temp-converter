const inputLabel = document.getElementById("input-label");
const inputTemp = document.getElementById("input-temp");
const resultLabel = document.getElementById("result-label");
const resultTemp = document.getElementById("result-temp");
const convertTemps = document.getElementById("convert-temps");

const inputChk = (input) => isNaN(input) || input === "";

const disable = () => {
    convertTemps.setAttribute("disabled", "");
    convertTemps.classList.add("disable-select");
    resultTemp.value = "Please enter valid number."
}

const enable = () => {
    convertTemps.removeAttribute("disabled");
    convertTemps.classList.remove("disable-select");    
}

const convert = (value) => {    
    value = parseFloat(value);

    switch (convertTemps.value) {
        case "f-to-c":
            inputLabel.textContent = "Fahrenheit";
            resultLabel.textContent = "Celsius";            
            resultTemp.value = parseFloat(((value - 32) / 1.8).toFixed(2));                       
            break;
        case "c-to-f":
            inputLabel.textContent = "Celsius";
            resultLabel.textContent = "Fahrenheit";            
            resultTemp.value  = parseFloat(((value * 1.8) + 32).toFixed(2));
            break;
        case "f-to-k":
            inputLabel.textContent = "Fahrenheit";
            resultLabel.textContent = "Kelvin";            
            resultTemp.value  = parseFloat(((value + 459.67) * (5/9)).toFixed(2));
            break;
        case "c-to-k":
            inputLabel.textContent = "Celsius";
            resultLabel.textContent = "Kelvin";                                               
            resultTemp.value  = parseFloat((value + 273.15).toFixed(2));
            break;
        case "k-to-f":
            inputLabel.textContent = "Kelvin";
            resultLabel.textContent = "Fahrenheit";            
            resultTemp.value  = formatNum(((value * (9/5)) - 459.67).toFixed(2));
            break;
        case "k-to-c":
            inputLabel.textContent = "Kelvin";
            resultLabel.textContent = "Celsius";            
            resultTemp.value  = formatNum((value - 273.15).toFixed(2));
            break;
        defualt:
            console.log("fuck-you")
    }
}

inputTemp.addEventListener("input", function (e) {
    if (inputChk(e.target.value)) {
        disable();
    } else {
        enable();
        convert(e.target.value);
    }

});

convertTemps.addEventListener("input", function () {
    convert(inputTemp.value);
});