import Slide from "../components/Slide.jsx"
import { Icon } from "@iconify/react"
import camarai_pincode from "../assets/camarai_pincode.webp"

export default function Page05({ onSlide }) {
  return (
    <Slide
      layout={1}
      title="Ahora queremos que lo pruebes."
      subtitle="Te invitamos a probar Camarai Login en este mismo momento. Escanea el código QR en pantalla y comprueba por ti mismo la velocidad, seguridad y simplicidad de nuestro acceso."
      contentImg={camarai_pincode}
      primaryButton={{ text: "Solicitar PIN", icon: "mynaui:password" }}
    />
  )
}
