// src/components/Contactos.js
import React, { useState } from 'react';
import '../style/Contactos.css'; // Asegúrate que la ruta al CSS sea correcta

const Contactos = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const contactos = [

    {
      contacto: 'CASTELLANOS POLANCO ESTHER',
      medio: 'Correo electrónico esther.castellanos@inegi.org.mx' + 'Teléfonos 4491492700, Ext:314614' + 'Dirección Edificio "Parque Héroes"; Acceso',
    },
    {
      contacto: '¿Quiénes están obligados a hacer Acta Entrega Recepción?',
      medio: 'A partir de Jefe de Departamento independientemente si manejas o no recursos.',
    },
    {
      contacto: '¿Cuál es el primer paso para realizar mi procedimiento de Acta entrega – recepción?',
      medio: 'Mandar el oficio de invitación al Titular del OIC.',
    },
    {
      contacto: '¿Quiénes pueden ser testigos?',
      medio: 'Cualquier persona servidora pública del Instituto que cuente preferentemente con firma electrónica avanzada (e.firma).',
    },
    {
      contacto: '¿Quién es responsable de hacer el Acta entrega-recepción?',
      medio: 'La persona servidora pública que deja el cargo y/o la persona que designe el superior jerárquico mediante oficio.',
    },
    {
      contacto: '¿Cómo firmo digitalmente el acta?',
      medio: 'Debes contar con la e.firma y la aplicación institucional para firmar los documentos.',
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
