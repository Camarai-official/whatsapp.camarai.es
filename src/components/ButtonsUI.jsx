import React from "react"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import camaraiLogo from "../assets/camarai_logo.webp"

const ICONS = {
  Page00: camaraiLogo,
  Page01: "mynaui:one-solid",
  Page02: "mynaui:two-solid",
  Page03: "mynaui:three-solid",
  Page04: "mynaui:four-solid",
  Page05: "mynaui:five-solid",
  FinalPage: "mynaui:rocket-solid"
}

export default function ButtonsUI({
  sections,
  currentIndex,
  onSelect,
  onPrev,
  onNext
}) {
  const isFirst = currentIndex === 0
  const isLast = currentIndex === sections.length - 1

  const Btn = ({
    icon,
    onClick,
    size = 48,
    rounded = "xl",
    active = false,
    className = ""
  }) => {
    const shape = rounded === "full" ? "rounded-full" : "rounded-xl"
    const base = `flex items-center justify-center ${shape} border cursor-pointer transition`
    const state = active
      ? "bg-gray-950/90 border-slate-300/30 scale-105"
      : "bg-slate-300/10 border-slate-300/10 hover:bg-slate-300/20"
    const isImage =
      typeof icon === "string" && icon.match(/\.(png|jpg|jpeg|webp|svg)$/i)

    return (
      <motion.button
        onClick={onClick}
        className={`${base} ${state} ${className}`}
        style={{ width: size, height: size }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isImage ? (
          <img
            src={icon}
            alt=""
            className="w-4 h-4 xl:w-6 xl:h-6 object-contain opacity-80 hover:opacity-100"
          />
        ) : (
          <Icon
            icon={icon}
            width={size * 0.5}
            height={size * 0.5}
            color="#cbd5e1"
          />
        )}
      </motion.button>
    )
  }

  return (
    <>
      {/* 🧭 Lista de slides */}
      <nav
        className={`
          fixed z-40 flex gap-3 xl:gap-5
          justify-center items-center xl:justify-normal
          transition-all duration-300
          xl:flex-col xl:left-4 xl:top-[10%]
          w-full xl:w-auto
          p-3 rounded-xl 
          top-0 left-1/2 -translate-x-1/2 sm:translate-x-0
        `}
      >
        {sections.map((s, i) => (
          <Btn
            key={s.id}
            icon={ICONS[s.id]}
            onClick={() => onSelect(i)}
            active={currentIndex === i}
            size={40}
          />
        ))}
      </nav>

      {/* 🧭 Botones de navegación */}
      {(onPrev || onNext) && (
        <>
          {/* 💻 Desktop: laterales centrados */}
          {!isFirst && (
            <Btn
              icon="mdi:chevron-left"
              onClick={onPrev}
              size={40}
              rounded="full"
              className="hidden xl:flex absolute left-36 top-1/2 -translate-y-1/2 z-40"
            />
          )}
          {!isLast && (
            <Btn
              icon="mdi:chevron-right"
              onClick={onNext}
              size={40}
              rounded="full"
              className="hidden xl:flex absolute right-36 top-1/2 -translate-y-1/2 z-40"
            />
          )}
        </>
      )}
    </>
  )
}
