document.getElementById("botaoCalcula").addEventListener("click", () => {
    
    let peso = parseFloat(document.getElementById("id_peso").value)
    let altura = parseFloat(document.getElementById("id_altura").value)

    let imc = peso / (altura * altura)

    let spanIMC = document.getElementById("spanIMC")
    let spanSituacao = document.getElementById("spanSituacao")

    if (imc < 17) {
        spanSituacao.innerHTML = "Muito abaixo do peso"
        spanSituacao.style.color = "orange"
    
    } else if (imc <= 18.49) {
        spanSituacao.innerHTML = "Abaixo do peso"
        spanSituacao.style.color = "yellow"
    
    } else if (imc <= 24.99) {
        spanSituacao.innerHTML = "Peso normal"
        spanSituacao.style.color = "green"
    
    } else if (imc <= 29.99) {
        spanSituacao.innerHTML = "Acima do peso"
        spanSituacao.style.color = "yellow"
    
    } else if (imc <= 34.99) {
        spanSituacao.innerHTML = "Obesidade I"
        spanSituacao.style.color = "lightorange"
    
    } else if (imc <= 39.99) {
        spanSituacao.innerHTML = "Obesidade II"
        spanSituacao.style.color = "orange"
    
    } else if (imc >= 40) {
        spanSituacao.innerHTML = "Obesidade III (Mórbida)"
        spanSituacao.style.color = "red"
    }

    spanIMC.innerHTML = imc

})