// src/pages/Page05.jsx
import React from "react"
import { motion } from "framer-motion"
import PageWrapper from "../components/PageWrapper.jsx"
import step1Icon from "../assets/10.webp"

export default function Page05() {
  return (
    <PageWrapper id="page05">
      {/* Título principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="mb-4">
          Ahora, queremos que lo experimentes.
        </h1>
        <p>
          Te invitamos a probar Camarai Login en este mismo momento. Escanea el código QR en pantalla
          y comprueba por ti mismo la velocidad, seguridad y simplicidad de nuestro acceso.
        </p>
      </motion.div>
      <img src={step1Icon} className="h-64 w-64">
      </img>

    </PageWrapper>
  )
}
