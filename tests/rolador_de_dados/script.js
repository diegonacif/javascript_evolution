function rolar() {
    // Capturando dados inseridos pelo usuário
    let roll = document.getElementById ("roll").value;
    let res = document.getElementById ("res")
    let arr = []
    res.innerHTML = ``

    if (roll.indexOf("/r")!=-1) {
        if (roll.indexOf("+")!=-1) {        
        return res.innerHTML = "tem rolamento com soma"
        } else if (roll.indexOf("-")!=-1) {
        return res.innerHTML = "tem rolamento com subtração"
        } else {return res.innerHTML = "tem rolamento normal"}       
    } else if (roll.indexOf("/r"==-1)) {
        return res.innerHTML = "não tem rolamento"
    }

    // Filtrando dados do input
    /* let ndice = roll.slice(roll.indexOf(' '),roll.search("d"))
    let tdice = roll.slice(roll.indexOf("d")+1) */

    let nroll = roll.replace(/\s/g,"")


    res.innerHTML = `${roll}`


    // Convertendo os dados em "number"

        // Criando randomização e soma dos valores
        /* for(let c = 1; c <= dquant; c++) {
            var resf = Math.ceil(Math.random()*max)
            arr.push(resf)
            var arrsum = arr.reduce(function(arrsum,PartSum){
                return arrsum + PartSum;
            },0);
            
            // Exibindo resultado em tela
            res.innerHTML = `${arrsum} (${arr[0]}, ${arr[1]}, ${arr[2]})`
        
        } */
}

