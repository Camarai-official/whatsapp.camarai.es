import React from "react"
import { Icon } from "@iconify/react"
import PageSection from "../components/PageSection.jsx"
import camarai_pincode from "../assets/camarai_pincode.webp"

export default function Page05() {
  return (
    <PageSection
      id="page05"
      title="Ahora, queremos que lo experimentes."
      subtitle="Te invitamos a probar Camarai Login en este mismo momento. Escanea el código QR en pantalla y comprueba por ti mismo la velocidad, seguridad y simplicidad de nuestro acceso."
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Brillo de fondo (decorativo) */}
          <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
            <div className="w-[700px] h-[700px] bg-green-400/40 rounded-full blur-[160px]" />
          </div>

        {/* Imagen del QR */}
        <img
          src={camarai_pincode}
          alt="QR demo"
          className="h-100 w-auto mx-auto relative z-10"
        />

        {/* Botón */}
        <a
          href="#FinalPage"
          className="px-6 py-3 rounded-xl bg-green-400 text-slate-900 font-semibold text-lg hover:bg-green-200 flex items-center gap-2"
        >
          Solicitar PIN
          <Icon icon="mynaui:password" width={20} height={20} />
        </a>
      </div>
    </PageSection>
  )
}
