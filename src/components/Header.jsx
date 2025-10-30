import React from "react"
import Logo from "../assets/camarai_animated.gif"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-between px-4 md:px-8 bg-transparent">
      <div className="flex items-center">
        <img src={Logo} alt="Camarai Logo" className="h-16 w-auto" />
        <span className="text-white font-semibold tracking-wide -ml-2">camarai.es</span>
      </div>
    </header>
  )
}
