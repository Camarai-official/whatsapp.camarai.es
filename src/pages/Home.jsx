import { Icon } from "@iconify/react"
import React from "react"
import { motion } from "framer-motion"
import PageWrapper from "../components/PageWrapper.jsx"
import RobotWhatsApp from "../assets/camarai_robot.webp"

export default function Home() {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row items-center justify-center w-full h-full gap-8"
      >
        {/* Texto y botones */}
        <div className="flex-3 flex flex-col justify-center items-start text-left gap-4">
          <div className="flex items-center gap-4">
            <Icon icon="mynaui:robot-solid" width={48} height={48} className="text-green-400" />
            <h1 className="text-3xl md:text-5xl font-bold">
              Camarai <br/> reinventa el Login<br /> solo con WhatsApp
            </h1>
          </div>

          <p className="my-4 text-slate-300 max-w-xl text-base md:text-lg">
            Aprovecha la app de mensajería más popular del mundo para ofrecer una experiencia de autenticación instantánea, segura y sin fricciones. Optimiza conversiones y simplifica el acceso de tus usuarios.
          </p>

          {/* Botones */}
          <div className="flex gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              href="#Page01"
              className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold text-lg hover:bg-slate-50 hover:text-green-600"
            >
              Conocer mas
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              href="#FinalPage"
              className="px-6 py-3 rounded-xl outline-1 text-white font-semibold text-lg outline-white hover:bg-white/10 hover:text-green-400 flex items-center gap-2"
            >
              Comenzar
              <Icon icon="mynaui:rocket-solid" width={20} height={20} />
            </motion.a>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex-2 flex justify-center items-center relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] bg-green-400/60 rounded-full blur-3xl"
          />
          <motion.img
            src={RobotWhatsApp}
            alt="Robot WhatsApp"
            className="relative w-64 md:w-96 lg:w-full h-auto object-contain"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      </motion.div>
    </PageWrapper>
  )
}
