import React, { useState } from 'react';

const Board = ({ itemList, title }) => {
  const getRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * itemList.length);
    return itemList[randomIndex];
  };

  const [item, setItem] = useState(getRandomItem);

  const handleNextItem = () => {
    const nextItem = getRandomItem();
    setItem(nextItem);
  };

  return (
    <div className="lousa">
      <h2 className="text">{item}</h2>
      <div className="proximo-filme">
        <p>{title}</p>
        <button onClick={handleNextItem}>&rarr;</button>
      </div>
    </div>
  );
};

export default Board;
