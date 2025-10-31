// src/pages/Page03.jsx
import React from "react"
import PageSection from "../components/PageSection.jsx"
import step1Icon from "../assets/10.webp"
import step2Icon from "../assets/11.webp"
import step3Icon from "../assets/12.webp"

const steps = [
  {
    title: "1 - Pedido",
    action: 'Clic en “Acceder con WhatsApp”.',
    ocurre: "Camarai identifica el número y solicita un OTP mediante la API oficial de WhatsApp.",
    valor: "Inicio sin contraseñas ni formularios; experiencia fluida desde el primer clic.",
    img: step1Icon,
    bgColor: "bg-green-400/50"
  },
  {
    title: "2 - Validación",
    action: "El usuario ingresa el código recibido en WhatsApp.",
    ocurre: "El código se valida en tiempo real y se gestiona el perfil (creación o actualización).",
    valor: "Seguridad inmediata y sin esperas.",
    img: step2Icon,
    bgColor: "bg-green-400/50"
  },
  {
    title: "3 - Conexión",
    action: "Acceso instantáneo a la plataforma.",
    ocurre: "La información del usuario se sincroniza automáticamente con la base de datos o CRM.",
    valor: "Autenticación que permite entrar, conectar y retener.",
    img: step3Icon,
    bgColor: "bg-green-400/50"
  }
]

export default function Page03() {
  return (
    <PageSection
      id="page03"
      title="Transforma el login en tu mejor estrategia de atención y fidelización"
      subtitle="Cada fricción en el acceso es una barrera invisible que aleja a tus usuarios. Camarai Login elimina esa fricción con un flujo tan natural como enviar un mensaje de WhatsApp."
      layout="steps"
      steps={steps}
      cta={{ text: "¡Pruébalo ya!", href: "#FinalPage", variant: "primary" }}
    />
  )
}