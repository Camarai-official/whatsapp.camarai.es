// src/components/ScrollButtons.jsx
import React from "react"
import AnimatedButton from "./AnimatedButton"

export default function ScrollButtons({ onPrev, onNext }) {
  return (
    <>
      <AnimatedButton
        icon="mdi:chevron-left"
        onClick={onPrev}
        size={48}
        borderRadius="rounded-full"
        positionClasses="hidden md:flex absolute left-36 top-1/2 -translate-y-1/2 z-40"
      />
      <AnimatedButton
        icon="mdi:chevron-right"
        onClick={onNext}
        size={48}
        borderRadius="rounded-full"
        positionClasses="hidden md:flex absolute right-36 top-1/2 -translate-y-1/2 z-40"
      />
    </>
  )
}
