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
      pregunta: '¿Quiénes están obligados a hacer Acta Entrega Recepción?',
      respuesta: 'A partir de Jefe de Departamento independientemente si manejas o no recursos.',
    },
    {
      pregunta: '¿Cuál es el primer paso para realizar mi procedimiento de Acta entrega – recepción?',
      respuesta: 'Mandar el oficio de invitación al Titular del OIC.',
    },
    {
      pregunta: '¿Quiénes pueden ser testigos?',
      respuesta: 'Cualquier persona servidora pública del Instituto que cuente preferentemente con firma electrónica avanzada (e.firma).',
    },
    {
      pregunta: '¿Quién es responsable de hacer el Acta entrega-recepción?',
      respuesta: 'La persona servidora pública que deja el cargo y/o la persona que designe el superior jerárquico mediante oficio.',
    },
    {
      pregunta: '¿Cómo firmo digitalmente el acta?',
      respuesta: 'Debes contar con la e.firma y la aplicación institucional para firmar los documentos.',
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
