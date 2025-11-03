import React from "react"
import Logo from "../assets/camarai_logo.webp"

export default function Footer() {
  return (
    <footer id="Page03" className="w-full lg:fixed lg:bottom-0 lg:z-20">
      <div className="container mx-auto py-4 px-4 lg:px-6 flex items-center justify-between relative">
        
        {/* ===== Texto izquierda (solo desktop) ===== */}
        <p className="hidden lg:block text-xs lg:text-sm text-slate-300 leading-none">
          &copy; {new Date().getFullYear()} 2025 Camarai. Todos los derechos reservados.
        </p>

        {/* ===== Logo centrado (visible siempre) ===== */}
        <a
          href="https://camarai.es"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 lg:gap-2 leading-none absolute left-1/2 transform -translate-x-1/2 cursor-pointer hover:opacity-90"
        >
          <img
            src={Logo}
            alt="Camarai Logo"
            className="h-6 lg:h-8 w-auto object-contain align-middle"
          />
          <span className="text-white font-semibold tracking-wide text-xs lg:text-[15px] leading-none">
            camarai.es
          </span>
        </a>

        {/* ===== Enlaces derecha (solo desktop) ===== */}
        <div className="hidden lg:flex items-center gap-4 text-xs lg:text-sm font-medium leading-none">
          <a href="https://www.camarai.es/privacy-policy" target="_blank" className="text-slate-300 hover:text-slate-200">
            Política
          </a>
          <a href="https://www.camarai.es/terms" target="_blank" className="text-slate-300 hover:text-slate-200">
            Términos
          </a>
        </div>
      </div>
    </footer>
  )
}
