// src/components/Contactos.js
import React, { useState } from 'react';
import '../style/Contactos.css'; // Asegúrate que la ruta al CSS sea correcta

const Contactos = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const contactos = [

    {
      contacto: 'RAYAS RIVERA VIANEY ATZIRI',
      medio: 'Correo electrónico vianey.rayas@inegi.org.mx' + 'Teléfonos 4491492700, Ext:314614',
    },
    {
      contacto: 'VELASCO PADILLA FRANCISCO ARMANDO',
      medio: 'Correo electrónico francisco.velasco@inegi.org.mx' + 'Teléfonos 4491492700, Ext:314623',
    },
    {
      contacto: 'MEDEL GONZALEZ NORA EDITH',
      medio: 'Correo electrónico nora.medel@inegi.org.mx' + 'Teléfonos 4491492700, Ext:314603',
    },
    {
      contacto: 'MARTINEZ LOPEZ PAULINA ANABEL',
      medio: 'Correo electrónico paulina.martinez@inegi.org.mx' + 'Teléfonos 4491492700, Ext:314675',
    },
    {
      contacto: 'MORENO MARBELLA KIMBERLY',
      medio: 'Correo electrónico marbella.moreno@inegi.org.mx',
    },
    
  ];

  const togglePregunta = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h1> Medios de contacto</h1>
      {contactos.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-contacto" onClick={() => togglePregunta(index)}>
            {item.contacto}
          </button>
          {index === activeIndex && <p className="faq-medio">{item.medio}</p>}
        </div>
      ))}
    </div>
  );
};

export default Contactos;
