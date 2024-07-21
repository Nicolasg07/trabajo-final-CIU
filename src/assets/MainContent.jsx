import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import Gallery from './Gallery';
import imagen1 from './images/cafeteria.jpg';
import imagen2 from './images/cafeInterior.jpg';
import imagen3 from './images/taza cafe.jpg';

// Contiene los datos principales del sitio
const MainContent = () => {
  const [menuItems, setMenuItems] = useState([]); // Estado para almacenar los ítems del menú
  const [selectedItems, setSelectedItems] = useState({}); // Estado para almacenar los ítems seleccionados y sus cantidades
  const [totalPrice, setTotalPrice] = useState(0); // Estado para almacenar el precio total

  // useEffect para inicializar el menú con algunos ítems al montar el componente
  useEffect(() => {
    const items = [
      { id: 1, name: 'Black Coffe', description: 'Un Black Coffe son granos de café tostados sometidos en agua caliente', price: 2.50 },
      { id: 2, name: 'Latte', description: 'Un Latte es uno o dos shots de espresso con leche al vapor y una fina capa de leche espumosa encima', price: 3.50 },
      { id: 3, name: 'Caramel Latte', description: 'Un Caramel Latte es compuesta por 2/3 partes de leche y 1/3 de café, aromatizado con el sabroso caramelo.', price: 5.50 },
      { id: 4, name: 'Cappuccino', description: 'Un Cappuccino esta preparada con café expreso y leche montada con vapor para darle cremosidad.', price: 4.50 },
      { id: 5, name: 'Americano', description: 'Un Americano consiste en partes exactamente iguales de espresso y agua.', price: 3.50 },
      { id: 6, name: 'Espresso', description: 'Un Espresso es café negro fuerte que se forma cuando el agua caliente pasa a mucha presión través de los granos de café molidos.', price: 2.50 },
      { id: 7, name: 'Macchiato', description: 'Un Macchiato, la leche al vapor está "manchando" el shot de espresso.', price: 3.50 },
      { id: 8, name: 'Mocha', description: 'Un Mocha es una variante del latte, pues suele llevar 1/3 de espresso y 2/3 de leche vaporizada, con la diferencia principal de que se le añade un sabor a chocolate.', price: 3.50 },
      { id: 9, name: 'Hot Chocolate', description: 'Un Hot Chocolate es una bebida tradicional a base de cacao con notas de chocolate y una deliciosa sensación.', price: 4.50 },
      { id: 10, name: 'Chai Latte', description: 'Un Chai Latte es mezcla específica de té negro y especias, con agua caliente y leche.', price: 5.50 },
      { id: 11, name: 'Matcha Latte', description: 'Un Matcha Latte consiste en polvo de matcha (hojas finamente molidas de algunas plantas de té verde), mezclado con agua y leche.', price: 5.50 },
      { id: 12, name: 'Seasonal Brew', description: 'Un Seasonal Brew es café de diferentes sabores como caramelo, fruta y chocolate.', price: 5.50 },
      { id: 13, name: 'Svart Te', description: 'Un Svart Te es un té que se encuentra oxidado en mayor grado que las variedades de té verde, té oolong y té blanco.', price: 4.50 },
      { id: 14, name: 'Islatte', description: 'Un Islatte es un Latte frio con hielos.', price: 4.50 },
      { id: 15, name: 'Islatte Mocha', description: 'Un Islatte Mocha es un Mocha frio con hielos.', price: 4.50 },
      { id: 16, name: 'Frapino Caramel', description: 'Un Frapino Caramel lleva el rico sabor del caramelo y un toque de café, mezclado con hielo y cubierto con crema batida y un chorrito de caramelo.', price: 3.50 },
      { id: 17, name: 'Frapino Mocka', description: 'Un Frapino Mocka es una deliciosa mezcla que combina café, leche y chocolate, batido con hielo, coronado con crema batida y salsa de mocha.', price: 3.50 },
      { id: 18, name: 'Apelsinjuice', description: 'Un Apelsinjuice es jugo de naranja recien exprimido.', price: 2.50 },
      { id: 19, name: 'Frozen Lemonade', description: 'Un Frozen Lemonade esta preparado de rodajas de limón licuadas, con azúcar, agua y jugo de limón con hielo.', price: 2.50 },
      { id: 20, name: 'Lemonad', description: 'Un Lemonad es limón exprimido con azucar y agua.', price: 2.50 },
    ];
    setMenuItems(items);
  }, []);

  // Función para manejar la selección de ítems del menú y actualizar el estado
  const handleSelectItem = (id, quantity) => {
    setSelectedItems({
      ...selectedItems,
      [id]: quantity
    });
  };

  // Función para calcular el precio total de los ítems seleccionados
  const calculateTotal = () => {
    const total = Object.entries(selectedItems).reduce((acc, [id, quantity]) => {
      const item = menuItems.find(item => item.id === parseInt(id));
      return acc + (item.price * quantity);
    }, 0);
    setTotalPrice(total);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Cada una de las secciones de la página
  return (
    <main>
      <section id="nosotros">
        <h2>Nosotros</h2>
        <p>En nuestra <b>cafetería</b>, nos especializamos en ofrecer una experiencia única para todos los amantes del café. Situada en el corazón de la ciudad, nuestro ambiente acogedor y nuestra atención personalizada te harán sentir como en casa.</p>
        <div class="image-container">
          <img src={imagen1} alt="Interior de la cafetería"></img>
          <img src={imagen2} alt="Área de preparación de café"></img>
          <img src={imagen3} alt="Detalle de una taza de café"></img>
        </div>
        <p>Ofrecemos una amplia variedad de <b>cafés gourmet</b>, desde <b>espressos intensos</b> hasta <b>lattes cremosos</b>, preparados por nuestros baristas expertos con gran cuidado y pasión por el arte del café. Además, nuestro <a href='#menu'><b>menú</b></a> incluye deliciosos postres y opciones saludables para acompañar tu bebida favorita.</p>
        <p> <a href='#contacto'><b>Visítanos</b></a> y disfruta de un momento de tranquilidad y sabor inigualable en nuestra cafetería. Estamos abiertos todos los días de la semana y esperamos verte pronto.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0jIeCAOkgcQ?si=TC7dpYZu5YWIUvno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>

      <section id="menu">
        <h2>Menú</h2>
        <div className='menu-items'>
          {menuItems.map(item => (
            <MenuItem key={item.id} item={item} onSelect={handleSelectItem} />
          ))}
        </div>
        <div className='center-container'>
          <button id='boton' onClick={calculateTotal}> Calcular Precio Total </button>
        </div>
        <p id='precio-total'>Precio Total: ${totalPrice.toFixed(2)}</p>
      </section>

      <section id="galeria">
        <h2>Galería</h2>
        <Gallery />
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <p><b>Dirección:</b> Avenida Rivadavia 2100 (esq, Rincón, 1033 Buenos Aires)</p>
        <p><b>Teléfono:</b> 011 4952-2320</p>
        <p><b>Horario de apertura:</b> Lunes a Viernes de 9hs. a 19hs.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.9480041057162!2d-58.39708843001953!3d-34.60942041134662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9c865b35301%3A0xafded52fd6f86945!2sCaf%C3%A9%20de%20los%20Angelitos!5e0!3m2!1ses!2sar!4v1721094939413!5m2!1ses!2sar"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </section>

      <img
        src="src/assets/images/arrow-up-circle.svg"
        alt="Scroll to Top"
        className="scroll-to-top"
        onClick={scrollToTop}
      />
    </main>
  );
};

export default MainContent;
