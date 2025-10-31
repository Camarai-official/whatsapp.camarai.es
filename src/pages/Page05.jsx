import React from "react"
import PageSection from "../components/PageSection.jsx"
import step1Icon from "../assets/10.webp"

export default function Page05() {
  return (
    <PageSection
      id="page05"
      title="Ahora, queremos que lo experimentes."
      subtitle="Te invitamos a probar Camarai Login en este mismo momento. Escanea el código QR en pantalla y comprueba por ti mismo la velocidad, seguridad y simplicidad de nuestro acceso."
      cta={{ text: "Comenzar demo", href: "#FinalPage", variant: "primary" }}
    >
      <img src={step1Icon} alt="QR demo" className="h-64 w-64 mx-auto" />
    </PageSection>
  )
}
