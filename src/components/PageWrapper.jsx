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
        className: `${child.props.className ?? ""} text-slate-100 font-poppins tracking-normal leading-tight text-3xl md:text-4xl font-extrabold`
      })
    }

    // p
    if (child.type === "p") {
      return React.cloneElement(child, {
        className: `${child.props.className ?? ""} text-lg text-slate-300 font-poppins leading-relaxed tracking-normal`
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
    <div
      className="w-[94vw] max-w-[1200px] h-[88vh] p-24 rounded-4xl
      bg-gray-950/90 backdrop-blur-xl border border-slate-300/20
      flex flex-col items-center justify-center text-center gap-4 shadow-lg"
    >
        {styleChildren(children)}
      </div>
    </motion.section>
  )
}
