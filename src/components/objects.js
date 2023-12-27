import React from 'react';
import Board from './board';

    const Objects = () => {
        const objectsList = ["Caneta", "Telefone", "Chave", "Computador", "Cadeira", "Óculos", "Garrafa", "Lápis", "Relógio", "Bolsa", "Copo", "Mouse", "Teclado", "Carro", "Mesa", "Cachorro", "Gato", "Livro", "Controle Remoto", "Abajur", "Ventilador", "Sapato", "Camiseta", "Celular", "Headphone", "Xícara", "Prato", "Escova de Dentes", "Shampoo", "Guitarra", "Violino", "Piano", "Martelo", "Serra", "Martelo", "Alicate", "Martelo", "Serrote", "Tesoura", "Ferro de Passar", "Laptop", "Mochila", "Carteira", "Passaporte", "Guarda-chuva", "Cinto", "Boné", "Chapéu", "Máquina Fotográfica", "Bola", "Raquete de Tênis", "Skate", "Patins", "Fone de Ouvido", "Binóculo", "Câmera de Vídeo", "Notebook", "Impressora", "Scanner", "Quadro", "Tapete", "Luminária", "Vaso de Flores", "Relógio de Parede", "Espelho", "Almofada", "Travesseiro", "Edredom", "Mala", "Geladeira", "Fogão", "Micro-ondas", "Liquidificador", "Aspirador de Pó", "Máquina de Lavar Roupa", "Panela", "Talheres", "Prancha de Surf", "Bicicleta", "Câmera Fotográfica", "Binóculos", "Escova de Cabelo", "Secador de Cabelo", "Máquina de Café", "Xampu", "Condicionador", "Creme Dental", "Toalha", "Lençol", "Cobertor", "Almofada", "Guarda-chuva", "Sunglasses", "Lenço", "Relógio de Pulso", "Bracelete", "Anel", "Colar", "Brinco", "Mala", "Porta-retrato", "Fita Adesiva", "Caixa de Ferramentas", "Escada", "Lanterna"
    ]; 
          
  return (
    <div className="game-board">
    <Board itemList={objectsList} title="Próximo Objeto" />
  </div>
  );
};

export default Objects;
