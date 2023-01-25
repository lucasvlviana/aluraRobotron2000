const subtrair = document.querySelectorAll("#subtrair");
const somar = document.querySelectorAll("#somar");
const branco = document.querySelectorAll("#branco");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
    elemento.addEventListener("click",(evento) => {
        manipulaDados(evento.target.textContent);
    })
})

function manipulaDados(operacao){
    if (operacao == "-"){
        branco.value = parserInt(branco.value) - 1;
    } else {
        branco.value = parserInt(branco.value) + 1;
    }
}