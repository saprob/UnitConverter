/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPount = 2.204

let inputField = document.getElementById("input-field")
let convertBtn = document.getElementById("convert-btn")

let unitMeter = document.getElementById("unit-meter")
let unitLiter = document.getElementById("unit-vol")
let unitKilo = document.getElementById("unit-kilo")

convertBtn.addEventListener("click", function(){
    let baseValue = inputField.value
    
    unitMeter.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet`
    unitLiter.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} gallons`
    unitKilo.textContent = `${baseValue} kilo = ${(baseValue * kiloToPount).toFixed(3)} pounds`
})