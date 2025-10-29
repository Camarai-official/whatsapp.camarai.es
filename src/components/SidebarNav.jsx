// src/components/SidebarNav.jsx
import React from "react"
import AnimatedButton from "./AnimatedButton"

export default function SidebarNav({ sections, currentIndex, onSelect }) {
  return (
    <nav className="fixed left-4 top-[15%] flex flex-col gap-5 z-40">
      {sections.map((s, i) => (
        <AnimatedButton
          key={s.id}
          icon={s.icon}
          onClick={() => onSelect(i)}
          isActive={currentIndex === i}
          borderRadius="rounded-xl"
          size={48}
        />
      ))}
    </nav>
  )
}
