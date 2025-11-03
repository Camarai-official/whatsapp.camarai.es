import Slide from "../components/Slide.jsx"
import img10 from "../assets/10.webp"
import img11 from "../assets/11.webp"
import img12 from "../assets/12.webp"

const cards = [
  {
    title: '<span class="text-slate-400 pr-1 font-bold">1</span> Pedido',
    desc: "Clic en “Acceder con WhatsApp”. <br/> Camarai identifica el número y solicita un OTP mediante la API oficial de WhatsApp.",
    desc2: "Inicio sin contraseñas ni formularios; experiencia fluida desde el primer clic.",
    img: img10,
  },
  {
    title: '<span class="text-slate-400 pr-1 font-bold">2</span> Validación',
    desc: "El usuario ingresa el código recibido en WhatsApp. <br/> El código se valida en tiempo real y se gestiona el perfil (creación o actualización).",
    desc2: "Seguridad inmediata y sin esperas.",
    img: img11,
  },
  {
    title: '<span class="text-slate-400 pr-1 font-bold">3</span> Conexión',
    desc: "Acceso instantáneo a la plataforma. <br/> La información del usuario se sincroniza automáticamente con la base de datos o CRM.",
    desc2: "Autenticación que permite entrar, conectar y retener.",
    img: img12,
  },
]

export default function Page03() {
  return (
    <Slide
      layout={2}
      title="Haz del login tu mejor estrategia de atención y fidelización"
      subtitle="Cada fricción en el acceso es una barrera invisible que aleja a tus usuarios. Camarai Login elimina esa fricción con un flujo tan natural como enviar un mensaje de WhatsApp."
      cards={cards}
      imgSize={20}
      accentColor1="border-cyan-300/60"
      accentColor2="border-green-300/60"
      primaryButton={{ text: "Pruébalo ya!", icon: "mynaui:rocket-solid" }}
    />
  )
}
