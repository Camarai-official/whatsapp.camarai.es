// src/pages/FinalPage.jsx
import React from "react"
import { motion } from "framer-motion"
import PageWrapper from "../components/PageWrapper.jsx"
import { Icon } from "@iconify/react"
import Img13 from "../assets/13.webp"

export default function FinalPage() {
  return (
    <PageWrapper id="FinalPage">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center gap-8 mx-auto"
      >
        {/* Título con icono */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <img
            src={Img13}
            alt="Rocket Icon"
            className="relative w-32 h-32 object-contain mx-auto z-10"
          />
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              ¡Ya lo experimentaste! <br /> Ahora escala la transformación.
            </h1>
            <p className="text-slate-300 text-base md:text-lg">
              <span className="text-green-500 font-semibold">Camarai Login</span> no es solo un demo: es tu nueva realidad operativa.
            </p>
          </div>
        </motion.div>

        {/* Beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-2xl shadow-md p-6 md:p-8 w-full text-left"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
            Beneficios que tu empresa obtendrá al implementarlo:
          </h3>
          <ul className="space-y-2 text-slate-300 text-base md:text-lg">
            <li>• Acceso en {"<5"} segundos vs minutos de login/reseteos</li>
            <li>• Seguridad inherente con autenticación passwordless</li>
            <li>• Trazabilidad completa de todas las operaciones</li>
            <li>• Cero fricción para equipos comerciales y operativos</li>
          </ul>
        </motion.div>

        {/* Próximos pasos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4 text-slate-300 w-full"
        >
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-10 text-center md:text-left">
            Próximos pasos para llevar esto a toda tu organización:
          </h4>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-6 py-3 rounded-xl bg-slate-200 text-slate-600 font-semibold text-lg hover:bg-slate-50 hover:text-green-600 flex items-center gap-2"
            >
              Implementar en Mi Empresa
              <Icon icon="mynaui:check-hexagon-solid" className="text-xl" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-6 py-3 rounded-xl outline-1 text-white font-semibold text-lg outline-white hover:bg-white/10 hover:text-green-400 flex items-center gap-2"
            >
              Hablar con Especialista
              <Icon icon="mynaui:chat-dots-solid" className="text-xl" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-6 py-3 rounded-xl text-white font-semibold text-lg hover:bg-white/10 hover:text-green-400 flex items-center gap-2"
            >
              Documentación Técnica
              <Icon icon="mynaui:folder-kanban-solid" className="text-xl" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  )
}
