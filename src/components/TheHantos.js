import React from 'react';
import './TheHantos.css';

const TheHantos = () => {
  return (
    <div className="hantos-container">
      <h1 className="hantos-title">"Эпоха выживания"</h1>
      <div className="hantos-image">
        <img src={`${process.env.PUBLIC_URL}/images/baner3.webp`} alt="About" className="about-image" />
      </div>
      <h1>Социальные сети</h1>
      <h2>Наш телеграм канал</h2>
      <div className="social-media">
        <a href="https://t.me/TheHanTosChat" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram-plane"></i> "Эпоха выживания"
        </a>
      </div>
      <h2>Админка</h2>
      <h3>в телеграмме ник 中丫廾丁仈长</h3>
      <div className="social-media">
        <a href="https://web.telegram.org/a/#6008153078" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram-plane"></i> 中丫廾丁仈长
        </a>
      </div>
      <h2>Связаться c Dragon</h2>
      <h3>в телеграмме ник Dragon</h3>
      <div className="social-media">
        <a href="https://web.telegram.org/a/#5930230795" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram-plane"></i> Telegram Dragon
        </a>
      </div>
    </div>
  );
};

export default TheHantos;

