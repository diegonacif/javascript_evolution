function rolar() {
    // capturando dados inseridos pelo usuário
    var rquant = document.getElementById ("rquantity")
    var dquant = document.getElementById ("dquantity")
    var dnumb = document.getElementById ("dnumber")
    var m = document.getElementById ("mod")
    var res = document.getElementById ("res")
    var arr = []
    res.innerHTML = ""

    // convertendo os dados em "number"
    var nrquant = Number(rquant.value)
    var ndquant = Number(dquant.value)
    var max = Number(dnumb.value)
    var nm = Number(m.value)

    
        for(var c = 1; c <= ndquant; c++) {
            var resf = Math.ceil(Math.random()*max)
            arr.push(resf)
        
            res.innerHTML = `${arr}`
        
        }


    
}
