import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">О нас</h1>
      
      <img src={`${process.env.PUBLIC_URL}/images/baner1.jpg`} alt="About" className="about-image" />
      
      <div className="about-content">
        <p>Добро пожаловать на Последний Остров Выживания! Мы рады, что вы здесь. Наша цель - помочь вам исследовать игру и выжить на последнем острове.</p>
        <p>Мы предлагаем множество ресурсов и информации, чтобы сделать ваше пребывание на острове максимально комфортным и увлекательным. Исследуйте, стройте и выживайте вместе с нами!</p>
        <h2>Cкоро запустим свой проект!</h2>
        <p>На этом месте вы можете найти много информации о последнем острове Выживания, а также о наших участниках и проектах.</p>
        <p>Сервер исключительно для соло-дуо игроков.</p>
        <p>Без каких либо талантов, мехов, РСЗО-Танков и летающих питомцев. Сервер будет х-5 с призавым фондом 10$</p>
        <p>Если вы хотите помочь нам сделать сервер более удобным и комфортным для игроков, пожалуйста, свяжитесь с нами.</p>
        <p>Ник в телеграмме Dragon</p>
        <p>а также группа в телеграмме TheHantos, группу вы можете найти в разделе "TheHanTos"</p>
        <p>Пожалуйста, не забудьте следить за новостями и рассылать нам свои предложения и пожелания.</p>
        <p>Мы также принимаем советы по улучшению сервера.</p>
        <p>С уважением, ваш покорный друг Dragon!</p>
      </div>
    </div>
  );
};

export default About;

