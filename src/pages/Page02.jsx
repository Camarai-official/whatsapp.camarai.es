// pages/Page02.jsx
import { motion } from "framer-motion"
import PageWrapper from "../components/PageWrapper.jsx"
import Img7 from "../assets/7.webp"
import Img8 from "../assets/8.webp"
import Img9 from "../assets/9.webp"

const cards = [
  {
    title: "Acceso sin contraseñas",
    problema: "Los procesos de recuperación frustran a los usuarios y aumentan la fricción.",
    impacto: "Elevado volumen de tickets y costes de soporte.",
    solucion: "Login mediante código OTP por WhatsApp. Acceso en segundos, reducción de incidencias hasta un 90 %. ",
    bgColor: "bg-blue-400/50",
    img: Img7
  },
  {
    title: "Verificación sin fricción",
    problema: "La validación de identidad manual es lenta y costosa.",
    impacto: "Pérdida de tiempo operativo y exposición a fraude.",
    solucion: "Autenticación instantánea a través del número de WhatsApp. Seguridad reforzada sin interrumpir la experiencia.",
    bgColor: "bg-red-400/50",
    img: Img8
  },
  {
    title: "SSO con WhatsApp",
    problema: "Múltiples credenciales generan caos y riesgo.",
    impacto: "Productividad reducida y vulnerabilidades de seguridad.",
    solucion: "Single Sign-On con WhatsApp. Acceso centralizado, seguro y escalable para todo tu equipo.",
    bgColor: "bg-emerald-400/50",
    img: Img9
  }
]

export default function Page02() {
  return (
    <PageWrapper id="page02">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-left mb-12"
      >
        <h1 className="mb-4 text-center">
          Transforma el acceso en una ventaja competitiva.
        </h1>
        <p className="text-slate-400 max-w-3xl mx-auto text-base md:text-lg">
          El login tradicional es un cuello de botella. <span className="text-green-400">Camarai Login</span> redefine la autenticación con un acceso instantáneo, seguro y sin contraseñas, impulsado por WhatsApp.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
        {cards.map(({ title, problema, impacto, solucion, bgColor, img }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative flex flex-col gap-3 p-5 rounded-2xl bg-gray-950/20 hover:bg-gray-950/40 border border-slate-300/20 hover:scale-103 transition-transform text-left overflow-hidden"
          >
            {/* Contenedor de icono con luz difusa detrás */}
            <div className="relative flex justify-center items-center mb-2">
              <div className={`absolute w-14 h-14 rounded-full blur-xl ${bgColor}`} />
              <img
                src={img}
                alt={title}
                className="relative w-14 h-14 object-contain z-10"
                loading="lazy"
              />
            </div>

            <h3 className="text-lg font-semibold text-green-400 text-center">{title}</h3>
            <p className="text-slate-400 text-sm leading-snug">{problema}</p>
            <p className="text-slate-400 text-sm leading-snug">{impacto}</p>
            <p className="mt-2 text-sm text-white/90 font-medium border-l-2 border-green-400 pl-3">
              {solucion}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center text-slate-400 max-w-3xl mx-auto text-base md:text-lg"
      >
        <span className="text-green-400">Camarai Login</span> convierte el acceso en un motor de eficiencia. Reduce costes, acelera el onboarding y mejora la experiencia del usuario final, todo desde WhatsApp.
      </motion.p>
    </PageWrapper>
  )
}
