// src/components/SidebarNav.jsx
import React, { useState } from "react"
import AnimatedButton from "./AnimatedButton"
import { Icon } from "@iconify/react"
import camaraiLogo from "../assets/camarai_logo.webp"

const ICONS = {
  Page00: camaraiLogo, // Imagen personalizada
  Page01: "mynaui:one-solid",
  Page02: "mynaui:two-solid",
  Page03: "mynaui:three-solid",
  Page04: "mynaui:four-solid",
  Page05: "mynaui:five-solid",
  FinalPage: "mynaui:rocket-solid"
}

export default function SidebarNav({ sections, currentIndex, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Botón hamburguesa para móviles */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-3 top-2 sm:left-4 sm:top-4 z-50 
        w-10 h-10 sm:hidden flex items-center justify-center
        bg-slate-950/90 border border-slate-300/30 rounded-xl
        hover:bg-slate-900/90"
        aria-label="Toggle navigation"
      >
        <Icon 
          icon={isOpen ? "mdi:close" : "mdi:menu"} 
          width={24} 
          height={24} 
          color="#cbd5e1" 
        />
      </button>

      {/* Navegación */}
      <nav 
        className={`
          fixed left-2 sm:left-4 top-[15%] flex flex-col gap-3 sm:gap-5 z-40
          transition-all duration-300 ease-in-out
          ${isOpen 
            ? "translate-x-0 opacity-100" 
            : "-translate-x-full opacity-0 sm:translate-x-0 sm:opacity-100"
          }
          bg-slate-950/80 sm:bg-transparent
          p-3 sm:p-0 rounded-xl sm:rounded-none border border-slate-300/20 sm:border-0
        `}
      >
        {sections.map((s, i) => (
          <AnimatedButton
            key={s.id}
            icon={ICONS[s.id]}
            onClick={() => {
              onSelect(i)
              setIsOpen(false)
            }}
            isActive={currentIndex === i}
            borderRadius="rounded-xl"
            size={40}
          />
        ))}
      </nav>

      {/* Overlay para móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 sm:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
