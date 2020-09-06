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

const roundTemp = temp => String(parseFloat(temp.toFixed(2)));

const convert = (value) => {    
    value = parseFloat(value);

    switch (convertTemps.value) {
        case "f-to-c":
            inputLabel.textContent = "Fahrenheit";
            resultLabel.textContent = "Celsius";
            resultTemp.value = roundTemp((value - 32) / 1.8);
            break;

        case "c-to-f":
            inputLabel.textContent = "Celsius";
            resultLabel.textContent = "Fahrenheit";            
            resultTemp.value = roundTemp((value * 1.8) + 32);
            break;

        case "f-to-k":
            inputLabel.textContent = "Fahrenheit";
            resultLabel.textContent = "Kelvin";            
            resultTemp.value = roundTemp((value + 459.67) * (5/9));
            break;

        case "c-to-k":
            inputLabel.textContent = "Celsius";
            resultLabel.textContent = "Kelvin";                                               
            resultTemp.value = roundTemp(value + 273.15);
            break;

        case "k-to-f":
            inputLabel.textContent = "Kelvin";
            resultLabel.textContent = "Fahrenheit";            
            resultTemp.value = roundTemp((value * (9/5)) - 459.67);
            break;

        case "k-to-c":
            inputLabel.textContent = "Kelvin";
            resultLabel.textContent = "Celsius";            
            resultTemp.value = roundTemp(value - 273.15);
            break;

        defualt:
            console.log("fuck-you")
    }
}

inputTemp.value = "";
resultTemp.value = "";
convertTemps.value = "f-to-c";
disable();

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