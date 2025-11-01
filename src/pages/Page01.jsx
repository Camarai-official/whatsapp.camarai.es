// src/Pages/Page01.jsx
import React from "react"
import PageSection from "../components/PageSection.jsx"
import img1 from "../assets/1.webp"
import img2 from "../assets/2.webp"
import img3 from "../assets/3.webp"
import img4 from "../assets/4.webp"
import img5 from "../assets/5.webp"
import img6 from "../assets/6.webp"

const cards = [
  {
    title: "Acceso en segundos",
    desc: "Elimina fricción y métodos obsoletos como CAPTCHA o 2FA. Aumenta la conversión al ofrecer un acceso inmediato y transparente para el usuario.",
    img: img1,
    bgColor: "bg-slate-100/40"
  },
  {
    title: "Lead 10X cualificado",
    desc: "Reduce el CAC y mejora el LTV. Un teléfono verificado garantiza intención real y evita leads falsos, spam y cuentas temporales.",
    img: img2,
    bgColor: "bg-slate-100/40"
  },
  {
    title: "Canal de contacto instantáneo",
    desc: "Permite comunicación directa y efectiva (>95% de lectura) para soporte y ventas, sin depender del correo electrónico.",
    img: img3,
    bgColor: "bg-slate-100/40"
  },
  {
    title: "Delegación de backend y seguridad",
    desc: "Elimina deuda técnica y riesgo legal. Libera a tu equipo del mantenimiento de credenciales y procesos de autenticación.",
    img: img4,
    bgColor: "bg-slate-100/40"
  },
  {
    title: "Validación sin contraseñas",
    desc: "Reduce costes operativos y tickets de recuperación. La autenticación sin contraseñas permite al equipo centrarse en retención y valor de producto.",
    img: img5,
    bgColor: "bg-slate-100/40"
  },
  {
    title: "Privacidad simplificada",
    desc: "Cumple GDPR/CCPA con menor riesgo. Delegar la autenticación a WhatsApp simplifica el cumplimiento y reduce la exposición legal.",
    img: img6,
    bgColor: "bg-slate-100/40"
  }
]

export default function Page01() {
  return (
    <PageSection
      id="page01"
      title="¿Por qué elegir Login con WhatsApp?"
      subtitle="Descubre cómo Camarai Login mejora el acceso, la seguridad y la conversión."
      layout="grid"
      cards={cards}
      imgSize={16}
    />
  )
}
