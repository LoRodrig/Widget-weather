const key = "0c990dc0fd93306b893e64a390885d01";


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${cidade}&appid= ${key}`).then(resposta => resposta.json());

}

function clicarNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
}