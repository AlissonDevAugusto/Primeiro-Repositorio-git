


function buttonClicked() {
    const valueMin = Math.ceil(document.querySelector(".inputMin").value)
    const valueMax = Math.floor(document.querySelector(".inputMax").value)

    //                       n->aleatorio vezes ex:20 menos ex:10 mais 1 = 11 
    const result = Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin;
                //  floor = (n->aleatorio vezes ex:11) 
                //  valueMin = 10
                //  floor + valueMin = 


    if(valueMin <= valueMax) {
      alert(result)
    }
    else {
        alert("ERRO1HT&3P : valor minimo ultrapassou o valor maximo")
    }

}
