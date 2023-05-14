/**/
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

const modoEscuroAtivo = body.classList.contains("modo-escuro");
botaoAlterarTema.addEventListener("click", () => {
    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro");
    } else {
        body.classList.add("modo-escuro");

        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");

    });



