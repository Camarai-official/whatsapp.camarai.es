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
  // Mapeo de tamaños a clases Tailwind válidas
  const sizeClasses = {
    32: "w-8 h-8",
    40: "w-10 h-10",
    48: "w-12 h-12",
    56: "w-14 h-14",
    64: "w-16 h-16"
  }

  const sizeClass = sizeClasses[size] || sizeClasses[48]
  
  const baseClasses = `flex items-center justify-center ${sizeClass} ${borderRadius} border cursor-pointer p-1.5 sm:p-2`
  const activeClasses = isActive
    ? "bg-gray-950/90 border-slate-300/30"
    : "bg-slate-300/10 border-slate-300/10 hover:bg-slate-300/20"

  const isImage = typeof icon === "string" && icon.match(/\.(png|jpg|jpeg|webp|svg)$/i)

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${activeClasses} ${positionClasses}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isImage ? (
        <img
          src={icon}
          alt=""
          className="w-4 h-4 sm:w-6 sm:h-6 object-contain opacity-80 hover:opacity-100"
        />
      ) : (
        <Icon 
          icon={icon} 
          width={size === 40 ? 20 : 24} 
          height={size === 40 ? 20 : 24} 
          color="#cbd5e1" 
        />
      )}
    </motion.button>
  )
}
