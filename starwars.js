// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
function adiciona(ep){

	let title = ep.title;
	let listaTitulo = document.getElementById('titles');
	listaTitulo.innerHTML += '<li class="film" data-url-episodio="'+ep.url+'">Episodio '+ep.episode_id+': '+title+'</li>'; 
	
}

$.ajax({
  url: 'https://swapi.co/api/films/',
  dataType: 'json',
  success: function(resposta) {
    // escreve a resposta no console (para ver o que foi recebido)
    // faz o que quiser fazer com a resposta...
    resposta.results.forEach(adiciona);
    // ...
	let list = document.getElementsByClassName('film');

	for(let element of list){
		
		element.addEventListener('click',mudaIntro);
	}
  }
});

function mudaIntro(e){

	let el = e.currentTarget.getAttribute('data-url-episodio');
	console.log(e.currentTarget.innerHTML);
	$.ajax({
	  url: el,
	  dataType: 'json',
	  success: function(resposta) {
		let intro = document.getElementsByClassName('reading-animation')[0];
		intro.innerHTML = resposta.opening_crawl;
		  
	  }
	});
}



