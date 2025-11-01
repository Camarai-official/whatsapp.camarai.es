import React from "react"
import PageSection from "../components/PageSection.jsx"
import Img7 from "../assets/7.webp"
import Img8 from "../assets/8.webp"
import Img9 from "../assets/9.webp"

const cards = [
  {
    title: "Acceso sin contraseñas",
    action: "Los procesos de recuperación frustran a los usuarios y aumentan la fricción.",
    ocurre: "Elevado volumen de tickets y costes de soporte.",
    valor: "Login mediante código OTP por WhatsApp. Acceso en segundos, reducción de incidencias hasta un 90 %.",
    img: Img7,
    bgColor: "bg-slate-100/40"
  },
  {
    title: "Verificación sin fricción",
    action: "La validación de identidad manual es lenta y costosa.",
    ocurre: "Pérdida de tiempo operativo y exposición a fraude.",
    valor: "Autenticación instantánea a través del número de WhatsApp. Seguridad reforzada sin interrumpir la experiencia.",
    img: Img8,
    bgColor: "bg-slate-100/40"
  },
  {
    title: "SSO con WhatsApp",
    action: "Múltiples credenciales generan caos y riesgo.",
    ocurre: "Productividad reducida y vulnerabilidades de seguridad.",
    valor: "Single Sign-On con WhatsApp. Acceso centralizado, seguro y escalable para todo tu equipo.",
    img: Img9,
    bgColor: "bg-slate-100/40"
  }
]

export default function Page02({ onSlide }) {
  return (
    <PageSection
      id="Page02"
      title="Transforma el acceso en una ventaja competitiva."
      subtitle="El login tradicional es un cuello de botella. Camarai Login redefine la autenticación con un acceso instantáneo, seguro y sin contraseñas, impulsado por WhatsApp."
      cards={cards}
      layout="grid"
      imgSize={24}
    >
      {/* Botón personalizado que cambia de diapositiva */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => onSlide && onSlide("Page05")}
          className="px-6 py-3 rounded-xl bg-green-400 text-slate-900 font-semibold text-lg hover:bg-green-200 flex items-center gap-2"
        >
          Ver cómo funciona
        </button>
      </div>
    </PageSection>
  )
}