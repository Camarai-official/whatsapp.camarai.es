// src/pages/Page02.jsx
import Slide from "../components/Slide.jsx"
import img7 from "../assets/7.webp"
import img8 from "../assets/8.webp"
import img9 from "../assets/9.webp"
import { useTranslation } from "../hooks/useTranslation.jsx"

export default function Page02({ onSlide }) {
  const { t } = useTranslation()

  const cards = [
    {
      title: t("page02.cards.card1.title"),
      desc: t("page02.cards.card1.desc"),
      desc2: t("page02.cards.card1.desc2"),
      img: img7
    },
    {
      title: t("page02.cards.card2.title"),
      desc: t("page02.cards.card2.desc"),
      desc2: t("page02.cards.card2.desc2"),
      img: img8
    },
    {
      title: t("page02.cards.card3.title"),
      desc: t("page02.cards.card3.desc"),
      desc2: t("page02.cards.card3.desc2"),
      img: img9
    },
  ]

  return (
    <Slide
      layout={2}
      title={t("page02.title")}
      subtitle={t("page02.subtitle")}
      cards={cards}
      accentColor1="border-yellow-400/60"
      accentColor2="border-green-300/60"
      primaryButton={{ text: t("page02.primaryButton"), icon: "mynaui:rocket-solid", goTo: "Page03" }}
      onSlide={onSlide}
    />
  )
}
