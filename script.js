const botao = document.querySelector('button');

const imagem_1 = document.querySelector('#img_1');
const nomeDoPersonagem_1 = document.querySelector('#nome_1');
const especie_1 = document.querySelector('#especie_1');
const condicao_1 = document.querySelector('#status_1');

const imagem_2 = document.querySelector('#img_2');
const nomeDoPersonagem_2 = document.querySelector('#nome_2');
const especie_2 = document.querySelector('#especie_2');
const condicao_2= document.querySelector('#status_2');

const imagem_3 = document.querySelector('#img_3');
const nomeDoPersonagem_3 = document.querySelector('#nome_3');
const especie_3 = document.querySelector('#especie_3');
const condicao_3= document.querySelector('#status_3');


traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}


pegarPersonagens = () => {
    let numeroAleatorio_1 = gerarValorAletorio();
    let numeroAleatorio_2 = gerarValorAletorio();
    let numeroAleatorio_3 = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio_1},${numeroAleatorio_2},${numeroAleatorio_3}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem_1.src = data[0].image;
        imagem_1.alt = data[0].name;
        nomeDoPersonagem_1.innerHTML = data[0].name;
        especie_1.innerHTML = data[0].species;
        condicao_1.innerHTML = traduzirCondicao(data[0]);

        imagem_2.src = data[1].image;
        imagem_2.alt = data[1].name;
        nomeDoPersonagem_2.innerHTML = data[1].name;
        especie_2.innerHTML = data[1].species;
        condicao_2.innerHTML = traduzirCondicao(data[1]);

        imagem_3.src = data[2].image;
        imagem_3.alt = data[2].name;
        nomeDoPersonagem_3.innerHTML = data[2].name;
        especie_3.innerHTML = data[2].species;
        condicao_3.innerHTML = traduzirCondicao(data[2]);
    });
}

botao.onclick = pegarPersonagens;