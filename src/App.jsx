// App.jsx
import React, { useState } from "react"
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

  const scrollToIndex = (i) => setIndex(i)
  const onPrev = () => setIndex(Math.max(0, index - 1))
  const onNext = () => setIndex(Math.min(SECTIONS.length - 1, index + 1))

  const CurrentPage = SECTIONS[index].Comp

  // Activar navegación por hash (#Page01, #FinalPage, etc.)
  useHashNavigation(setIndex, SECTIONS.length)

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Fondo */}
      <div className="fixed inset-0 -z-20 bg-[linear-gradient(120deg,#001219_0%,#000a11_100%)] bg-no-repeat bg-cover" />
      <AnimatedBackground />

      {/* Sidebar lateral */}
      <SidebarNav
        sections={SECTIONS}
        currentIndex={index}
        onSelect={scrollToIndex}
      />

      {/* Contenido principal */}
      <main className="flex-1 flex items-center justify-center relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <CurrentPage />
        </div>
        <ScrollButtons onPrev={onPrev} onNext={onNext} />
      </main>

      <Footer />
    </div>
  )
}
