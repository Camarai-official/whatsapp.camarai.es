// src/components/AnimatedButton.jsx
import React from "react"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

export default function AnimatedButton({
  icon,
  onClick,
  borderRadius = "rounded-xl",
  size = 48, // tamaño del contenedor
  isActive = false,
  positionClasses = "",
}) {
  const baseClasses = `flex items-center justify-center w-[${size}px] h-[${size}px] ${borderRadius} border cursor-pointer transition-colors p-2`
  const activeClasses = isActive 
    ? "bg-[#11181C]/60 border-slate-300/50" 
    : "bg-[#11181C]/30 border-slate-300/10 hover:bg-[#11181C]/60"

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${activeClasses} ${positionClasses}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Icon icon={icon} width={26} height={26} color="#cbd5e1" />
    </motion.button>
  )
}
