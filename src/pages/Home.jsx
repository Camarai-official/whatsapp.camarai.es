// pages/Home.jsx
import React from "react"
import PageWrapper from "../components/PageWrapper.jsx"
import WhatsappAnimation from "../components/WhatsAppAnimation.jsx"

export default function Home() {
  return (
<PageWrapper>
  <div className="flex flex-col md:flex-row items-center justify-center w-full h-full gap-8">
    <div className="flex-3 flex flex-col justify-center items-start text-left ">
      <h1 className="">Login Reinvented. <br/> Just with WhatsApp</h1>
      <p className="text-lg md:text-2xl max-w-xl mb-6 text-slate-300">
        Aprovecha la app de mensajería más popular del mundo para una experiencia de login segura y sin interrupciones.
      </p>
    </div>
    <div className="flex-2 flex justify-center items-center">
      <WhatsappAnimation className="w-64 h-64 md:w-80 md:h-80" />
    </div>
  </div>
</PageWrapper>

  )
}
