// pages/About.jsx
import React from "react"
import PageWrapper from "../components/PageWrapper.jsx"

export default function About() {
  return (
  <PageWrapper>
    <h1 className="text-5xl md:text-7xl font-bold mb-6">About</h1>
    <p className="text-lg md:text-2xl max-w-xl">
      Información sobre la empresa o proyecto. Puedes poner aquí texto descriptivo o contenido adicional.
    </p>
  </PageWrapper>

  )
}
