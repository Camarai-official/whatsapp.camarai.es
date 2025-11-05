import Slide from "../components/Slide.jsx"
import img10 from "../assets/10.webp"
import img11 from "../assets/11.webp"
import img12 from "../assets/12.webp"
import { useTranslation } from "../hooks/useTranslation.jsx"

export default function Page03({ onSlide }) {
  const { t } = useTranslation()

  const cards = [
    {
      title: t("page03.cards.card1.title"),
      desc: t("page03.cards.card1.desc"),
      desc2: t("page03.cards.card1.desc2"),
      img: img10,
    },
    {
      title: t("page03.cards.card2.title"),
      desc: t("page03.cards.card2.desc"),
      desc2: t("page03.cards.card2.desc2"),
      img: img11,
    },
    {
      title: t("page03.cards.card3.title"),
      desc: t("page03.cards.card3.desc"),
      desc2: t("page03.cards.card3.desc2"),
      img: img12,
    },
  ]

  return (
    <Slide
      layout={2}
      title={t("page03.title")}
      subtitle={t("page03.subtitle")}
      cards={cards}
      accentColor1="border-cyan-300/60"
      accentColor2="border-green-300/60"
      primaryButton={{ text: t("page03.primaryButton"), icon: "mynaui:rocket-solid", goTo: "Page04" }}
      onSlide={onSlide}
    />
  )
}
