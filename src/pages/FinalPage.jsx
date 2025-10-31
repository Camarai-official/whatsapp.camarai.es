import React from "react"
import PageSection from "../components/PageSection.jsx"
import { Icon } from "@iconify/react"
import Img13 from "../assets/13.webp"

export default function FinalPage() {
  return (
    <PageSection
      id="FinalPage"
      title="¡Ya lo experimentaste! Ahora escala la transformación."
      subtitle="Camarai Login no es solo un demo: es tu nueva realidad operativa."
      headerImg={Img13}
    >
      <div className="flex flex-col items-center justify-center gap-12 w-full mt-6 md:mt-10">
        {/* === BLOQUE DE BENEFICIOS === */}
        <div className="bg-white/5 rounded-3xl p-6 md:p-10 w-full max-w-4xl text-left border border-white/10 hover:border-green-400/30 transition-all shadow-lg shadow-black/30">
          <h3 className="text-2xl md:text-3xl font-semibold text-green-400 mb-6">
            Beneficios que tu empresa obtiene al implementarlo:
          </h3>
          <ul className="space-y-3 text-slate-300 text-base md:text-lg leading-relaxed">
            <li className="flex items-start gap-2">
              <Icon icon="lucide:clock" className="text-green-400 mt-1" />
              <span>
                Acceso en <strong>{"<5s"}</strong> vs minutos de login o reseteos.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <Icon icon="lucide:shield-check" className="text-green-400 mt-1" />
              <span>Seguridad inherente con autenticación passwordless.</span>
            </li>

            <li className="flex items-start gap-2">
              <Icon icon="lucide:activity" className="text-green-400 mt-1" />
              <span>Trazabilidad completa de todas las operaciones.</span>
            </li>

            <li className="flex items-start gap-2">
              <Icon icon="lucide:sparkles" className="text-green-400 mt-1" />
              <span>Cero fricción para equipos comerciales y operativos.</span>
            </li>
          </ul>

        </div>

        {/* === BLOQUE DE ACCIÓN FINAL === */}
        <div className="space-y-6 text-slate-300 w-full max-w-4xl text-center">
          <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Próximos pasos para llevar esto a toda tu organización:
          </h4>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Botón primario */}
            <a
              href="#"
              className="px-6 py-3 rounded-xl bg-green-400 text-slate-900 font-semibold text-lg hover:bg-green-200 flex items-center gap-2 transition-all shadow-md shadow-green-400/20"
            >
              Implementar en Mi Empresa
              <Icon icon="mynaui:rocket-solid" width={20} height={20} />
            </a>

            {/* Botón secundario */}
            <a
              href="#"
              className="px-6 py-3 rounded-xl border border-green-400/70 text-green-300 font-semibold text-lg hover:bg-green-400/10 transition-colors flex items-center gap-2"
            >
              Hablar con Especialista
              <Icon icon="mynaui:chat-dots-solid" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
