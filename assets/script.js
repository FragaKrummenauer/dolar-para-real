let dolar = 5.1

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener('keyup', () => {

})

brlInput.addEventListener('keyup', () => {

})

usdInput.value = '1000,00'
convert('usd-to-brl')

function formatCurrency (value) {

}

function fixValue(value) {
    let fixedValue = value.replace(',', '.')
    let floatValue = parseFloat(fixedValue)

    if (floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}

function convert(type) {
    if (type == "usd-to-brl") {

    }

    if (type == 'brl-to-usd') {

    }
}