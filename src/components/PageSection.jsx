import React from "react"
import { Icon } from "@iconify/react"

export default function PageSection({
  id,
  title,
  subtitle,
  layout = "grid",
  cards = [],
  testimonial,
  cta,
  headerImg,
  children,
  imgSize = 24 // 👈 tamaño por defecto de imágenes cuadradas (Tailwind units)
}) {
  const buttonVariants = {
    primary:
      "bg-green-400 text-slate-900 hover:bg-green-200 flex items-center gap-2 ",
    secondary:
      "border border-green-400/70 text-green-300 hover:bg-green-400/10",
    tertiary:
      "text-green-300 hover:text-green-100 underline decoration-green-400/60 decoration-2 underline-offset-4"
  }

  const baseButton =
    "px-6 py-3 rounded-xl font-semibold text-lg flex items-center justify-center"

  const items = cards.length > 0 ? cards : []

  return (
    <section
      id={id}
      className="w-[94vw] max-w-[1200px] h-[87vh] px-22 py-6 rounded-4xl
      bg-slate-950/90 backdrop-blur-xl border border-slate-300/30
      flex flex-col items-center justify-between gap-6"
    >
      
      {/* ===== HEADER ===== */}
      <header
        className={`w-full flex ${
          headerImg
            ? "flex-col md:flex-row items-center justify-center gap-6 text-left"
            : "flex-col items-center text-center"
        }`}
      >
        {headerImg && (
          <div className="relative flex justify-center items-center">
            {/* Luz difuminada detrás */}
            <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full blur-2xl bg-slate-400/50" />
            {/* Imagen del header */}
            <img
              src={headerImg}
              alt="Header visual"
              className="relative w-20 h-20 md:w-24 md:h-24 object-contain z-10"
            />
          </div>
        )}
        <div
          className={`flex flex-col ${
            headerImg
              ? "items-start text-left md:max-w-[600px]"
              : "items-center text-center"
          } gap-4`}
        >
          {title && (
            <h1 className="text-3xl md:text-4xl font-bold text-green-400">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-slate-400 text-base md:text-lg">{subtitle}</p>
          )}
        </div>
      </header>

      {/* ===== CONTENIDO ===== */}
      <div className="flex-1 w-full flex flex-col items-center justify-center gap-10">
        {layout === "grid" && items.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
            {items.map(({ title, action, ocurre, valor, desc, img, bgColor }, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-4 p-4 rounded-2xl bg-gray-950/20 hover:bg-gray-950/40 border border-slate-300/20 text-left hover:scale-[1.02]"
              >
                {/* Luz de fondo */}
                {bgColor && (
                  <div
                    className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full blur-xl ${bgColor}`}
                  />
                )}
                {/* Tamaño de imagen dinámico */}
                <div className="w-full flex justify-center items-center relative z-10">
                  <img
                    src={img}
                    alt={title}
                    className={`object-contain relative z-10 w-${imgSize} h-${imgSize}`}
                  />
                </div>

                <h3 className="text-md font-semibold text-green-400 text-center">{title}</h3>

                {action && <p className="text-slate-400 text-sm leading-snug">{action}</p>}
                {ocurre && <p className="text-slate-400 text-sm leading-snug">{ocurre}</p>}
                {valor && (
                  <p className="mt-2 text-sm text-white/90 font-medium border-l-2 border-green-400 pl-3">
                    {valor}
                  </p>
                )}
                {desc && <p className="text-slate-400 text-sm leading-snug text-center">{desc}</p>}
              </div>
            ))}
          </div>
        )}

        {/* ===== TESTIMONIAL ===== */}
        {layout === "testimonial" && testimonial && (
          <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto text-left">
            <div className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden bg-gray-700/20">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <blockquote className="flex-1 text-slate-100 italic text-base md:text-lg leading-relaxed">
              “{testimonial.quote}”
              <div className="mt-4 text-green-400 text-sm font-medium not-italic">
                — {testimonial.name}, {testimonial.role}
              </div>
            </blockquote>
          </div>
        )}

        {/* ===== CTA ===== */}
        {cta && (
          <div className="mt-8 flex justify-center">
            <a
              href={cta.href}
              className={`${baseButton} ${buttonVariants[cta.variant || "primary"]}`}
            >
              {cta.text}
              {cta.icon && <Icon icon={cta.icon} width={20} height={20} />}
            </a>
          </div>
        )}

        {children}
      </div>
    </section>
  )
}
