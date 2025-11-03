import React, { useState } from "react"
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
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

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
    const base = `flex items-center justify-center ${shape} border cursor-pointer`
    const state = active
      ? "bg-gray-950/90 border-slate-300/30"
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
      {/* 🍔 Botón hamburguesa móvil */}
      <Btn
        icon={open ? "mdi:close" : "mdi:menu"}
        onClick={toggle}
        size={40}
        className="fixed left-3 top-2 xl:left-4 xl:top-4 z-50 xl:hidden
                   bg-slate-950/90 border border-slate-300/30 hover:bg-slate-900/90"
      />

      {/* 🧭 Navegación lateral */}
      <nav
        className={`fixed left-2 xl:left-4 top-[10%] flex flex-col gap-3 xl:gap-5 z-40
          transition-all duration-300 ease-in-out
          ${open
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 xl:translate-x-0 xl:opacity-100"}
          bg-slate-950/80 xl:bg-transparent
          p-3 xl:p-0 rounded-xl xl:rounded-none border border-slate-300/20 xl:border-0`}
      >
        {sections.map((s, i) => (
          <Btn
            key={s.id}
            icon={ICONS[s.id]}
            onClick={() => {
              onSelect(i)
              setOpen(false)
            }}
            active={currentIndex === i}
            size={40}
          />
        ))}
      </nav>

      {/* 🌫 Overlay móvil */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🧭 Botones de scroll integrados */}
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

          {/* 📱 Mobile: arriba a la derecha */}
          <div className="flex xl:hidden fixed top-2 right-4 z-50 gap-6">
            {!isFirst && (
              <Btn
                icon="mdi:chevron-left"
                onClick={onPrev}
                size={40}
                className="bg-slate-950/90 border border-slate-300/30 hover:bg-slate-900/90"
              />
            )}
            {!isLast && (
              <Btn
                icon="mdi:chevron-right"
                onClick={onNext}
                size={40}
                className="bg-slate-950/90 border border-slate-300/30 hover:bg-slate-900/90"
              />
            )}
          </div>
        </>
      )}
    </>
  )
}
