import React from 'react';
import Board from './board';

const Known = () => {
  const knownList = ["Junior", "Rebeca", "Mariana", "Jardel", "Sara", "Yago", "Vilma", "Mayara", "Fernando", "Nick", "Jully", "Kiara", "Moana"]; // Adicione seus conhecidos aqui

  return (
    <div className="game-board">
      <Board itemList={knownList} title="Próximo Conhecido" />
    </div>
  );
};

export default Known;

