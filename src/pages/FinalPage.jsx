import React from "react"
import Slide from "../components/Slide.jsx"
import { Icon } from "@iconify/react"

import Img from "../assets/camarai_rocket.webp"
import Img1 from "../assets/1.webp"
import Img2 from "../assets/2.webp"
import Img7 from "../assets/7.webp"
import Img9 from "../assets/9.webp"

// === DATA: CARDS ===
const cards = [
  {
    img: Img1,
    title: "Velocidad inmediata",
    desc: "Acceso en <strong>5 segundos</strong>. Sin esperas ni resets de contraseña.",
  },
  {
    img: Img9,
    title: "Seguridad sin contraseñas",
    desc: "Autenticación passwordless por WhatsApp: simple, rápida y segura.",
  },
  {
    img: Img2,
    title: "Trazabilidad total",
    desc: "Cada acción tiene identidad real. Control y auditoría completa.",
  },
  {
    img: Img7,
    title: "Fricción cero",
    desc: "Todo fluye de forma natural para ventas, soporte y operaciones.",
  },
]

export default function FinalPage({ onSlide }) {
  return (
    <Slide
      layout={4} // 👉 Usamos el nuevo formato 4
      contentImg={Img}
      title="¡Ya lo experimentaste!"
      subtitle="Ahora lleva la autenticación por WhatsApp a toda tu organización."
      cards={cards}
      accentColor1="border-slate-400"
      primaryButton={{
        text: "Comenzar ya",
        icon: "mynaui:rocket-solid",
      }}
      secondaryButton={{
        text: "Contactar especialista",
        icon: "mynaui:chat-dots-solid",
      }}
    />
  )
}
