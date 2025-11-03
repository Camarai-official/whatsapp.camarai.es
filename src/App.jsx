// App.jsx
import { useState, useRef, useEffect } from "react"
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
  const [offset, setOffset] = useState(0)
  const touchStartX = useRef(null)

  const onPrev = () => setIndex((i) => Math.max(i - 1, 0))
  const onNext = () => setIndex((i) => Math.min(i + 1, SECTIONS.length - 1))
  const goToSlide = (id) => {
    const i = SECTIONS.findIndex((s) => s.id === id)
    if (i !== -1) setIndex(i)
  }

  useHashNavigation(setIndex, SECTIONS.length)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [index])

  // Gestos táctiles
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX)
  const handleTouchMove = (e) =>
    touchStartX.current && setOffset(e.touches[0].clientX - touchStartX.current)
  const handleTouchEnd = () => {
    if (offset < -80) onNext()
    else if (offset > 80) onPrev()
    setOffset(0)
    touchStartX.current = null
  }

  return (
    <div className="relative flex flex-col overflow-x-hidden">
      {/* Fondo animado */}
      <AnimatedBackground />

      {/* Barra lateral */}
      <SidebarNav
        sections={SECTIONS}
        currentIndex={index}
        onSelect={setIndex}
      />

      {/* Contenido principal */}
      <main
        className="relative w-full flex justify-center items-center py-10 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          {(() => {
            const CurrentComp = SECTIONS[index].Comp // ✅ Asignamos el componente dinámico
            return (
              <motion.div
                key={SECTIONS[index].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.45, 0, 0.55, 1] }}
                className="w-full flex justify-center"
              >
                <div className="w-full max-w-[1200px]">
                  <CurrentComp onSlide={goToSlide} /> {/* ✅ Se renderiza correctamente */}
                </div>
              </motion.div>
            )
          })()}
        </AnimatePresence>


        <ScrollButtons onPrev={onPrev} onNext={onNext} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
