// src/pages/Page01.jsx
import React from "react"
import PageWrapper from "../components/PageWrapper.jsx"
import img1 from "../assets/1.webp"
import img2 from "../assets/2.webp"
import img3 from "../assets/3.webp"
import img4 from "../assets/4.webp"
import img5 from "../assets/5.webp"
import img6 from "../assets/6.webp"

const cards = [
  {
    title: "Acceso en segundos",
    desc: "Anula la fricción y la necesidad de CAPTCHA o 2FA ineficientes. Dispara la tasa de conversión del onboarding al hacer el acceso transparente para el usuario.",
    img: img1,
    bgColor: "bg-yellow-400/60"
  },
  {
    title: "Lead 10X cualificado",
    desc: "Optimiza el CAC. El teléfono verificado garantiza la máxima intención y un LTV potencial superior, eliminando leads de spam, correos falsos y cuentas temporales.",
    img: img2,
    bgColor: "bg-red-400/60"
  },
  {
    title: "Canal de contacto instantáneo",
    desc: "Permite comunicación en tiempo real (>95% de lectura) para upsells y soporte, sin depender del spam del correo electrónico.",
    img: img3,
    bgColor: "bg-purple-400/60"
  },
  {
    title: "Delegación de backend y seguridad",
    desc: "Elimina deuda técnica. Libera a tu equipo del coste de mantenimiento y riesgo legal de custodiar credenciales.",
    img: img4,
    bgColor: "bg-emerald-400/60"
  },
  {
    title: "Validación segura y sin contraseñas",
    desc: "Reducción inmediata del coste operativo. El stack elimina tickets de recuperación, permitiendo al helpdesk enfocarse en retención y valor de producto.",
    img: img5,
    bgColor: "bg-blue-400/60"
  },
  {
    title: "Gestión de privacidad simplificada",
    desc: "Mitiga el riesgo legal por compliance. Delegar la autenticación a la infraestructura de WhatsApp simplifica el cumplimiento normativo (GDPR/CCPA) y reduce la exposición legal.",
    img: img6,
    bgColor: "bg-lime-400/60"
  }
]

export default function Page01() {
  return (
    <PageWrapper id="page01">
      <h1 className="mb-12 text-center text-3xl md:text-5xl font-bold text-white">
        ¿Por qué elegir Login con WhatsApp?
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl mx-auto">
        {cards.map(({ title, desc, img, bgColor }) => (
          <div
            key={title}
            className="relative flex flex-col gap-4 p-4 rounded-2xl bg-gray-950/20 hover:bg-gray-950/40 border border-slate-300/20 text-left overflow-visible"
          >
            <div className={`absolute w-14 h-14 rounded-full blur-xl ${bgColor} left-1/2 transform -translate-x-1/2 top-4`} />
            <div className="w-full h-16 flex justify-center items-center relative z-10">
              <img src={img} alt={title} className="w-16 h-16 object-contain" loading="lazy" />
            </div>
            <h3 className="text-lg font-semibold text-green-400 text-center">{title}</h3>
            <p className="text-slate-400 text-sm leading-snug">{desc}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}
