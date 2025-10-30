// App.jsx
import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SidebarNav from "./components/SidebarNav"
import ScrollButtons from "./components/ScrollButtons"
import Home from "./pages/Home"
import Page01 from "./pages/Page01"
import Page02 from "./pages/Page02"
import Page03 from "./pages/Page03"
import { AnimatedBackground } from "./components/AnimatedBackground"
import { AnimatePresence } from "framer-motion"

const SECTIONS = [
  { id: "home", Comp: Home },
  { id: "Page01", Comp: Page01 },
  { id: "Page02", Comp: Page02 },
  { id: "Page03", Comp: Page03 }
]

export default function App() {
  const [index, setIndex] = useState(0)
  const scrollToIndex = (i) => setIndex(i)
  const onPrev = () => setIndex(Math.max(0, index - 1))
  const onNext = () => setIndex(Math.min(SECTIONS.length - 1, index + 1))
  const CurrentPage = SECTIONS[index].Comp

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Fondo */}
      <div className="fixed inset-0 -z-20 bg-[linear-gradient(120deg,#001219_0%,#000a11_100%)] bg-no-repeat bg-cover" />
      <AnimatedBackground />

      {/* <Header /> */}
      <SidebarNav sections={SECTIONS} currentIndex={index} onSelect={scrollToIndex} />

      <main className="flex-1 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <CurrentPage key={SECTIONS[index].id} />
        </AnimatePresence>
        <ScrollButtons onPrev={onPrev} onNext={onNext} />
      </main>

      <Footer />
    </div>
  )
}
