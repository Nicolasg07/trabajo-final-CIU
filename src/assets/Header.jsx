import React from 'react';

// Muestra el nombre de la cafetería y el menú de navegación
const Header = () => {
  return (
    <header>
      <h1>Cafetería: Café de los Angelitos</h1>
      <nav>
        <ul>
          <li id='li-header'><a href="#nosotros">Nosotros</a></li>
          <li id='li-header'><a href="#menu">Menú</a></li>
          <li id='li-header'><a href="#galeria">Galería</a></li>
          <li id='li-header'><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

