import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"

export default function SwipeHint() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Mostrar después de 6 segundos
    const timer = setTimeout(() => {
      setVisible(true)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => setVisible(false)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-[999] flex flex-col items-center justify-center xl:hidden text-white text-center px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose} // se cierra tocando cualquier parte
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            // evita que el click dentro del contenido cierre accidentalmente
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg font-medium tracking-wide">
              Desliza para conocer más
            </p>

            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <Icon icon="mdi:arrow-right" width={32} height={32} />
            </motion.div>

            {/* Botón OK */}
            <motion.button
              onClick={handleClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 px-6 py-2 rounded-full bg-white/20 hover:bg-white/30 
                         text-white font-medium text-base flex items-center gap-2"
            >
              <span>OK</span> <span>👌</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
