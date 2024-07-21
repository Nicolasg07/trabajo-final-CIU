import React from 'react';

// Muestra a los integrantes del grupo en el pie de página
const Footer = () => {
  return (
    <footer>
      <ul>
        <li id='lista-footer'>Integrantes del grupo:</li>
      </ul>
      <ul id='lista-footer'>
        <li id='lista-footer'>Marcos Cravero</li>
        <li id='lista-footer'>Nicolás García</li>
      </ul>
    </footer>
  );
};

export default Footer;
