document.getElementById("botaoLista").addEventListener("click", () => {

    let li = document.createElement("li") // criação de um elemento (tag) <li></li>
    let texto = document.getElementById("id_nome_lista").value

    li.innerHTML = texto // inserção do texto dentro do elemento li - <li>"texto"</li>

    let cor = document.querySelector('input[name="cor"]:checked').value 

    li.style.color = cor // adicionar a cor ao estilo do texto do elemento li (value teve que ser digitado em inglês)

    let ul = document.getElementById("lista")

    ul.appendChild(li) // adicionar um elemento filho ao elemento ul

})