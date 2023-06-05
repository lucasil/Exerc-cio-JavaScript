document.getElementById("botaoCalcula").addEventListener("click", () => {
    
    let peso = parseFloat(document.getElementById("id_peso").value)
    let altura = parseFloat(document.getElementById("id_altura").value)

    let imc = peso / (altura * altura)

    let spanIMC = document.getElementById("spanIMC")
    let spanSituação = document.getElementById("spanSituação")

    if (imc < 17) {
        spanSituacao.innerHTML = "Muito abaixo do peso"
    
    } else if (imc <= 18.49) {
        spanSituacao.innerHTML = "Abaixo do peso"
    
    } else if (imc <= 24.99) {
        spanSituacao.innerHTML = "Peso normal"
    
    } else if (imc <= 29.99) {
        spanSituacao.innerHTML = "Acima do peso"
    
    } else if (imc <= 34.99) {
        spanSituacao.innerHTML = "Obesidade I"
    
    } else if (imc <= 39.99) {
        spanSituacao.innerHTML = "Obesidade II"
    
    } else if (imc >= 40) {
        spanSituacao.innerHTML = "Obesidade III (Mórbida)"
    }

    spanIMC.innerHTML = imc

})