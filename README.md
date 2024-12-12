# Spider-Man Multiversos

No menu principal adicionei como diferencial pessoal as seguintes alterações:
- Sublinhado nos nomes dos Aranhas, para melhor identificação da seleção. Mostrando o sublinhado de acordo com o item mostrado.
- Seleção do aranha ao passar o mouse em cima do item desejado, girando assim o carrosel mostrando o na frente o a aranha no qual havia passado o mouse.

Nas demais páginas internas, eu as retirei. Adicionando uma página gerada dinamicamente pro javascripts criando os seguintes arquivos:
- Arquivo Spiders.js - responsável pela classe Spiders com o constructor e o método render que constróui os elementos principais da tela.
- Arquivo spidersData.js - que contém os dados dos aranhas como: id, nome do ator, universo cinematográfico, filmes e etc.
- Arquivo spiderPage.js - que realiza a intereção da página, cria dinamicamente o menu lateral de acordo com a quantidade de filmes e chama o método render() para compor o conteúdo principal.
