const currencySelect = document.querySelector(".currency-select")

async function convertValue() {
    const valueToConvert = document.querySelector("input").value
    const currencyValue = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector("#currency-value-converted")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = data.GBPBRL.high

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valueToConvert)

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueToConvert / dolar)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueToConvert / euro)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueToConvert / libra)
    }

}

function changeCurrency() {
    const currencyImg = document.querySelector('.currency-img')
    const currencyName = document.querySelector('#currency-name')

    if (currencySelect.value == "euro") {
        currencyImg.src = "./assets/euro.png"
        currencyName.innerHTML = 'Euro'
    }

    if (currencySelect.value == "dolar") {
        currencyImg.src = "./assets/dolar.png"
        currencyName.innerHTML = 'Dólar'
    }

    if (currencySelect.value == "libra") {
        currencyImg.src = "./assets/libra.png"
        currencyName.innerHTML = 'Libra'
    }

    convertValue()

}