// pages/Page04.jsx
import React from "react"
import { motion } from "framer-motion"
import PageWrapper from "../components/PageWrapper.jsx"
import { Icon } from "@iconify/react"
import Img14 from "../assets/14.webp"
import LauraProfile from "../assets/LauraProfile.webp"

export default function Page04() {
  return (
    <PageWrapper id="page04">
      {/* Título, subtítulo e imagen */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
      >
        <img
          src={Img14}
          alt="Rocket Icon"
          className="relative w-30 h-30 object-contain mx-auto z-10"
        />
        <div className="space-y-3 text-center md:text-left">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold text-white">
            "Ahora sé quién hizo qué"
          </h1>
          <p className="text-slate-400 text-base md:text-lg">
            Laura comparte cómo <span className="text-green-400 font-semibold">Camarai Login</span> transformó la seguridad y trazabilidad en su negocio.
          </p>
        </div>
      </motion.div>

      {/* Testimonio */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-4 mx-auto"
      >
        {/* Espacio para foto del cliente */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-700/20 flex items-center justify-center shadow-lg"
        >
          <img
            src={LauraProfile}
            alt="Foto de Laura Vílchez"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover object-center"
          />
        </motion.div>

        {/* Card / Blockquote */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex-1 bg-stone-200/10 rounded-3xl p-4 md:p-6 before:content-[''] before:absolute before:left-[-16px] before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-y-[12px] before:border-y-transparent before:border-r-[16px] before:border-r-stone-200/10"
        >
          <blockquote className="text-slate-100 text-sm md:text-base leading-relaxed text-left italic">
            "Nuestro mayor riesgo en el retail no era la lentitud, sino la vulnerabilidad en la caja. Antes de <span className="font-bold">Camarai</span>, los empleados a menudo usaban contraseñas genéricas o compartían la clave de supervisor 'solo por un momento'.<br/><br/>
            Cuando había discrepancias de inventario o devoluciones sospechosas, era imposible saber quién había sido el responsable final.<br/><br/>
            Al enlazar el acceso al TPV con el WhatsApp personal de cada encargado, garantizamos una <span className="font-bold">autenticación única y no transferible</span>.<br/><br/>
            Ahora, si mi empleado 'Juan' autoriza una devolución o mi supervisora 'Ana' realiza un ajuste, esa acción queda ligada <span className="font-bold">100 % a su identidad verificada por WhatsApp</span>.<br/><br/>
            El resultado: un sistema increíblemente rápido (5 segundos en caja) y la certeza de que cada operación crítica es realizada por la persona autorizada para su rol."
          </blockquote>

          {/* Autor */}
          <div className="mt-4 text-green-500 text-sm md:text-base font-medium text-right">
            — Laura Vílchez, Retail Manager
          </div>
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <a
          href="#FinalPage"
          className="px-6 py-3 rounded-xl bg-slate-200 text-slate-600 font-semibold text-lg hover:bg-slate-50 hover:text-green-600"
        >
          Descubre cómo implementar Camarai
        </a>
      </motion.div>
    </PageWrapper>
  )
}
