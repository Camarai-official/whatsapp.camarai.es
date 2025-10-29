// src/components/PageWrapper.jsx
import React from "react"
import { motion } from "framer-motion"

const variants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
}

// Aplica estilos fijos a h1 y p de forma recursiva
function styleChildren(children) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child

    // h1
    if (child.type === "h1") {
      return React.cloneElement(child, {
        className: `${child.props.className ?? ""} text-slate-100 font-poppins tracking-normal leading-tight text-5xl md:text-5xl font-extrabold mb-6`
      })
    }

    // p
    if (child.type === "p") {
      return React.cloneElement(child, {
        className: `${child.props.className ?? ""} text-slate-300 font-poppins leading-relaxed tracking-normal`
      })
    }

    // si el hijo tiene children, aplicar recursión
    if (child.props?.children) {
      return React.cloneElement(child, {
        ...child.props,
        children: styleChildren(child.props.children)
      })
    }

    return child
  })
}

export default function PageWrapper({ children }) {
  return (
    <motion.section
      className="w-screen flex-1 flex items-center justify-center mb-2"
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="w-[90vw] max-w-[1200px] h-[80vh] py-6 px-22 rounded-4xl
        bg-[#11181C]/30 backdrop-blur-xl border border-slate-300/20 flex flex-col items-center justify-center text-center
        shadow-lg"
      >
        {styleChildren(children)}
      </div>
    </motion.section>
  )
}
