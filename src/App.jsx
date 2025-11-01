// App.jsx
import React, { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Footer from "./components/Footer"
import SidebarNav from "./components/SidebarNav"
import ScrollButtons from "./components/ScrollButtons"
import Home from "./pages/Home"
import Page01 from "./pages/Page01"
import Page02 from "./pages/Page02"
import Page03 from "./pages/Page03"
import Page04 from "./pages/Page04"
import Page05 from "./pages/Page05"
import FinalPage from "./pages/FinalPage"
import { AnimatedBackground } from "./components/AnimatedBackground"
import useHashNavigation from "./hooks/useHashNavigation"

const SECTIONS = [
  { id: "Page00", Comp: Home },
  { id: "Page01", Comp: Page01 },
  { id: "Page02", Comp: Page02 },
  { id: "Page03", Comp: Page03 },
  { id: "Page04", Comp: Page04 },
  { id: "Page05", Comp: Page05 },
  { id: "FinalPage", Comp: FinalPage },
]

export default function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const touchStartX = useRef(null)

  const scrollToIndex = (i) => {
    if (i === index) return
    setDirection(i > index ? 1 : -1)
    setIndex(i)
  }

  const onPrev = () => {
    if (index > 0) {
      setDirection(-1)
      setIndex(index - 1)
    }
  }

  const onNext = () => {
    if (index < SECTIONS.length - 1) {
      setDirection(1)
      setIndex(index + 1)
    }
  }

  const goToSlide = (id) => {
    const i = SECTIONS.findIndex((s) => s.id === id)
    if (i !== -1) {
      setDirection(i > index ? 1 : -1)
      setIndex(i)
    }
  }

  const CurrentPage = SECTIONS[index].Comp

  useHashNavigation(setIndex, SECTIONS.length)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [index])

  // ===== GESTOS TÁCTILES =====
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    // Umbral para evitar falsos positivos
    if (Math.abs(diff) > 80) {
      if (diff > 0) onNext() // swipe izquierda → siguiente
      else onPrev() // swipe derecha → anterior
    }

    touchStartX.current = null
  }

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* Fondo principal */}
      <div className="fixed inset-0 -z-20 bg-[linear-gradient(120deg,#001219_0%,#000a11_100%)] bg-no-repeat bg-cover" />
      <AnimatedBackground />

      {/* Barra lateral */}
      <SidebarNav
        sections={SECTIONS}
        currentIndex={index}
        onSelect={scrollToIndex}
      />

      {/* Contenido principal */}
      <main
        className="flex-1 flex flex-col relative overflow-hidden sm:items-center sm:justify-center touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="w-full min-h-screen flex justify-center items-center px-0 sm:px-4"
          >
            <CurrentPage onSlide={goToSlide} />
          </motion.div>
        </AnimatePresence>

        {/* Botones de navegación */}
        <ScrollButtons onPrev={onPrev} onNext={onNext} />
      </main>

      <Footer />
    </div>
  )
}
