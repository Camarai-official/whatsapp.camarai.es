// src/components/SidebarNav.jsx
import React from "react"
import AnimatedButton from "./AnimatedButton"
import camaraiLogo from "../assets/camarai_logo.webp"
import FinalPage from "../pages/FinalPage"


const ICONS = {
  page00: camaraiLogo, // Imagen personalizada
  page01: "mynaui:one-solid",
  page02: "mynaui:two-solid",
  page03: "mynaui:three-solid",
  page04: "mynaui:four-solid",
  page05: "mynaui:five-solid",
  FinalPage: "mynaui:rocket-solid"
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
