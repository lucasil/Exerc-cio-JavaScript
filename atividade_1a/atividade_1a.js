document.getElementById("botaoCalcula").addEventListener("click",() => { // chamar função anônima (arrow function), usada apenas para um elemento, sem necessidade de ser declarada

    let num1 = parseFloat(prompt("Informe a sua primeira nota: "))
    let num2 = parseFloat(prompt("Informe a sua segunda nota: "))

    let media = (num1 + num2) / 2

    let spanMedia = document.getElementById("spanMedia")
    let resultMedia = document.getElementById("resultMedia")
    
    if (media >= 6) {
        spanMedia.innerHTML = "APROVADO"
        spanMedia.style.color = "blue" // estilização da situação
    } else {
        spanMedia.innerHTML = "REPROVADO"
        spanMedia.style.color = "red" // estilização da situação
    }

    resultMedia.innerHTML = media
})