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
  imgSize = 24
}) {
  const buttonVariants = {
    primary:
      "bg-green-400 text-slate-900 hover:bg-green-200 flex items-center gap-2 cursor-pointer",
    secondary:
      "border border-green-400/70 text-green-300 hover:bg-green-400/10 cursor-pointer",
    tertiary:
      "text-green-300 hover:text-green-100 underline decoration-green-400/60 decoration-2 underline-offset-4 cursor-pointer"
  }

  const baseButton =
    "px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center cursor-pointer"

  const items = cards.length > 0 ? cards : []

  // Mapeo de tamaños de imagen a clases Tailwind válidas
  const imgSizeClasses = {
    12: "w-12 h-12",
    14: "w-14 h-14",
    16: "w-16 h-16",
    20: "w-20 h-20",
    24: "w-24 h-24",
    32: "w-32 h-32"
  }

  const imgClass = imgSizeClasses[imgSize] || imgSizeClasses[24]

  return (
<section
  id={id}
  className="w-full sm:w-[94vw] max-w-[1200px] min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] md:h-[87vh] 
  px-4 sm:px-8 md:px-12 lg:px-22 py-12 sm:py-8 
  rounded-none sm:rounded-4xl border-0 sm:border border-slate-300/30
  bg-slate-950/90 backdrop-blur-xl 
  flex flex-col items-center justify-between gap-2 sm:gap-4
  my-0 sm:my-8 mx-auto"
>

      
      {/* ===== HEADER ===== */}
      <header
  className={`w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 ${
    headerImg ? "text-center sm:text-left" : "text-center"
  }`}
>
  {headerImg && (
    <div className="relative flex justify-center items-center flex-shrink-0 mb-2 sm:mb-0">
      {/* Luz difuminada detrás */}
      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full blur-2xl bg-slate-400/50" />
      {/* Imagen del header */}
      <img
        src={headerImg}
        alt="Header visual"
        className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain z-10"
      />
    </div>
  )}

  <div
    className={`flex flex-col ${
      headerImg
        ? "items-center sm:items-start text-center sm:text-left"
        : "items-center text-center"
    } gap-2 sm:gap-4`}
  >
    {title && (
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 leading-tight">
        {title}
      </h1>
    )}
    {subtitle && (
      <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
</header>


      {/* ===== CONTENIDO ===== */}
      <div className="flex-1 w-full flex flex-col items-center justify-center gap-6 sm:gap-8 overflow-y-auto">
        {layout === "grid" && items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl mx-auto px-2">
            {items.map(({ title, action, ocurre, valor, desc, img, bgColor }, i) => (
              <div
                key={i}
                className="relative flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl 
                bg-gray-950/20 hover:bg-gray-950/40 border border-slate-300/20 text-left 
                hover:scale-[1.02] transition-transform duration-200"
              >
                {/* Luz de fondo */}
                {bgColor && (
                  <div
                    className={`absolute top-3 sm:top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full blur-xl ${bgColor}`}
                  />
                )}
                {/* Tamaño de imagen dinámico */}
                <div className="w-full flex justify-center items-center relative z-10">
                  <img
                    src={img}
                    alt={title}
                    className={`object-contain relative z-10 ${imgClass}`}
                  />
                </div>

                <h3 className="text-sm sm:text-md font-semibold text-green-400 text-center">{title}</h3>

                {action && <p className="text-slate-400 text-xs sm:text-sm leading-snug">{action}</p>}
                {ocurre && <p className="text-slate-400 text-xs sm:text-sm leading-snug">{ocurre}</p>}
                {valor && (
                  <p className="mt-2 text-xs sm:text-sm text-white/90 font-medium border-l-2 border-green-400 pl-2 sm:pl-3">
                    {valor}
                  </p>
                )}
                {desc && <p className="text-slate-400 text-xs sm:text-sm leading-snug text-center">{desc}</p>}
              </div>
            ))}
          </div>
        )}

        {/* ===== TESTIMONIAL ===== */}
        {layout === "testimonial" && testimonial && (
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 max-w-4xl mx-auto text-left px-4">
            <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-700/20">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <blockquote className="flex-1 text-slate-100 italic text-sm sm:text-base md:text-lg leading-relaxed">
              "{testimonial.quote}"
              <div className="mt-3 sm:mt-4 text-green-400 text-xs sm:text-sm font-medium not-italic">
                — {testimonial.name}, {testimonial.role}
              </div>
            </blockquote>
          </div>
        )}

        {/* ===== CTA ===== */}
        {cta && (
          <div className="flex justify-center">
            {cta.action === "slide" ? (
              <button
                onClick={() => cta.onSlide && cta.onSlide(cta.target)}
                className={`${baseButton} ${buttonVariants[cta.variant || "primary"]}`}
              >
                {cta.text}
                {cta.icon && <Icon icon={cta.icon} width={18} height={18} />}
              </button>
            ) : (
              <a
                href={cta.target || cta.href}
                target={cta.newTab ? "_blank" : "_self"}
                className={`${baseButton} ${buttonVariants[cta.variant || "primary"]}`}
              >
                {cta.text}
                {cta.icon && <Icon icon={cta.icon} width={18} height={18} />}
              </a>
            )}
          </div>
        )}


        {children}
      </div>
    </section>
  )
}
