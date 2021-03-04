import React from 'react';

import Header from '../../components/header/Header';
import Link from '../../components/link/Link';

import './FirstSection.css';
import logoReact from '../../assets/img/react.svg';
import logoJs from '../../assets/img/js.svg';
import logoType from '../../assets/img/type.svg';

function FirstSection() {
  return (
    <section className="container">
      <Header />
      <div className="styles-main-page">
        <div className="text-main-page">
          <h1>DESAFIO TÉCNICO DA FRAMEWORK</h1>
          <h2>
            Meu nome é Darhos Gabriel tenho 18 anos, e esse é meu projeto para o
            desafio técnico da framework.
          </h2>
          <p>
            Eu sempre amei mexer com qualquer coisa que estava conectado à
            tomada.
          </p>
          <p>
            E há pouco tempo comecei a gostar de desenvimento web, gostei
            bastante do Front-end, mas não me sinto confortável no meu estado
            atual de conhecimento. Me sinto estagnado do jeito que estou
            atualmente, por isso busco um estágio para melhorar como pessoa e
            como programador.
          </p>
        </div>
        <div className="technologies">
          <div className="text-tec">
            <h1>Tecnologias usadas para desenvolver essa aplicação</h1>
          </div>
          <div className="cards">
            <div className="other-cards">
              <img src={logoReact} alt="React" className="imags" />
              <p>React</p>
              <p></p>
            </div>
            <div className="other-cards">
              <img src={logoType} alt="Type" className="imags type" />
              <p>TypeScript</p>
            </div>
            <div className="other-cards">
              <img src={logoJs} alt="JS" className="imags" />
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div className="resolve-padding">
          <Link />
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
