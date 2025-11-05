// src/pages/Page01.jsx
import Slide from "../components/Slide.jsx"
import img1 from "../assets/1.webp"
import img2 from "../assets/2.webp"
import img3 from "../assets/3.webp"
import img4 from "../assets/4.webp"
import img5 from "../assets/5.webp"
import img6 from "../assets/6.webp"
import { useTranslation } from "../hooks/useTranslation.jsx"

export default function Page01() {
  const { t } = useTranslation()

  const cards = [
    {
      title: t("page01.cards.card1.title"),
      desc: t("page01.cards.card1.desc"),
      img: img1
    },
    {
      title: t("page01.cards.card2.title"),
      desc: t("page01.cards.card2.desc"),
      img: img2
    },
    {
      title: t("page01.cards.card3.title"),
      desc: t("page01.cards.card3.desc"),
      img: img3
    },
    {
      title: t("page01.cards.card4.title"),
      desc: t("page01.cards.card4.desc"),
      img: img4
    },
    {
      title: t("page01.cards.card5.title"),
      desc: t("page01.cards.card5.desc"),
      img: img5
    },
    {
      title: t("page01.cards.card6.title"),
      desc: t("page01.cards.card6.desc"),
      img: img6
    }
  ]

  return (
    <Slide
      layout={2}
      title={t("page01.title")}
      subtitle={t("page01.subtitle")}
      cards={cards}
    />
  )
}
