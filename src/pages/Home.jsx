// src/pages/Home.jsx
import React from "react"
import { Icon } from "@iconify/react"
import RobotWhatsApp from "../assets/camarai_robot.webp"

export default function Home({ onSlide }) {
  return (
    <section
      id="home"
      className="relative w-[94vw] max-w-[1200px] h-[88vh] px-22 py-6 rounded-4xl
        bg-slate-950/90 backdrop-blur-xl border border-slate-300/30
        overflow-hidden flex items-center"
    >
      {/* Contenedor principal: dos columnas */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Columna izquierda: texto */}
        <div className="flex-2 flex flex-col justify-center items-start text-left max-w-xl">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-violet-400">Camarai</span> <br />
              <span className="text-white">
                reinventa el Login <br />solo con{" "}
              </span>
              <span className="text-green-400">WhatsApp</span>
            </h1>
          </div>

          <p className="my-4 text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
            Aprovecha la app de mensajería más popular del mundo para ofrecer una
            experiencia de autenticación instantánea, segura y sin fricciones.
            Optimiza conversiones y simplifica el acceso de tus usuarios.
          </p>

          <div className="flex gap-4 pt-2">
            {/* Botón secundario — pasa a la diapositiva Page01 */}
            <button
              onClick={() => onSlide && onSlide("Page01")}
              className="px-6 py-3 rounded-xl border border-green-400/70 text-green-300 font-semibold text-lg hover:bg-green-400/10"
            >
              Conocer más
            </button>

            {/* Botón primario — pasa a la diapositiva FinalPage */}
            <button
              onClick={() => onSlide && onSlide("FinalPage")}
              className="px-6 py-3 rounded-xl bg-green-400 text-slate-900 font-semibold text-lg hover:bg-green-300 flex items-center gap-2"
            >
              Comenzar
              <Icon icon="mynaui:rocket-solid" width={20} height={20} />
            </button>
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Brillo de fondo decorativo */}
          <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
            <div className="w-[700px] h-[700px] bg-green-400/40 rounded-full blur-[160px]" />
          </div>
          <img
            src={RobotWhatsApp}
            alt="Robot WhatsApp"
            className="w-64 md:w-96 h-auto object-contain relative z-10"
          />
        </div>
      </div>
    </section>
  )
}
