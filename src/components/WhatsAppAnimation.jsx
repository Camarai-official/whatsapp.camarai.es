// components/WhatsappAnimation.jsx
import React from "react"
import Lottie from "lottie-react"
import whatsappLoop from "../assets/whatsapp_loop.json"

export default function WhatsappAnimation({ className, loop = true }) {
  return <Lottie animationData={whatsappLoop} loop={loop} className={className} />
}
