import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">О нас</h1>
      
      <img src={`${process.env.PUBLIC_URL}/images/baner1.jpg`} alt="About" className="about-image" />
      
      <div className="about-content">
        <h2>"Эпоха Выживания"</h2>
        <p>здесь мы будем опубликовать все полезные новости о нашем проекте</p>
        
        <h2>О нашем проекте</h2>
        <p>наш проект только рождается</p>
        <p>но со временем мы в этом разделе будем опубликовать наших побидителей.</p>
      </div>
    </div>
  );
};

export default About;

