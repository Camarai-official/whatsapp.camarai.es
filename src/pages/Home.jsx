// src/pages/Home.jsx
import React from "react"
import { Icon } from "@iconify/react"
import RobotWhatsApp from "../assets/camarai_robot.webp"

export default function Home({ onSlide }) {
  return (
    <section
      id="Home"
      className="relative w-full sm:w-[94vw] max-w-[1200px] h-full sm:min-h-[calc(100vh-10rem)] md:h-[87vh]
      px-4 sm:px-8 md:px-12 lg:px-22 py-10 sm:py-8
      rounded-none sm:rounded-4xl border-0 sm:border border-slate-300/30
      overflow-hidden flex flex-col items-center justify-center mt-6 sm:my-8 mx-auto
      bg-slate-950/20 sm:bg-slate-950/90 sm:backdrop-blur-xl"
    >

      {/* Contenedor principal: dos columnas */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
        
        {/* Columna izquierda: texto */}
        <div className="flex-2 flex flex-col justify-center items-start text-left max-w-full md:max-w-xl px-2 sm:px-0">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-violet-400">Camarai</span> <br className="hidden sm:block" />
              <span className="text-white">
                reinventa el Login <br className="hidden sm:block" />solo con{" "}
              </span>
              <span className="text-green-400">WhatsApp</span>
            </h1>
          </div>

          <p className="my-3 sm:my-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-full md:max-w-xl">
            Aprovecha la app de mensajería más popular del mundo para ofrecer una
            experiencia de autenticación instantánea, segura y sin fricciones.
            Optimiza conversiones y simplifica el acceso de tus usuarios.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            {/* Botón secundario — pasa a la diapositiva Page01 */}
            <button
              onClick={() => onSlide && onSlide("Page01")}
              className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-green-400/70 text-green-300 font-semibold text-base sm:text-lg hover:bg-green-400/10 w-full sm:w-auto"
            >
              Conocer más
            </button>

            {/* Botón primario — pasa a la diapositiva FinalPage */}
            <button
              onClick={() => onSlide && onSlide("FinalPage")}
              className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-green-400 text-slate-900 font-semibold text-base sm:text-lg hover:bg-green-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Comenzar
              <Icon icon="mynaui:rocket-solid" width={18} height={18} />
            </button>
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="flex-1 flex justify-center items-center relative w-full md:w-auto">
          {/* Brillo de fondo decorativo */}
          <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
            <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] bg-green-400/40 rounded-full blur-[120px] sm:blur-[160px]" />
          </div>
          <img
            src={RobotWhatsApp}
            alt="Robot WhatsApp"
            className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain relative z-10"
          />
        </div>
      </div>
    </section>
  )
}
