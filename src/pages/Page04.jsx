import Slide from "../components/Slide.jsx"
import Img14 from "../assets/14.webp"
import LauraProfile from "../assets/LauraProfile.webp"
import { useTranslation } from "../hooks/useTranslation.jsx"

export default function Page04({ onSlide }) {
  const { t } = useTranslation()

  return (
    <Slide
      layout={3}
      title={t("page04.title")}
      subtitle={t("page04.subtitle")}
      headerImg={Img14}
      primaryButton={{ text: t("page04.primaryButton"), icon: "mynaui:rocket-solid", goTo: "Page05" }}
      onSlide={onSlide}
      testimonial={{
        img: LauraProfile,
        name: t("page04.testimonial.name"),
        role: t("page04.testimonial.role"),
        quote: t("page04.testimonial.quote"),
      }}
    />
  )
}
