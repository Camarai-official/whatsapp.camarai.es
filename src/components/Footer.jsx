import React from "react"

export default function Footer() {
  return (
    <footer
      id="contact"
      className="fixed bottom-0 w-full z-20"
    >
      <div className="container mx-auto py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm text-slate-200">
            &copy; {new Date().getFullYear()} WhatsApp Login Accelerator. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <a
            href="#"
            className="text-gray-400 transition-colors hover:text-slate-200"
          >
            Política de Privacidad
          </a>
          <a
            href="#"
            className="text-gray-400 transition-colors hover:text-slate-200"
          >
            Términos de Servicio
          </a>
        </div>
      </div>
    </footer>
  )
}
