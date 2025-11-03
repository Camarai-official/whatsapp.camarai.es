import Slide from "../components/Slide.jsx"
import Img from "../assets/camarai_whatsapp.webp"

export default function Home({ onSlide }) {
  return (
    <Slide
      layout={1}
      title={
        <>
          <span className="text-violet-400">Camarai</span> <br />
          <span className="text-white">
            reinventa el Login <br />
            solo con{" "}
          </span>
          <span className="text-green-400">WhatsApp</span>
        </>
      }
      subtitle="Aprovecha la app de mensajería más popular del mundo para ofrecer una experiencia de autenticación instantánea, segura y sin fricciones."
      primaryButton={{ text: "Comenzar", icon: "mynaui:rocket-solid" }}
      secondaryButton={{ text: "Conocer más" }}
      contentImg={Img}
    />

  )
}
