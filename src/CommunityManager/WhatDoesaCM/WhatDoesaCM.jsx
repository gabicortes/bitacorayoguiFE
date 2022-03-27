import React from "react";
import "./WhatDoesaCM.css";
import { FaCalendarCheck, FaTools } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

function WhatDoesaCM() {
  return (
    <div className="divServicesCM">
      <p className="yoComoComunityHagoEsto">
        Como Community Manager, y como su nombre lo dice, mi trabajo es ayudarte
        a comunicar a través de tu plataformas online. Tanto si tu deseo es
        aumentar tus ventas, tu visibilidad en redes o crear una comunidad de
        seguidores de tu emprendimiento. <br />
        <br />
        Dentro de la filosofía del Yoga, aprendí a leer a otros a través de su
        cuerpo, entender sus necesidades y a transmitir lo que me han enseñado
        para acompañarlos en su proceso de sanación. Para mi, ser CM representa
        lo mismo: analizo tu presencia actual y a crear un plan de interacción
        con tu comunidad. <br />
        <br />
        En el Yoga soy el nexo entre los maestros y mis alumnos. Como Community
        Manager soy el nexo entre vos y tus clientes.. <br />
        <br />
        Te invito a descargar mi planner de contenidos de manera gratuita
        haciendo click{" "}
        <a
          className="hyperLinkPlanning"
          href="https://drive.google.com/file/d/1Gs_p9dhZ1aLXU8EIBScR-9x3Ciu1DkCB/view?usp=sharing"
          target="_blank"
        >
          {" "}
          aquí
        </a>
        .
      </p>
      <div className="martuServices">
        <div className="divServiciosMartu">
          <div className="firstServiceWrapper">
            <FaCalendarCheck className="spanLeft" />
            <div className="spanRight">
              <span className="spanTitulo">Plan Social Media.</span>
              <p className="spanExplanation">
                Análisis del posicionamiento actual del negocio en plataformas
                digitales, definición de objetivos, creación de estrategias y
                plan de mejora, asi como búsqueda de identidad de marca.
              </p>
            </div>
          </div>
          <div className="firstServiceWrapper">
            <MdPhoneIphone className="spanLeft" />
            <div className="spanRight">
              <span className="spanTitulo">Gestión de Redes Sociales.</span>
              <p className="spanExplanation">
                Puesta en marcha del plan Social Media a través de un planner de
                contenidos.
              </p>
            </div>
          </div>
          <div className="firstServiceWrapper">
            <FaTools className="spanLeft" />
            <div className="spanRight">
              <span className="spanTitulo">Asesoramientos personalizados.</span>
              <p className="spanExplanation">
                Te enseño a utilizar herramientas de comunicación (apps, ideas
                creativas, lectura de estadísticas, etc) para que puedas hacer
                tu propia gestión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { WhatDoesaCM };
