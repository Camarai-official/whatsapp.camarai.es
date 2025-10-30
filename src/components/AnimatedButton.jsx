// src/components/AnimatedButton.jsx
import React from "react"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

export default function AnimatedButton({
  icon,
  onClick,
  borderRadius = "rounded-xl",
  size = 48,
  isActive = false,
  positionClasses = "",
}) {
  const baseClasses = `flex items-center justify-center w-[${size}px] h-[${size}px] ${borderRadius} border cursor-pointer transition-colors p-2`
  const activeClasses = isActive
    ? "bg-[#11181C]/60 border-slate-300/50"
    : "bg-[#11181C]/30 border-slate-300/10 hover:bg-slate-300/10"

  const isImage = typeof icon === "string" && icon.match(/\.(png|jpg|jpeg|webp|svg)$/i)


  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${activeClasses} ${positionClasses}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {isImage ? (
        <img
          src={icon}
          alt=""
          className="w-6 h-6 object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      ) : (
        <Icon icon={icon} width={26} height={26} color="#cbd5e1" />
      )}
    </motion.button>
  )
}
