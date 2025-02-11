import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Контакты</h1>
      <div className="contact-image">
      <img src={`${process.env.PUBLIC_URL}/images/baner5.webp`} alt="About" className="about-image" />
      </div>
      <p>Свяжитесь с командой Last Island of Survival.</p>
      <h2>Социальные сети</h2>
      <div className="social-media">
        <a href="https://www.facebook.com/@LastDayRules/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="https://x.com/LastIslandOS?mx=2" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter X
        </a>
        <a href="https://www.bing.com/ck/a?!&&p=bf9b14ee9b0ccac937a6b629553d3349a7be8d5da0b7d1b644f190bd8cda86f1JmltdHM9MTczODgwMDAwMA&ptn=3&ver=2&hsh=4&fclid=141539fa-2afc-651b-09ed-2c992bd464a2&psq=%d1%81%d0%be%d1%86%d0%b8%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9+%d1%81%d0%b5%d1%82%d1%8c+Instogram+Last+island+of+survival&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9sYXN0aXNsYW5kX29mZmljaWFsLw&ntb=1" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.youtube.com/channel/UClOgNqLDU7ZikeyZwWGSF-w" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i> YouTube
        </a>
        <a href="https://vk.com/lastislandofsurvival" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-vk"></i> VK
        </a>
        <a href="https://t.me/Last_Island_ofSurvival" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-telegram-plane"></i> Telegram
        </a>
        <a href="https://discord.com/invite/liosofficial" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-discord"></i> Discord
        </a>
      </div>
      <h2>Электронная почта</h2>
      <div className="email">
        <a href="https://lastdayrulessurvival@gmail.com">
          <i className="fas fa-envelope"></i> example@gmail.com
        </a>
      </div>
      <h2>Официальный донат</h2>
      <div className="donate">
        <a href="https://store.herogame.com/lios" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-donate"></i> Официальный донат
        </a>
      </div>
      <h2>Официальный сайт</h2>
      <div className="official-website">
        <a href="https://lios.herogame.com/" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-globe"></i> Официальный сайт
        </a>
      </div>
    </div>
  );
};

export default Contact;


