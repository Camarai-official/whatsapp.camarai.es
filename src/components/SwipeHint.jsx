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

    // Ocultar al detectar interacción (pointer / touch / mouse)
    const hide = () => setVisible(false)

    // Usamos capture para asegurarnos de capturar la interacción antes que otros listeners
    const optsCaptureOnce = { capture: true, once: true }
    const optsCapture = { capture: true }

    // pointer events (unifica touch + mouse where supported)
    window.addEventListener("pointerdown", hide, optsCaptureOnce)
    window.addEventListener("pointermove", hide, optsCaptureOnce)

    // fallback: touch & mouse (por compatibilidad con navegadores antiguos)
    window.addEventListener("touchstart", hide, optsCaptureOnce)
    window.addEventListener("touchmove", hide, optsCaptureOnce)
    window.addEventListener("mousedown", hide, optsCaptureOnce)

    // En caso de que algún framework prevenga la propagación,
    // también registramos un listener en capture sobre document (redundante pero robusto)
    document.addEventListener("pointerdown", hide, optsCaptureOnce)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("pointerdown", hide, optsCaptureOnce)
      window.removeEventListener("pointermove", hide, optsCaptureOnce)
      window.removeEventListener("touchstart", hide, optsCaptureOnce)
      window.removeEventListener("touchmove", hide, optsCaptureOnce)
      window.removeEventListener("mousedown", hide, optsCaptureOnce)
      document.removeEventListener("pointerdown", hide, optsCaptureOnce)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-[999] flex flex-col items-center justify-center xl:hidden text-white text-center px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // click directo sigue funcionando
          onClick={() => setVisible(false)}
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
