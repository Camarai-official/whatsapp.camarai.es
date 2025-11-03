// src/pages/Page02.jsx
import Slide from "../components/Slide.jsx"
import img7 from "../assets/7.webp"
import img8 from "../assets/8.webp"
import img9 from "../assets/9.webp"

const cards = [
  {
    title: "Acceso sin contraseñas",
    desc: "Los procesos de recuperación frustran a los usuarios y aumentan la fricción. <br/> Elevado volumen de tickets y costes de soporte.",
    desc2: "Login mediante código OTP por WhatsApp. Acceso en segundos, reducción de incidencias hasta un 90 %.",
    img: img7
  },
  {
    title: "Verificación sin fricción",
    desc: "La validación de identidad manual es muy lenta y costosa. <br/> Pérdida de tiempo operativo y exposición a fraude.",
    desc2: "Autenticación instantánea a través del número de WhatsApp. Seguridad reforzada sin interrumpir la experiencia.",
    img: img8
  },
  {
    title: "SSO con WhatsApp",
    desc: "Múltiples credenciales generan caos y riesgo. <br/> Productividad reducida y vulnerabilidades de seguridad.",
    desc2: "Single Sign-On con WhatsApp. Acceso centralizado, seguro y escalable para todo tu equipo.",
    img: img9
  },
]


export default function Page02() {
  return (
    <Slide
      layout={2}
      title="Transforma el acceso en una ventaja competitiva."
      subtitle="El login tradicional es un cuello de botella. Camarai Login redefine la autenticación con un acceso instantáneo, seguro y sin contraseñas, impulsado por WhatsApp."
      cards={cards}
      accentColor1="border-yellow-400/60"
      accentColor2="border-green-300/60"
      primaryButton={{ text: "Ver cómo funciona", icon: "mynaui:rocket-solid" }}
    />
  )
}
