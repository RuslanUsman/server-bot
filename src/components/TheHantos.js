// src/components2/TheHantos.js
import React from 'react';

const TheHantos = () => {
  return (
    <div>
      <h1>TheHantos</h1>
      <p>Связаться с TheHantos!</p>
      <h2>Социальные сети</h2>
      <div className="social-media">
        <a href="https://www.youtube.com/channel/UCDVX4v1boSX8jXowOKjmY7A?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i> YouTube Канал
        </a>
        <a href="https://vk.com/club163175940" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-vk"></i> VK Группа
        </a>
        <a href="https://t.me/TheHanTosChat" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram-plane"></i> Telegram Группа
        </a>
        <a href="https://discord.com/channels/471748279923638272/881426930568675338" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-discord"></i> Discord Канал
        </a>
      </div>
      <h2>Связаться самной</h2>
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
