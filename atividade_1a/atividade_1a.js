document.getElementById("botaoCalcula").addEventListener("click",() => {

    let num1 = parseFloat(prompt("Informe a primeira nota: "))
    let num2 = parseFloat(prompt("Informe a segunda nota: "))

    let media = (num1 + num2) / 2
    let spanMedia = document.getElementById("spanMedia")
    let resultMedia = document.getElementById("resultMedia")
    
    if (media >= 6) {
        spanMedia.innerHTML = "APROVADO"
        spanMedia.style.color = "blue"
    } else {
        spanMedia.innerHTML = "REPROVADO"
        spanMedia.style.color = "red"
    }
    resultMedia.innerHTML = media
})