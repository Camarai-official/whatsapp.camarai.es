import React from "react"
import Logo from "../assets/camarai_logo.webp"

export default function Footer() {
  return (
<footer id="Page03" className="fixed bottom-0 w-full z-20">
  <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
    
    <p className="text-sm text-slate-300 leading-none">
      &copy; {new Date().getFullYear()} WhatsApp Login Accelerator. Todos los derechos reservados.
    </p>

    <a
      href="https://camarai.es"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 leading-none absolute left-1/2 transform -translate-x-1/2 cursor-pointer hover:opacity-90 transition-opacity"
    >
      <img
        src={Logo}
        alt="Camarai Logo"
        className="h-8 w-auto object-contain align-middle"
      />
      <span className="text-white font-semibold tracking-wide text-[15px] leading-none">
        camarai.es
      </span>
    </a>


    <div className="flex items-center gap-4 text-sm font-medium leading-none">
      <a href="#" className="text-slate-300 transition-colors hover:text-slate-200">
        Política de Privacidad
      </a>
      <a href="#" className="text-slate-300 transition-colors hover:text-slate-200">
        Términos de Servicio
      </a>
    </div>
  </div>
</footer>



  )
}
