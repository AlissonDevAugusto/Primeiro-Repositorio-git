// logica De programaçao - verifique se esta tudo conectado

// 1- Clicar no botao para converte -> captar quando for clicado
// 2- pega o valor do input
// 3- vai converter o valor do input para "dolar ou euro"
// 4- coloca o valor no "real" e o valor convertido no "dolar ou euro"
// 5- Coloca o valor formatado
// 6- ao troca de moeda , tbm troca a img e o nome da moeda junto com o valor formatado
// Acrescentei mais duas moedas

// 1 passo :
/* const buttonConvert = document.querySelector("button")

function valueConvert() {
    console.log("botton called")
}

buttonConvert.addEventListener("click" , valueConvert) */

///////////////////////////////////////////////////////////////////////////////////

// 2 passo : 
/* const buttonConvert = document.querySelector("button")

function valueConvert() {
    const inputValue = document.querySelector("input").value
    console.log(inputValue)
}

buttonConvert.addEventListener("click" , valueConvert) */

///////////////////////////////////////////////////////////////////////////////////

// 3 passo : 
/* const buttonConvert = document.querySelector("button")

function valueConvert() {
    const inputValue = document.querySelector("input").value
    const dollarValue = 5.10
    const convertedValue = (inputValue / dollarValue)

    console.log(convertedValue)
}

buttonConvert.addEventListener("click" , valueConvert) */

///////////////////////////////////////////////////////////////////////////////////

// 4 passo : 
/* const buttonConvert = document.querySelector("button")

function valueConvert() {
    const inputValue = document.querySelector("input").value -> valor input
"
 const dollarValue = 5.10
    const convertedValue = (inputValue / dollarValue) -> valor convertiodo

    const valueToConvert = document.querySelector(".divson-p-value-to-convert")
    const valueConverted = document.querySelector(".divson-p-value-converted")
    valueToConvert.innerHTML = inputValue
    valueConverted.innerHTML = convertedValue

}
 
buttonConvert.addEventListener("click" , valueConvert)  */

///////////////////////////////////////////////////////////////////////////////////

// 5 passo : 
 /* const buttonConvert = document.querySelector("button")
 const select02 = document.querySelector(".select2")
 const dollarValue = 5.10
 const euroValue = 5.96
     comen->  const convertedValue = (inputValue / dollarValue) 
 const valueToConvert = document.querySelector(".divson-p-value-to-convert")
 const valueConverted = document.querySelector(".divson-p-value-converted")

function valueConvert() {
    const inputValue = document.querySelector("input").value 

    if (select02.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dollarValue)
    }

    if (select02.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroValue)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

buttonConvert.addEventListener("click" , valueConvert)  
} */
 
///////////////////////////////////////////////////////////////////////////////////// 

// 6 passo :
 const buttonConvert = document.querySelector("button")
 const inputValue = document.querySelector("input")
 const select02 = document.querySelector(".select2")
 const dollarValue = 5.10
 const euroValue = 5.96
 const ieneValue = 0.031
 const libraValue = 6.75
 const valueToConvert = document.querySelector(".divson-p-value-to-convert")
 const valueConverted = document.querySelector(".divson-p-value-converted")

function valueConvert() {
    
    if (select02.value == "dolar") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue.value / dollarValue)
    }

    if (select02.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue.value / euroValue)
    }

    if (select02.value == "iene") {
        valueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency" ,
            currency: "JPY"
            }).format(inputValue.value / ieneValue)
    }

    if (select02.value == "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat("en-GB" , {
            style: "currency" ,
            currency: "GBP"
        }).format(inputValue.value / libraValue)
    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue.value)

}

 const currencyName = document.getElementById("p-coin-tochange")
 const flagToChange = document.getElementById("img-flag-tochange")

function changeCurrency() {
    
    if (select02.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano" ,
        flagToChange.src ="./assets/estados-unidos (1) 1.png"
    }
    
    if (select02.value == "euro") {
        currencyName.innerHTML = "Euro" ,
        flagToChange.src = "./assets/Design sem nome 3.png"
    }

    if (select02.value == "iene") {
        currencyName.innerHTML = "Iene" ,
        flagToChange.src = "./assets/—Pngtree—japanese yen gold coins_13207615.png"
    }
     if (select02.value == "libra") {
        currencyName.innerHTML = "Libra" , 
        flagToChange.src = "./assets/libra 1.png"
     }

    valueConvert()
}



select02.addEventListener("change" , changeCurrency )
buttonConvert.addEventListener("click" , valueConvert)  






