"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -3,
        backgroundColor: "hsl(var(--background))", // usa variable de Tailwind
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Viñeta central */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: 2,
            width: "150%",
            height: "140%",
            background: "radial-gradient(ellipse at 50% 55%, transparent 20%, #050C0F 90%)",
            transform: "translate3d(-50%, -50%, 0)",
          }}
        />

        {/* Overlay radial sutil */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: 5,
            width: "100%",
            height: "100%",
            mixBlendMode: "overlay",
            transform: "translate3d(-50%, -50%, 0)",
          }}
        />

        {/* Aura animada */}
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            zIndex: 3,
            width: "100%",
            height: "30%",
            backgroundImage:
              "linear-gradient(90deg, #00f8f1 0%, #00ff00 16.5%, #ADFF2F 25%, #ff53da 33%, #ffbd1e 49.5%, #00f8f1 66%, #32CD32 75%, #00f8f160 85.5%, #ffbd1e 100%, #00f8f1 100%)",
            backgroundSize: "200% 100%",
            filter: "blur(100px)",
            mixBlendMode: "plus-lighter",
            opacity: 0.5,
            transform: "translateY(-50%)",
          }}
          animate={{ backgroundPosition: ["0% 50%", "-200% 50%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  )
}
