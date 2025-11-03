import Slide from "../components/Slide.jsx"
import Img14 from "../assets/14.webp"
import LauraProfile from "../assets/LauraProfile.webp"

export default function Page04({ onSlide }) {
  return (
    <Slide
      layout={3}
      title="“Ahora sé quién hizo qué”"
      subtitle="Laura comparte cómo Camarai Login transformó la seguridad y trazabilidad en su negocio."
      headerImg={Img14}
      primaryButton={{ text: "Prueba Camarai Login", icon: "mynaui:rocket-solid", goTo: "Page05" }}
      onSlide={onSlide}
      testimonial={{
        img: LauraProfile,
        name: "Laura Vílchez",
        role: "Retail Manager",
        quote:
          "Nuestro mayor riesgo en el retail no era la lentitud, sino la vulnerabilidad en la caja. Antes de Camarai, los empleados a menudo usaban contraseñas genéricas o compartían la clave de supervisor. Cuando había discrepancias de inventario, era imposible saber quién fue el responsable. Al enlazar el acceso al TPV con el WhatsApp personal de cada encargado, garantizamos una autenticación única y no transferible. El resultado: un sistema increíblemente rápido (5 segundos en caja) y la certeza de que cada operación crítica es realizada por la persona autorizada.",
      }}
    />
  )
}
