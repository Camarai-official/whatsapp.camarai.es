// src/pages/Page01.jsx
import React from "react"
import PageWrapper from "../components/PageWrapper.jsx"

export default function Page01() {
  return (
    <PageWrapper>
      <h1>
        ¿Por qué elegir Login con WhatsApp?
      </h1>

      <p>
        Aprovecha la app de mensajería más popular del mundo para ofrecer una experiencia
        de autenticación instantánea, segura y sin fricciones. Optimiza conversiones y simplifica
        el acceso de tus usuarios.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
  {[
  {
    title: "Acceso en Segundos",
    desc: "Anula la fricción y la necesidad de CAPTCHA o 2FA ineficientes. Dispara la tasa de conversión del onboarding al hacer el acceso transparente para el usuario."
  },
  {
    title: "Leads 10X Más Cualificados",
    desc: "Optimiza el CAC. El teléfono verificado garantiza la máxima intención y un LTV potencial superior, eliminando leads de spam, correos falsos y cuentas temporales."
  },
  {
    title: "Canal de Page03o Instantáneo",
    desc: "Permite comunicación en tiempo real (>95% de lectura) para upsells y soporte, sin depender del spam del correo electrónico."
  },
  {
    title: "Delegación de Backend y Seguridad",
    desc: "Elimina deuda técnica. Libera a tu equipo del coste de mantenimiento y riesgo legal de custodiar credenciales."
  },
  {
    title: "Cero Soporte por Contraseñas Olvidadas",
    desc: "Reducción inmediata del coste operativo. El stack elimina tickets de recuperación, permitiendo al helpdesk enfocarse en retención y valor de producto."
  },
  {
    title: "Gestión de Privacidad Simplificada",
    desc: "Mitiga el riesgo legal por compliance. Delegar la autenticación a la infraestructura de WhatsApp simplifica el cumplimiento normativo (GDPR/CCPA) y reduce la exposición legal."
  }
]
.map(({ title, desc }) => (
    <div
      key={title}
      className="p-4 rounded-lg bg-black/20 hover:bg-black/40 border border-slate-300/10"
    >
      <h3 className="text-lg font-semibold text-green-400 mb-1">{title}</h3>
      <p className="text-slate-400 text-sm leading-snug">{desc}</p>
    </div>
  ))}
</div>

    </PageWrapper>
  )
}
