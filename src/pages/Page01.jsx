// src/pages/Page01.jsx
import Slide from "../components/Slide.jsx"
import img1 from "../assets/1.webp"
import img2 from "../assets/2.webp"
import img3 from "../assets/3.webp"
import img4 from "../assets/4.webp"
import img5 from "../assets/5.webp"
import img6 from "../assets/6.webp"

const cards = [
  {
    title: "Acceso en segundos",
    desc: "Permite a los usuarios entrar en segundos sin contraseñas ni códigos. La autenticación es instantánea, fluida y confiable.",
    img: img1
  },
  {
    title: "Lead 10X cualificado",
    desc: "Reduce el CAC y mejora el LTV. Un teléfono verificado garantiza intención real y evita leads falsos, spam y cuentas temporales.",
    img: img2
  },
  {
    title: "Canal de contacto instantáneo",
    desc: "Facilita una comunicación directa y efectiva con más del 95% de lectura, optimizando soporte, retención y ventas continuas.",
    img: img3
  },
  {
    title: "Delegación de backend y seguridad",
    desc: "Elimina la deuda técnica y el riesgo legal. Camarai gestiona credenciales, cifrado y validaciones con total fiabilidad.",
    img: img4
  },
  {
    title: "Validación sin contraseñas",
    desc: "Ahorra en soporte y mantenimiento. La autenticación sin contraseñas agiliza el acceso y reduce incidencias operativas.",
    img: img5
  },
  {
    title: "Privacidad simplificada",
    desc: "Cumple fácilmente con GDPR y CCPA. Delegar la autenticación reduce exposición legal y simplifica la gestión de datos.",
    img: img6
  }
]


export default function Page01() {
  return (
    <Slide
      layout={2}
      title="¿Por qué elegir Login con WhatsApp?"
      subtitle="Camarai Login está diseñado para simplificar cada etapa del acceso de usuarios."
      cards={cards}
    />
  )
}
