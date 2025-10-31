// hooks/useHashNavigation.js
import { useEffect } from "react"

export default function useHashNavigation(setIndex, totalSections) {
  useEffect(() => {
    if (typeof window === "undefined") return // Evita fallos en SSR

    const handleHashChange = () => {
      try {
        const hash = window.location.hash?.replace("#", "") || ""
        const match = hash.match(/^Page(\d{2})$/)
        if (match) {
          const idx = parseInt(match[1], 10)
          if (!Number.isNaN(idx) && idx >= 0 && idx < totalSections) {
            setIndex(idx)
          }
        }
      } catch (err) {
        console.error("Error en useHashNavigation:", err)
      }
    }

    // Ejecutar al montar
    handleHashChange()

    // Escuchar cambios de hash
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [setIndex, totalSections])
}
