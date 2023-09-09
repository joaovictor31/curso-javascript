//01 - Retorne todas as imagens do site.
const imagens = document.querySelectorAll('img');
console.log(imagens);

//02- Retorne no console as imagens que começarem com a palavra imagem.
const soAnimais = document.querySelectorAll('img[src^="img/slide"]')
console.log(soAnimais);

//03 Selecionar todos os links internos onde o href começa com # 
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

//04 Selecionar o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais);