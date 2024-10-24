// src/components/Preguntas.js
import React, { useState } from 'react';
import '../style/Preguntas.css'; // Asegúrate que la ruta al CSS sea correcta

const Preguntas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const preguntas = [
    {
      pregunta: '¿Qué es el Acta E-R?',
      respuesta: 'Es el documento oficial que registra la entrega y recepción de recursos en la administración pública.',
    },
    {
      pregunta: '¿Cómo firmo digitalmente el acta?',
      respuesta: 'Debes contar con la e.firma y la aplicación institucional para firmar los documentos.',
    },
    {
      pregunta: '¿Quiénes deben realizar el proceso de entrega-recepción?',
      respuesta: 'Todos los servidores públicos que concluyen su empleo, cargo o comisión.',
    },
  ];

  const togglePregunta = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Preguntas Frecuentes</h1>
      {preguntas.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => togglePregunta(index)}>
            {item.pregunta}
          </button>
          {index === activeIndex && <p className="faq-answer">{item.respuesta}</p>}
        </div>
      ))}
    </div>
  );
};

export default Preguntas;
