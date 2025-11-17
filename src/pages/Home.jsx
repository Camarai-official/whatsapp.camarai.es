import Slide from "../components/Slide.jsx"
import Img from "../assets/camarai_whatsapp.webp"
import CamaraiGif from "../assets/camarai.gif"
import { useTranslation } from "../hooks/useTranslation.jsx"

export default function Home({ onSlide }) {
  const { t } = useTranslation()

  return (
    <Slide
      layout={1}
      headerImg={CamaraiGif}
      title={
        <>
          {t("home.title1")} <br />
          {t("home.title2")}
        </>
      }
      subtitle={t("home.subtitle")}
      primaryButton={{ text: t("home.primaryButton"), goTo: "Page01" }}
      onSlide={onSlide}
    />

  )
}
