import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import GameInfo from './components/GameInfo';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Thehantos from './components/TheHantos'; // Импортируем компонент Projects

// Импортируем компоненты из папки components1
import MainMenuExplosions from './components1/MainMenu';
import ResultsExplosion from './components1/Results';

// Импортируем компоненты из папки components2
import MainMenu from './components2/MainMenu';
import MaterialSelection from './components2/MaterialSelection';
import ConstructionSelection from './components2/ConstructionSelection';
import Result from './components2/Result';
import DragonWebApp from './components2/DragonWebApp';

// Импортируем компоненты из папки components3
import MainMenuTalant from './components3/MainMenu';
import Fight from './components3/Fight';
import Instinct from './components3/Instinct';
import Intellect from './components3/Intellect';
import PriceList from './components3/PriceList';
import SearchResults from './components3/SearchResults';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Импортируем стили Font Awesome

const App = () => {
  return (
    <Router>
      <div>
        <header className="header" style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '20px 0', textAlign: 'center', position: 'relative' }}>
          
          <nav>
            <ul style={{ listStyle: 'none', padding: '0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <li style={{ margin: '15px 20px' }}><Link to="/" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#444', padding: '8px 16px', borderRadius: '5px', transition: 'background-color 0.3s' }}><i className="fas fa-home"></i> Главная</Link></li>
              <li style={{ margin: '15px 20px' }}><Link to="/about" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#444', padding: '8px 16px', borderRadius: '5px', transition: 'background-color 0.3s' }}><i className="fas fa-newspaper"></i> Новости</Link></li>
              <li style={{ margin: '15px 20px' }}><Link to="/game-info" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#444', padding: '8px 16px', borderRadius: '5px', transition: 'background-color 0.3s' }}><i className="fas fa-info-circle"></i> Информация</Link></li>
              <li style={{ margin: '15px 20px' }}><Link to="/projects" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#444', padding: '8px 16px', borderRadius: '5px', transition: 'background-color 0.3s' }}><i className="fas fa-project-diagram"></i> Спомогатор</Link></li>
              <li style={{ margin: '15px 20px' }}><Link to="/contact" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#444', padding: '8px 16px', borderRadius: '5px', transition: 'background-color 0.3s' }}><i className="fas fa-envelope"></i> Контакты</Link></li>
              <li style={{ margin: '15px 20px' }}><Link to="/thehantos" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#444', padding: '8px 16px', borderRadius: '5px', transition: 'background-color 0.3s' }}><i className="fas fa-user"></i> Наши контакты</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            {/* Добавляем маршруты для стартовой страницы */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/game-info" element={<GameInfo />} />
            <Route path="/projects" element={<Projects />} /> {/* Добавляем маршрут для страницы Projects */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/thehantos" element={<Thehantos />} />

            {/* Добавляем маршруты для нового приложения Калькулятор рейда */}
            <Route path="/dragon-web-app" element={<DragonWebApp />} />
            <Route path="/main-menu" element={<MainMenu />} />
            <Route path="/materials" element={<MaterialSelection />} />
            <Route path="/construction" element={<ConstructionSelection />} />
            <Route path="/result" element={<Result />} />

            {/* Добавляем маршруты для нового приложения Калькулятор взрыва */}
            <Route path="/main-menu-explosions" element={<MainMenuExplosions />} />
            <Route path="/results" element={<ResultsExplosion />} />

            {/* Добавляем маршруты для нового приложения Таланты */}
            <Route path="/TalentMenu" element={<MainMenuTalant />} />
            <Route path="/fight" element={<Fight />} />
            <Route path="/instinct" element={<Instinct />} />
            <Route path="/intellect" element={<Intellect />} />
            <Route path="/pricelist" element={<PriceList />} />
            <Route path="/search-results" element={<SearchResults />} />
          </Routes>
        </main>
        <footer>
          <p>© 2025 "Эпоха Выживания". Все права защищены.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;






