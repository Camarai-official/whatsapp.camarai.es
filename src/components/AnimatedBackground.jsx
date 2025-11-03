"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 bg-slate-950 overflow-hidden">
      {/* 💡 Luces animadas más suaves */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #78A3ED, #00ff00, #ADFF2F, #F0768C, #9B6EFD, #78A3ED)",
          backgroundSize: "400% 100%",
          filter: "blur(120px)",
          opacity: 0.45,
          mixBlendMode: "plus-lighter",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "400% 50%"],
        }}
        transition={{
          duration: 40, // ⏱️ Más lento = más fluido
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* 🌒 Gradiente de bordes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)",
        }}
      />
    </div>
  )
}
