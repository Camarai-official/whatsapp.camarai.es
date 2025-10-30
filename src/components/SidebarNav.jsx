// src/components/SidebarNav.jsx
import React from "react"
import AnimatedButton from "./AnimatedButton"
import camaraiLogo from "../assets/camarai_logo.webp"


const ICONS = {
  home: camaraiLogo, // Imagen personalizada
  Page01: "mynaui:one-solid",
  Page02: "mynaui:two-solid",
  Page03: "mynaui:three-solid"
}

export default function SidebarNav({ sections, currentIndex, onSelect }) {
  return (
    <nav className="fixed left-4 top-[15%] flex flex-col gap-5 z-40">
      {sections.map((s, i) => (
        <AnimatedButton
          key={s.id}
          icon={ICONS[s.id]}
          onClick={() => onSelect(i)}
          isActive={currentIndex === i}
          borderRadius="rounded-xl"
          size={48}
        />
      ))}
    </nav>
  )
}
