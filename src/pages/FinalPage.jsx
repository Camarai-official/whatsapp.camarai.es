import React from "react"
import { Icon } from "@iconify/react"
import PageSection from "../components/PageSection.jsx"
import Img13 from "../assets/13.webp"
import Img1 from "../assets/1.webp"
import Img2 from "../assets/2.webp"
import Img7 from "../assets/7.webp"
import Img9 from "../assets/9.webp"


export default function FinalPage() {
  return (
    <PageSection
      id="FinalPage"
      title="¡Ya lo experimentaste!"
      subtitle="Ahora lleva la autenticación por WhatsApp a toda tu organización."
      headerImg={Img13}
    >
      <div className="flex flex-col items-center justify-center w-full mt-10 space-y-14">

{/* === BLOQUE DE BENEFICIOS === */}
<div className="grid gap-6 sm:grid-cols-2 w-full max-w-5xl mx-auto">
  {[
    {
      img: Img1,
      title: "Velocidad inmediata",
      text: (
        <>
          Acceso en <strong>{"<5s"}</strong>. Sin esperas ni resets de contraseña.
        </>
      ),
    },
    {
      img: Img9,
      title: "Seguridad sin contraseñas",
      text: "Autenticación passwordless por WhatsApp: simple, rápida y segura.",
    },
    {
      img: Img2,
      title: "Trazabilidad total",
      text: "Cada acción tiene identidad real. Control y auditoría completa.",
    },
    {
      img: Img7,
      title: "Fricción cero",
      text: "Todo fluye de forma natural para ventas, soporte y operaciones.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="relative flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl 
      bg-gray-950/20 hover:bg-gray-950/40 border border-slate-300/20 text-left
      transition-all duration-300 hover:scale-[1.02] hover:border-green-400/40"
    >
      {/* Luz de fondo */}
      <div className="absolute top-4 left-1/2 sm:left-6 transform -translate-x-1/2 sm:translate-x-0 w-12 h-12 rounded-full blur-xl bg-green-400/20 opacity-70" />

      {/* Imagen */}
      <div className="relative z-10 flex-shrink-0">
        <img
          src={item.img}
          alt={item.title}
          className="w-14 h-14 md:w-16 md:h-16 object-contain"
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col text-left z-10">
        <h3 className="text-md md:text-lg font-semibold text-green-400 mb-1">
          {item.title}
        </h3>
        <p className="text-slate-400 text-sm md:text-base leading-snug">
          {item.text}
        </p>
      </div>
    </div>
  ))}
</div>




        {/* === BLOQUE DE ACCIÓN FINAL === */}
        <div className="text-center w-full max-w-3xl space-y-6">
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Integra <span className="text-green-400 font-semibold">Camarai Login </span> 
             en tu empresa y transforma la forma en que tu equipo accede, trabaja y confía.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {/* Botón primario */}
            <a
              href="#"
              className="px-8 py-4 rounded-2xl bg-green-400 text-slate-900 font-semibold text-lg 
              hover:bg-green-300 flex items-center gap-2"
            >
              <Icon icon="mynaui:rocket-solid" width={22} height={22} />
              Implementar en mi empresa
            </a>

            {/* Botón secundario */}
            <a
              href="#"
              className="px-8 py-4 rounded-2xl border border-green-400/70 text-green-300 font-semibold text-lg 
              hover:bg-green-400/10 flex items-center gap-2"
            >
              <Icon icon="mynaui:chat-dots-solid" width={22} height={22} />
              Hablar con especialista
            </a>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
