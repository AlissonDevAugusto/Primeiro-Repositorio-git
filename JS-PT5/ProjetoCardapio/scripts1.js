const list = document.querySelector("ul")

const showAllButton = document.querySelector(".buttonForEach")
const mapButton = document.querySelector(".buttonMap")
const totalWaste = document.querySelector(".buttonReduce")
const filter = document.querySelector(".buttonFilter")



function buttonCalledForEach(newArray) {
    let myLi = " "
    newArray.forEach(item => {
        myLi = myLi + `
            <li>
                <img class="imgBurguer" src= ${item.src}>
                <p class="nameBurguer"> ${item.name} </p>
                <p class="valueBurguer"> R$ ${item.price} </p>
            </li>
     `
        list.innerHTML = myLi
    });
}


function buttonCalledMap() {
    const discountedPrice = menuOptions.map(item => ({
        ...item, /* <- Spread Operator uma ferramenta que so altera o oque queremos e o restante deixa igual do array orginal */
        price: item.price * 0.9, /*<- uma forma de desconto , e o desconto foi 10%*/
    }))

    buttonCalledForEach(discountedPrice)
}


function buttonCalledReduce() {

    const finalValue = menuOptions.reduce((acc, item) => {
        const a = item.price * 0.9
        const b = acc + a
        return b

    }, 0)

    list.innerHTML = `
            <li>
                <p class="valueTotal" > O valor total da conta com desconto : <span> R$${finalValue} </span> </p>
            </li>
     `
     
}

function buttonCalledFilter() {
    const filteredMenu = menuOptions.filter(item => item.vegan)

    buttonCalledForEach(filteredMenu)

      /*{
      deu certo como eu fiz , antes de aprende mais enxuto kkkkk : 

      if (item.vegan === true ) {list.innerHTML += `
            <li>
                <img class="imgBurguer" src= ${item.src}>
                <p class="nameBurguer"> ${item.name} </p>
                <p class="valueBurguer"> R$ ${item.price} </p>
            </li>
     `}
        return false } */


}

showAllButton.addEventListener("click", () => buttonCalledForEach(menuOptions))/* usamos a '() =>' por que dessa forma nao envia de imediato os dados para a function e sim quando so e chamada */
mapButton.addEventListener("click", buttonCalledMap)
totalWaste.addEventListener("click", buttonCalledReduce)
filter.addEventListener("click", buttonCalledFilter)