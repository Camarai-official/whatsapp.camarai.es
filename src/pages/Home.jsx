import Slide from "../components/Slide.jsx"
import Img from "../assets/camarai_whatsapp.webp"
import { useTranslation } from "../hooks/useTranslation.jsx"

export default function Home({ onSlide }) {
  const { t } = useTranslation()

  return (
    <Slide
      layout={1}
      title={
        <>
          <span className="bg-gradient-to-r from-[#78A3ED] via-[#9B6EFD] to-[#F0768C] bg-clip-text text-transparent"> {t("home.title1")} </span> <br />
          <span className="text-white">
            {t("home.title2")} <br />
            {t("home.title3")}{" "}
          </span>
          <span className="text-green-400">{t("home.title4")}</span>
        </>
      }
      subtitle={t("home.subtitle")}
      primaryButton={{ text: t("home.primaryButton"), icon: "mynaui:rocket-solid" }}
      secondaryButton={{ text: t("home.secondaryButton"), goTo: "Page01" }}
      contentImg={Img}
      onSlide={onSlide}
    />

  )
}
