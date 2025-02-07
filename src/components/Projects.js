// src/components/Projects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const handleRaidCalculator = () => {
    navigate('/main-menu');
  };

  const handleExplosionCalculator = () => {
    navigate('/main-menu-explosions');
  };

  const handleTalentAwakening = () => {
    navigate('/TalentMenu');
  };

  return (
    <div>
      <h1>Наши проекты</h1>
      <p>Ознакомьтесь с различными приложениями, связанными с Последним островом выживания.</p>
      <h2>Калькуляторы</h2>
      <div className="button-container">
        <button onClick={handleRaidCalculator}>Калькулятор рейда</button>
        <button onClick={handleExplosionCalculator}>Калькулятор взрыва</button>
      </div>
      <h2>Таланты</h2>
      <div className="button-container">
        <button onClick={handleTalentAwakening}>Пробуждения талантов</button>
        <button>Все таланты</button>
      </div>
    </div>
  );
};

export default Projects;




