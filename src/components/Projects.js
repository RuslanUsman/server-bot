import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

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
    <div className="projects-container">
      <h1 className="projects-title">Спомогатор</h1>
      <div className="projects-image">
        <img src={`${process.env.PUBLIC_URL}/images/baner1.jpg`} alt="About" className="about-image" />
      </div>
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





