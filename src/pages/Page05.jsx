import React from "react"
import { Icon } from "@iconify/react"
import camarai_pincode from "../assets/camarai_pincode.webp"

export default function Page05({ onSlide }) {
  return (
    <section
      id="Page05"
      className="relative w-full sm:w-[94vw] max-w-[1200px] h-full sm:min-h-[calc(100vh-10rem)] md:h-[87vh]
      px-4 sm:px-8 md:px-12 lg:px-22 py-10 sm:py-8
      rounded-none sm:rounded-4xl border-0 sm:border border-slate-300/30
      overflow-hidden flex flex-col items-center justify-center my-6 sm:my-8 mx-auto
      bg-transparent sm:bg-slate-950/90 sm:backdrop-blur-xl"
    >
      {/* 🔆 Brillo de fondo — oculto en mobile */}
      <div className="hidden sm:flex absolute inset-0 justify-center items-center pointer-events-none">
        <div className="w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[700px] md:h-[700px] bg-green-400/30 rounded-full blur-[160px]" />
      </div>

      {/* === HEADER === */}
      <header className="relative z-10 w-full flex flex-col items-center text-center gap-4 sm:gap-6 mb-6 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 leading-tight">
          Ahora, queremos que lo experimentes.
        </h1>
        <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
          Te invitamos a probar Camarai Login en este mismo momento. Escanea el código QR en pantalla
          y comprueba por ti mismo la velocidad, seguridad y simplicidad de nuestro acceso.
        </p>
      </header>

      {/* === CONTENIDO PRINCIPAL === */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8">
        {/* 📱 Imagen del QR */}
        <img
          src={camarai_pincode}
          alt="QR demo"
          className="relative w-auto h-70 sm:h-80 drop-shadow-xl"
        />

        {/* 🚀 Botón CTA */}
        <button
          onClick={() => onSlide && onSlide("FinalPage")}
          className="px-6 py-3 rounded-xl bg-green-400 text-slate-900 font-semibold text-lg 
          hover:bg-green-200 flex items-center gap-2 transition-all cursor-pointer"
        >
          Solicitar PIN
          <Icon icon="mynaui:password" width={22} height={22} />
        </button>
      </div>
    </section>
  )
}
