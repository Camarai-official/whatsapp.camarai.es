import Slide from "../components/Slide.jsx"
import { Icon } from "@iconify/react"
import camarai_pincode from "../assets/camarai_pincode.webp"
import { useTranslation } from "../hooks/useTranslation.jsx"

export default function Page05({ onSlide }) {
  const { t } = useTranslation()

  return (
    <Slide
      layout={1}
      title={t("page05.title")}
      subtitle={t("page05.subtitle")}
      contentImg={camarai_pincode}
      primaryButton={{ text: t("page05.primaryButton"), icon: "mynaui:password" }}
    />
  )
}
