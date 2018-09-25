// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
function adiciona(ep){

	console.log(ep);
	let title = ep.title;
	let listaTitulo = document.getElementById('titles');
	listaTitulo.innerHTML += '<li id="film" data-url-episodio="'+ep.url+'">Episodio '+ep.episode_id+': '+title+'</li>'; 
	
}

$.ajax({
  url: 'https://swapi.co/api/films/',
  dataType: 'json',
  success: function(resposta) {
    // escreve a resposta no console (para ver o que foi recebido)
    console.log(resposta);
    // faz o que quiser fazer com a resposta...
    resposta.results.forEach(adiciona);
    // ...
  }
});

function mudaIntro(e){

	$.ajax({
	  url: 'https://swapi.co/api/films/',
	  dataType: 'json',
	  success: function(resposta) {
		// escreve a resposta no console (para ver o que foi recebido)
		console.log(resposta);
		// faz o que quiser fazer com a resposta...
		resposta.results.forEach(adiciona);
		// ...
	  }
	});
}

let list = document.getElementsById('film');

for(let element of list){
	
	element.addEventListener('click',mudaIntro);
}
