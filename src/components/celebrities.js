import React from 'react';
import Board from './board';

    const Celebrities = () => {
        const celebritiesList = ["Neymar", "Dani Alves", "Rogério Ceni"];
  return (
    <div className="game-board">
      <Board itemList={celebritiesList} title="Próxima Celebridade" />
    </div>
  );
};

export default Celebrities;
