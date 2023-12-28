const apiKey = "0c990dc0fd93306b893e64a390885d01";   //chave da api openweather               
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; //url


async function buscarCidade(cidade) {


    const resposta = await fetch(apiUrl + cidade + `&appid=${apiKey}`);
    var  dados = await resposta.json(); //aguardar a resposta dados e pasar em json

    const  iconeTempo = document.querySelector(".iconeTempo");

    console.log(dados);
    document.querySelector(".cidade").innerHTML= dados.name;//nome da cidade
    document.querySelector(".temperatura").innerHTML= Math.round( dados.main.temp) + "°c";//temperatura
    document.querySelector(".umidade").innerHTML= dados.main.humidity + "%";//umidade
    document.querySelector(".velocidade-vento").innerHTML= dados.main.humidity + "km/h";//velocidade dos ventos

    if(dados.weather[0].main == "Clouds"){ //recebe o retorno do tempo da api e altera o icone conforme o retorno
        iconeTempo.src = "https://cdn-icons-png.flaticon.com/128/4248/4248789.png";
    } else if(dados.weather[0].main == "Clear"){
        iconeTempo.src = "https://cdn-icons-png.flaticon.com/128/5903/5903519.png";
    }
    else if(dados.weather[0].main == "Rain"){
        iconeTempo.src = "https://cdn-icons-png.flaticon.com/128/5903/5903459.png";
    }
    else if(dados.weather[0].main == "Snow"){
        iconeTempo.src = "https://cdn-icons-png.flaticon.com/128/2337/2337351.png";
    }
    else{
        iconeTempo.src = "https://cdn-icons-png.flaticon.com/128/5903/5903519.png";

    }

}

function clicarNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    //quando clica no botao de buscar, guarda a informação que esta no input como valor da varivel cidade.
    buscarCidade(cidade);
}




    
