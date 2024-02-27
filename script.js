//desenvolvido por  https://github.com/LoRodrig
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
        iconeTempo.src= "./assets/nublado.png";
    } else if(dados.weather[0].main == "Clear"){
        iconeTempo.src = "./assets/sol.png";
    }
    else if(dados.weather[0].main == "Rain"){
        iconeTempo.src = "./assets/trovoada.png";
    }
    else if(dados.weather[0].main == "Snow"){
        iconeTempo.src = "./assets/neve.png";
    }
    else{
        iconeTempo.src = "./assets/nublado.png";

    }

    
}

function clicarNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    //quando clica no botao de buscar, guarda a informação que esta no input como valor da varivel cidade.
    buscarCidade(cidade);
}




    
