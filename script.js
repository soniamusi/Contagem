function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossivel contar!!'
        window.alert('[ERRO] Faltam dados!!..')
    } else {
        //window.alert('TUDO OK..')
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo INVALIDO!! considere o PASSO 1')
            p = 1
        }

        if(i < f){
            for(let cont = i; cont <= f; cont += p) {
            resultado.innerHTML +=  `${cont} \u{1F449}` 
        }
      } else {

        for(let cont = i; cont >= f; cont -= p){
            resultado.innerHTML +=  `${cont} \u{1F449}`
        }
     }
     resultado.innerHTML += `\u{1F3C1}`
          
    }
}