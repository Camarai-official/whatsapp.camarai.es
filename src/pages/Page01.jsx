// src/pages/Page01.jsx
import Slide from "../components/Slide.jsx"
import RobotImg from "../assets/camarai pg1.png"
import { useTranslation } from "../hooks/useTranslation.jsx"

export default function Page01() {
  const { t } = useTranslation()

  return (
    <Slide
      layout={5}
      missionLabel={t("page01.missionLabel")}
      title1={t("page01.title1")}
      title2={t("page01.title2")}
      paragraph1={t("page01.paragraph1")}
      paragraph2={t("page01.paragraph2")}
      contentImg={RobotImg}
    />
  )
}
