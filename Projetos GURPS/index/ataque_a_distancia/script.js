function calcular(){
     // capturando dados inseridos pelo usuário
     var dist = document.getElementById ('dist')
     var mdt = document.getElementById ('mdt')
     var oms = document.getElementById ('oms')
     var pdi = document.getElementById ('pdi')

     // convertendo os dados em "number"
     var dist2 = Number(dist.value)
     var mdt2 = Number(mdt.value)
     var oms2 = Number(oms.value)
     var pdi2 = String(pdi.value)

     // inserindo dados de distância com o "if", criando variável "dist3"
     {if (dist2 <= 2){
          var dist3 = 0
     } else if (dist2 <= 3){
          var dist3 = -1
     } else if (dist2 <= 5){
          var dist3 = -2
     } else if (dist2 <= 7){
          var dist3 = -3
     } else if (dist2 <= 10){
          var dist3 = -4
     } else if (dist2 <= 15){
          var dist3 = -5
     } else if (dist2 <= 20){
          var dist3 = -6
     } else if (dist2 <= 30){
          var dist3 = -7
     } else if (dist2 <= 50){
          var dist3 = -8
     } else if (dist2 <= 70){
          var dist3 = -9
     } else if (dist2 <= 100){
          var dist3 = -10
     } else if (dist2 <= 150){
          var dist3 = -11
     } else if (dist2 <= 200){
          var dist3 = -12
     } else if (dist2 <= 300){
          var dist3 = -13
     } else if (dist2 <= 500){
          var dist3 = -14
     } else if (dist2 <= 700){
          var dist3 = -15
     } else if (dist2 <= 1000){
          var dist3 = -16
     } else if (dist2 <= 1500){
          var dist3 = -17
     } else if (dist2 <= 2000){
          var dist3 = -18
     } else if (dist2 <= 3000){
          var dist3 = -19
     } else if (dist2 <= 5000){
          var dist3 = -20
     } else if (dist2 <= 7000){
          var dist3 = -21
     } else if (dist2 <= 10000){
          var dist3 = -22
     } else if (dist2 <= 15000){
          var dist3 = -23
     } else if (dist2 <= 20000){
          var dist3 = -24
     } else if (dist2 <= 30000){
          var dist3 = -25
     } else if (dist2 <= 50000){
          var dist3 = -26
     } else if (dist2 <= 70000){
          var dist3 = -27
     } else if (dist2 <= 100000){
          var dist3 = -28
     } else if (dist2 <= 150000){
          var dist3 = -29
     } else if (dist2 <= 200000){
          var dist3 = -30
     }
     }

     // inserindo dados de tamanho com o "if", criando variável "mdt3"
     {if (mdt2 <= 0.005){
          var mdt3 = -15
     } else if (mdt2 <= 0.008){
          var mdt3 = -14
     } else if (mdt2 <= 0.012){
          var mdt3 = -13
     } else if (mdt2 <= 0.017){
          var mdt3 = -12
     } else if (mdt2 <= 0.025){
          var mdt3 = -11
     } else if (mdt2 <= 0.038){
          var mdt3 = -10
     } else if (mdt2 <= 0.05){
          var mdt3 = -9
     } else if (mdt2 <= 0.075){
          var mdt3 = -8
     } else if (mdt2 <= 0.125){
          var mdt3 = -7
     } else if (mdt2 <= 0.2){
          var mdt3 = -6
     } else if (mdt2 <= 0.3){
          var mdt3 = -5
     } else if (mdt2 <= 0.45){
          var mdt3 = -4
     } else if (mdt2 <= 0.6){
          var mdt3 = -3
     } else if (mdt2 <= 1){
          var mdt3 = -2
     } else if (mdt2 <= 1.5){
          var mdt3 = -1
     } else if (mdt2 <= 2){
          var mdt3 = 0
     } else if (mdt2 <= 3){
          var mdt3 = 1
     } else if (mdt2 <= 5){
          var mdt3 = 2
     } else if (mdt2 <= 7){
          var mdt3 = 3
     } else if (mdt2 <= 10){
          var mdt3 = 4
     } else if (mdt2 <= 15){
          var mdt3 = 5
     } else if (mdt2 <= 20){
          var mdt3 = 6
     } else if (mdt2 <= 30){
          var mdt3 = 7
     } else if (mdt2 <= 50){
          var mdt3 = 8
     } else if (mdt2 <= 70){
          var mdt3 = 9
     } else if (mdt2 <= 100){
          var mdt3 = 10
     } else if (mdt2 <= 150){
          var mdt3 = 11
     } else if (mdt2 <= 200){
          var mdt3 = 12
     } else if (mdt2 <= 300){
          var mdt3 = 13
     } else if (mdt2 <= 500){
          var mdt3 = 14
     } else if (mdt2 <= 700){
          var mdt3 = 15
     } else if (mdt2 <= 1000){
          var mdt3 = 16
     } else if (mdt2 <= 1500){
          var mdt3 = 17
     } else if (mdt2 <= 2000){
          var mdt3 = 18
     } else if (mdt2 <= 3000){
          var mdt3 = 19
     } else if (mdt2 <= 5000){
          var mdt3 = 20
     } else if (mdt2 <= 7000){
          var mdt3 = 21
     } else if (mdt2 <= 10000){
          var mdt3 = 22
     } else if (mdt2 <= 15000){
          var mdt3 = 23
     } else if (mdt2 <= 20000){
          var mdt3 = 24
     } else if (mdt2 <= 30000){
          var mdt3 = 25
     } else if (mdt2 <= 50000){
          var mdt3 = 26
     } else if (mdt2 <= 70000){
          var mdt3 = 27
     } else if (mdt2 <= 100000){
          var mdt3 = 28
     } else if (mdt2 <= 150000){
          var mdt3 = 29
     } else if (mdt2 <= 200000){
          var mdt3 = 30
     }
     }

     // inserindo dados de ponto de impacto com o "if", criando variável pdi3
     {if (pdi2 === 'tronco'){
          pdi3 = 0
     } else if (pdi2 === 'olho'){
          pdi3 = -9
     } else if (pdi2 === 'cranio'){
          pdi3 = -7
     } else if (pdi2 === 'rosto' || pdi2 === 'pescoco'){
          pdi3 = -5
     } else if (pdi2 === 'pd' || pdi2 === 'bd' || pdi2 === 'pe' || pdi2 === 'be'){
          pdi3 = -2
     } else if (pdi2 === 'mao' || pdi2 === 'pe'){
          pdi3 = -4
     } else if (pdi2 === 'ov' || pdi2 === 'virilha'){
          pdi3 = -3
     }
     }


     //validações
     if (dist.value.length < 1 || mdt.value.length < 1){
          window.alert('[ERRO] Distância e Modificador de Tamanho precisam ser preenchidos.')
          res.innerHTML = '[ERRO] Distância e Modificador de Tamanho precisam ser preenchidos.'
     } else if (oms.value.length < 1){
          var resultado = dist3 + mdt3 + pdi3
          res.innerHTML = `O modificador é: ${resultado}`
     } else {          
          var resultado = dist3 + mdt3 + oms2 + pdi3
          res.innerHTML = `O modificador é: ${resultado}`
     }
}

