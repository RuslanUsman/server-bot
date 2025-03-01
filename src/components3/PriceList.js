import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PriceList.css';

const talents = [
  { name: 'Ум', image: `${process.env.PUBLIC_URL}/images/umList.jpg`, info: 'для фул прокачки ума Вам потребуется 29696 торговых тикетов, цена 1 банки Микстуры ума 29 тикетов или 20 очки талантов.' },
  { name: 'Тело', image: `${process.env.PUBLIC_URL}/images/teloList.jpg`, info: 'для фул прокачки тело Вам потребуется 40474 торговых тикетов, цена 1 банки Микстуры ума 59 тикетов или 30 очки талантов.' },
  // Добавьте остальные таланты здесь
];

function PriceList() {
  const [selectedTalent, setSelectedTalent] = useState(null);

  const handleInfoClick = (talent) => {
    setSelectedTalent(talent);
  };

  const handleBackClick = () => {
    setSelectedTalent(null);
  };

  return (
    <div className="PriceList">
      <h1>Микстур</h1>
      {selectedTalent ? (
        <div className="talent-info">
          <img src={selectedTalent.image} alt={selectedTalent.name} />
          <h2>{selectedTalent.name}</h2>
          <p>{selectedTalent.info}</p>
          <button onClick={handleBackClick}>Назад</button>
        </div>
      ) : (
        <div className="talentsPriceList">
          {talents.map((talent) => (
            <div key={talent.name} className="talentPriceList">
              <img src={talent.image} alt={talent.name} />
              <h2>{talent.name}</h2>
              <button onClick={() => handleInfoClick(talent)}>Информация</button>
            </div>
          ))}
        </div>
      )}
      <Link to="/TalentMenu">
        <button className="menu-button">Меню</button>
      </Link>
    </div>
  );
}

export default PriceList;

