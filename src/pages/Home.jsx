// pages/Home.jsx
import React from "react"
import PageWrapper from "../components/PageWrapper.jsx"
import RobotWhatsApp from "../assets/camarai_robot.webp"

export default function Home() {
  return (
<PageWrapper>
  <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
    <div className="flex-3 flex flex-col justify-center items-start text-left ">
      <h1 className="">Reinventamos el Login<br/>solo con WhatsApp</h1>
      <p className="my-4">
        Aprovecha la app de mensajería más popular del mundo para una experiencia de login segura y sin interrupciones.
      </p>
    </div>
    <div className="flex-2 flex justify-center items-center">
      <img
        src={RobotWhatsApp}
        alt="Robot WhatsApp"
        className="w-64 md:w-96 lg:w-full h-auto object-contain"
      />
    </div>
  </div>
</PageWrapper>

  )
}
