// src/pages/Page03.jsx
import React from "react"
import PageWrapper from "../components/PageWrapper.jsx"
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
    <PageWrapper id="page03">
      <div className="text-center mb-12">
        <h1 className="mb-4">
          Transforma el login en tu mejor estrategia de atención y fidelización
        </h1>
        <p>
          Cada fricción en el acceso es una barrera invisible que aleja a tus usuarios.{" "}
          <span className="text-green-400">Camarai Login</span> elimina esa fricción con un flujo tan natural como{" "}
          <span className="text-slate-200 font-semibold">enviar un mensaje de WhatsApp.</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl mx-auto">
        {steps.map(({ title, action, ocurre, valor, img, bgColor }) => (
          <div
            key={title}
            className="relative flex flex-col gap-4 p-4 rounded-2xl bg-gray-950/20 hover:bg-gray-950/40 border border-slate-300/20 transition-transform flex-1 text-left"
          >
            <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full blur-xl ${bgColor}`} />
            <div className="w-full h-28 flex justify-center items-center">
              <img src={img} alt={title} className="w-24 h-24 object-contain relative z-10" />
            </div>
            <h3 className="text-xl font-semibold text-green-400 text-center">{title}</h3>
            <p className="text-slate-400 text-sm leading-snug">{action}</p>
            <p className="text-slate-400 text-sm leading-snug">{ocurre}</p>
            <p className="mt-2 text-sm text-white/90 font-medium border-l-2 border-green-400 pl-3">{valor}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#FinalPage"
          className="px-6 py-3 rounded-xl bg-slate-200 text-slate-600 font-semibold text-lg hover:bg-slate-50 hover:text-green-600"
        >
          Pruebalo ya!
        </a>
      </div>
    </PageWrapper>
  )
}
