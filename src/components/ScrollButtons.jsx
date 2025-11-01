// src/components/ScrollButtons.jsx
import React from "react"
import AnimatedButton from "./AnimatedButton"

export default function ScrollButtons({ onPrev, onNext }) {
  return (
    <>
      {/* Botones ocultos en móviles muy pequeños, visibles desde sm */}
      <AnimatedButton
        icon="mdi:chevron-left"
        onClick={onPrev}
        size={40}
        borderRadius="rounded-full"
        positionClasses="hidden sm:flex absolute left-2 sm:left-8 md:left-16 lg:left-36 top-1/2 -translate-y-1/2 z-40"
      />
      <AnimatedButton
        icon="mdi:chevron-right"
        onClick={onNext}
        size={40}
        borderRadius="rounded-full"
        positionClasses="hidden sm:flex absolute right-2 sm:right-8 md:right-16 lg:right-36 top-1/2 -translate-y-1/2 z-40"
      />
    </>
  )
}
