import React from "react"
import Slide from "../components/Slide.jsx"
import { Icon } from "@iconify/react"
import { useTranslation } from "../hooks/useTranslation.jsx"

import Img from "../assets/camarai_rocket.webp"
import Img1 from "../assets/1.webp"
import Img2 from "../assets/2.webp"
import Img7 from "../assets/7.webp"
import Img9 from "../assets/9.webp"

export default function FinalPage({ onSlide }) {
  const { t } = useTranslation()

  // === DATA: CARDS ===
  const cards = [
    {
      img: Img1,
      title: t("finalPage.cards.card1.title"),
      desc: t("finalPage.cards.card1.desc"),
    },
    {
      img: Img9,
      title: t("finalPage.cards.card2.title"),
      desc: t("finalPage.cards.card2.desc"),
    },
    {
      img: Img2,
      title: t("finalPage.cards.card3.title"),
      desc: t("finalPage.cards.card3.desc"),
    },
    {
      img: Img7,
      title: t("finalPage.cards.card4.title"),
      desc: t("finalPage.cards.card4.desc"),
    },
  ]

  return (
    <Slide
      layout={4} // 👉 Usamos el nuevo formato 4
      contentImg={Img}
      title={t("finalPage.title")}
      subtitle={t("finalPage.subtitle")}
      cards={cards}
      accentColor1="border-slate-400"
      primaryButton={{
        text: t("finalPage.primaryButton"),
        icon: "mynaui:rocket-solid",
      }}
      secondaryButton={{
        text: t("finalPage.secondaryButton"),
        icon: "mynaui:chat-dots-solid",
      }}
    />
  )
}
