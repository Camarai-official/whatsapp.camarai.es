import React from "react"
import Logo from "../assets/camarai_logo.webp"
import { useTranslation } from "../hooks/useTranslation.jsx"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="Page03" className="w-full xl:fixed xl:bottom-0 xl:z-20">
      <div className="container mx-auto py-4 px-4 xl:px-6 flex items-center justify-between relative">

        {/* ===== Texto izquierda (solo desktop) ===== */}
        <p className="hidden xl:block text-xs xl:text-sm text-slate-300 leading-none">
          &copy; {new Date().getFullYear()} Camarai. {t("footer.copyright")}
        </p>

        {/* ===== Logo centrado (visible siempre) ===== */}
        <a
          href="https://camarai.es"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 xl:gap-2 leading-none absolute left-1/2 transform -translate-x-1/2 cursor-pointer hover:opacity-90"
        >
          <img
            src={Logo}
            alt="Camarai Logo"
            className="h-6 xl:h-8 w-auto object-contain align-middle"
          />
          <span className="text-white font-semibold tracking-wide text-xs xl:text-[15px] leading-none">
            camarai.es
          </span>
        </a>

        {/* ===== Enlaces derecha (solo desktop) ===== */}
        <div className="hidden xl:flex items-center gap-4 text-xs xl:text-sm font-medium leading-none">
          <a href="https://www.camarai.es/privacy-policy" target="_blank" className="text-slate-300 hover:text-slate-200">
            {t("footer.policy")}
          </a>
          <a href="https://www.camarai.es/terms" target="_blank" className="text-slate-300 hover:text-slate-200">
            {t("footer.terms")}
          </a>
        </div>
      </div>
    </footer>
  )
}
