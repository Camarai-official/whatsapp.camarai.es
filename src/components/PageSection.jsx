import React from "react"
import { Icon } from "@iconify/react"

export default function PageSection({
  id,
  title,
  subtitle,
  layout = "grid",
  cards = [],
  steps = [],
  testimonial,
  cta,
  headerImg, // ✅ Imagen opcional en el header
  children
}) {
  const buttonVariants = {
    primary:
      "bg-green-400 text-slate-900 hover:bg-green-200 flex items-center gap-2 transition-all",
    secondary:
      "border border-green-400/70 text-green-300 hover:bg-green-400/10 transition-colors",
    tertiary:
      "text-green-300 hover:text-green-100 underline decoration-green-400/60 decoration-2 underline-offset-4 transition-colors"
  }

  const baseButton =
    "px-6 py-3 rounded-xl font-semibold text-lg flex items-center justify-center"

  return (
    <section
      id={id}
      className="w-[94vw] max-w-[1200px] h-[88vh] px-22 py-6 rounded-4xl
      bg-slate-950/90 backdrop-blur-xl border border-slate-300/30
      flex flex-col items-center justify-between gap-4"
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
          <img
            src={headerImg}
            alt="Header visual"
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        )}
        <div
          className={`flex flex-col ${
            headerImg
              ? "items-start text-left md:max-w-[600px]"
              : "items-center text-center"
          } gap-2`}
        >
          {title && (
            <h1 className="text-3xl md:text-4xl font-bold text-green-400">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-slate-400 text-base md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </header>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <div className="flex-1 w-full flex flex-col items-center justify-center gap-10">
        {/* GRID */}
        {layout === "grid" && cards.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl mx-auto">
            {cards.map(({ title, desc, img, bgColor }, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-4 py-4 px-3 rounded-2xl bg-gray-950/20 hover:bg-gray-950/40 border border-slate-300/20 text-left transition-transform hover:scale-[1.02]"
              >
                {bgColor && (
                  <div
                    className={`absolute w-12 h-12 rounded-full blur-2xl left-1/2 -translate-x-1/2 ${bgColor}`}
                  />
                )}
                <div className="w-full h-16 flex justify-center items-center relative z-10">
                  <img src={img} alt={title} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-green-400 text-center">{title}</h3>
                <p className="text-slate-400 text-sm leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* STEPS */}
        {layout === "steps" && steps.length > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl mx-auto">
            {steps.map(({ title, action, ocurre, valor, img, bgColor }, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-4 p-4 rounded-2xl bg-gray-950/20 hover:bg-gray-950/40 border border-slate-300/20 flex-1 text-left"
              >
                <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full blur-xl ${bgColor}`} />
                <div className="w-full h-28 flex justify-center items-center">
                  <img src={img} alt={title} className="w-24 h-24 object-contain relative z-10" />
                </div>
                <h3 className="text-xl font-semibold text-green-400 text-center">{title}</h3>
                <p className="text-slate-400 text-sm leading-snug">{action}</p>
                <p className="text-slate-400 text-sm leading-snug">{ocurre}</p>
                <p className="mt-2 text-sm text-white/90 font-medium border-l-2 border-green-400 pl-3">
                  {valor}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TESTIMONIAL */}
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

        {/* CTA */}
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
