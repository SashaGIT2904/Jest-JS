// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
}

// Función suma
const sum = (a, b) => {
    return a + b;
}

// De euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
}

// De dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    // Primero pasamos de dólar a euro, luego de euro a yen
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
}

// De yenes a libras
const fromYenToPound = function(valueInYen) {
    // Primero pasamos de yen a euro, luego de euro a libra
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
}

// Exportamos las funciones
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }