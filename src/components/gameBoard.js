import React from 'react';
import Board from './board';

const GameBoard = () => {
  const movieList = ["A volta dos que não foram", "Três carecas brigando pelo pente", "Ahsashdia, que? Prruuuu", "Lista Negra", "Chapou", "O Poderoso Chefão", "Titanic", "Matrix", "Cidade de Deus", "O Senhor dos Anéis", "O Rei Leão", "Forrest Gump", "Pulp Fiction", "Interestelar", "A Origem", "Star Wars: Uma Nova Esperança", "Pantera Negra", "O Silêncio dos Inocentes", "Psicose", "E o Vento Levou", "Casablanca", "Jurassic Park", "O Resgate do Soldado Ryan", "Vingadores: Ultimato", "Gladiador", "O Labirinto do Fauno", "O Show de Truman", "Amélie Poulain", "Clube da Luta", "Bastardos Inglórios", "Coco", "De Volta para o Futuro", "Harry Potter e a Pedra Filosofal", "Os Incríveis", "Homem-Aranha no Aranhaverso", "Mogli: O Menino Lobo", "O Rei Leão", "Cinderela", "A Bela e a Fera", "Aladdin", "A Pequena Sereia", "Toy Story", "Shrek", "Frozen", "Moana", "Procurando Nemo", "A Origem dos Guardiões", "Kung Fu Panda", "Como Treinar o Seu Dragão", "Os Croods", "Ratatouille", "Up: Altas Aventuras", "Wall-E", "Zootopia", "Cavalo de Guerra", "O Grande Gatsby", "Interestelar", "Gravidade", "A Chegada", "Blade Runner 2049", "Elysium", "Vingadores: Guerra Infinita", "Doutor Estranho", "Thor: Ragnarok", "Guardiões da Galáxia", "Homem-Formiga", "Capitã Marvel", "Aquaman", "Mulher-Maravilha", "Liga da Justiça", "O Pianista", "O Iluminado", "O Sexto Sentido", "Cisne Negro", "Glória Feita de Sangue", "Apocalypse Now", "O Franco Atirador", "Scarface", "Taxi Driver", "Onde os Fracos Não Têm Vez", "No Country for Old Men", "O Homem Elefante", "O Artista", "Boyhood: Da Infância à Juventude", "Birdman", "Amour", "A Árvore da Vida", "A Forma da Água", "A Lista de Schindler", "A Origem", "Amadeus", "A Origem dos Guardiões", "Blade Runner", "Brilho Eterno de uma Mente sem Lembranças", "Cantando na Chuva", "Cidade dos Sonhos", "Crepúsculo dos Deuses", "Drive", "E o Vento Levou", "E.T. - O Extraterrestre", "Esqueceram de Mim", "Matrix", "Gravidade", "La La Land: Cantando Estações", "Moonlight: Sob a Luz do Luar", "Na Natureza Selvagem", "O Grande Hotel Budapeste", "O Resgate do Soldado Ryan", "O Show de Truman", "O Senhor dos Anéis: A Sociedade do Anel", "O Silêncio dos Inocentes", "O Rei Leão", "Pulp Fiction", "Titanic", "Tubarão", "Um Corpo que Cai", "Uma Linda Mulher", "Interestelar", "A Origem", "A Chegada", "Gravidade", "Interestelar", "Interestelar", "Interestelar", "Interestelar", "Interestelar", "Interestelar", "Interestelar", "Interestelar", "Interestelar", "Interestelar"
];

  return (
    <div className="game-board">
      <Board itemList={movieList} title="Próximo Filme" />
    </div>
  );
};

export default GameBoard;
