/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

1 feet = 0.305
1 gallon = 3.785
1 pound = 0.453
*/
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPount = 2.204

const feetToMeter = 0.305
const gallonToLiter = 3.785
const pountToKilo = 0.453

let inputField = document.getElementById("input-field")
let convertBtn = document.getElementById("convert-btn")

let unitMeter = document.getElementById("unit-meter")
let unitLiter = document.getElementById("unit-vol")
let unitKilo = document.getElementById("unit-kilo")

convertBtn.addEventListener("click", function(){
    let baseValue = inputField.value
    
    unitMeter.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meter`
    unitLiter.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallon = ${(baseValue * gallonToLiter).toFixed(3)} liter`
    unitKilo.textContent = `${baseValue} kilo = ${(baseValue * kiloToPount).toFixed(3)} pounds | ${baseValue} pount = ${(baseValue * pountToKilo).toFixed(3)} kilo`
})