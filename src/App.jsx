// App.jsx
import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SidebarNav from "./components/SidebarNav"
import ScrollButtons from "./components/ScrollButtons"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import { AnimatedBackground } from "./components/AnimatedBackground"
import { AnimatePresence } from "framer-motion"

const SECTIONS = [
  { id: "home", Comp: Home, icon: "mdi:home" },
  { id: "about", Comp: About, icon: "mdi:information-outline" },
  { id: "services", Comp: Services, icon: "mdi:cog-outline" },
  { id: "contact", Comp: Contact, icon: "mdi:email-outline" }
]

export default function App() {
  const [index, setIndex] = useState(0)
  const scrollToIndex = (i) => setIndex(i)
  const onPrev = () => setIndex(Math.max(0, index - 1))
  const onNext = () => setIndex(Math.min(SECTIONS.length - 1, index + 1))
  const CurrentPage = SECTIONS[index].Comp

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Fondo base */}
      <div className="fixed inset-0 -z-20 bg-[linear-gradient(120deg,#001219_0%,#000a11_100%)] bg-no-repeat bg-cover" />
      <AnimatedBackground />

      <Header />
      <SidebarNav sections={SECTIONS} currentIndex={index} onSelect={scrollToIndex} />

      <main className="flex-1 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <CurrentPage />
        </AnimatePresence>
        <ScrollButtons onPrev={onPrev} onNext={onNext} />
      </main>

      <Footer />
    </div>
  )
}
