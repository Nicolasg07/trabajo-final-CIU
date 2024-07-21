import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [items, setItems] = useState([]);
// Muestra las imágenes del api, con sus nombres y las descripciones de cada plato
  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Mapeo de títulos a URLs de YouTube
  const youtubeUrls = {
    'Black Coffee': 'https://www.youtube.com/watch?v=SqyjR5pC27U',
    'Latte': 'https://www.youtube.com/watch?v=7eZ-URGAC4s',
    'Caramel Latte': 'https://www.youtube.com/watch?v=Og2J7_fgD-U',
    'Cappuccino': 'https://www.youtube.com/watch?v=XGX3ncQVx9E',
    'Americano': 'https://www.youtube.com/watch?v=VipB6Knqwu4',
    'Espresso': 'https://www.youtube.com/watch?v=5noBWQ0NplE',
    'Macchiato': 'https://www.youtube.com/watch?v=vELC8Gv0sWo',
    'Mocha': 'https://www.youtube.com/watch?v=DiIC4Hw57Zg',
    'Hot Chocolate': 'https://www.youtube.com/watch?v=LVibZWqY-2I',
    'Chai Latte': 'https://www.youtube.com/watch?v=3HgSpPkrRIY',
    'Matcha Latte': 'https://www.youtube.com/watch?v=K8iTxkDmztM',
    'Seasonal Brew': 'https://www.youtube.com/watch?v=2QVvPWkN1og&t=177s',
    'Svart Te': 'https://www.youtube.com/watch?v=sVlEkm6tm2s',
    'Islatte': 'https://www.youtube.com/watch?v=ek7_vdyUJzE',
    'Islatte Mocha': 'https://www.youtube.com/watch?v=UQ5Q8F7CPR0',
    'Frapino Caramel': 'https://www.youtube.com/watch?v=GW-jit96XcI',
    'Frapino Mocka': 'https://www.youtube.com/watch?v=mV1daheC8X4',
    'Apelsinjuice': 'https://www.youtube.com/watch?v=OlJFZRk1pl8',
    'Frozen Lemonade': 'https://www.youtube.com/watch?v=PJCybQhfHrE',
    'Lemonad': 'https://www.youtube.com/watch?v=8Rd9HV8iweU',
  };

  return (
    <section id="gallery">
      <div className="gallery-container">
        {items.map(item => (
          <div key={item.id} className="gallery-item">
            <a
              href={youtubeUrls[item.title]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.image} alt={item.title} />
            </a>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
