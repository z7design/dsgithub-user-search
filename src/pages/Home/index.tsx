import React from 'react';
import Button from '../../core/Button';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
<div className="home-container">
    <h1  className="title-home">
        Desafio do Capítulo 3,<br /> Bootcamp DevSuperior
    </h1>
    <p className="description-home">
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br />
        Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br />
        Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <span className="email">antforfigma@gmail.com</span>
    </p>

  <Link to="/search">
    <Button text="Começar"/>
  </Link>

</div>
)
export default Home;
