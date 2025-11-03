// Slide.jsx
import { Icon } from "@iconify/react";

export default function Slide({
  headerImg,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  layout = 1,
  contentImg,
  cards = [],
  accentColor1,
  accentColor2,
  testimonial = null,
  onSlide,
}) {

  /** 🧩 Botones reutilizables (para footer y layout 1) */
  const renderButtons = () => (
    <div className="flex flex-wrap gap-4 mt-4 lg:justify-start justify-center">
      {secondaryButton && (
        <button
          className="px-6 py-3 rounded-xl font-semibold outline outline-green-600 text-green-300 hover:bg-green-400/10 cursor-pointer"
          onClick={() => onSlide?.(secondaryButton.goTo)}
        >
          {secondaryButton.text}
        </button>
      )}
      {primaryButton && (
        <button
          className="px-6 py-3 rounded-xl font-semibold bg-green-400 text-slate-900 hover:bg-green-300 flex items-center gap-2 cursor-pointer"
          onClick={() => onSlide?.(primaryButton.goTo)}
        >
          {primaryButton.text}
          {primaryButton.icon && (
            <Icon icon={primaryButton.icon} className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );

  /** Card reutilizable (para layout 2 y 4) */
  const renderCard = (card, i) => (
    <div
      key={i}
      className="rounded-2xl p-4 flex flex-col items-center justify-between 
                 bg-gray-950/60 border border-slate-300/20 
                 hover:scale-[1.02] transition-all gap-2"
    >
      {/* Imagen con glow */}
      {card.img && (
        <div className="relative flex items-center justify-center w-20 h-20 shrink-0">
          <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-20 pointer-events-none"></div>
          <img src={card.img} alt={card.title} className="relative w-16 h-16 object-cover" />
        </div>
      )}

      {/* Título */}
      <h3
        className="text-lg font-semibold text-green-300 mb-1 text-center"
        dangerouslySetInnerHTML={{ __html: card.title }}
      />

      {/* Descripción principal */}
      <div
        className={`text-slate-400 text-sm leading-relaxed text-left w-full max-w-xs border-l-2 pl-3 ${accentColor1}`}
        dangerouslySetInnerHTML={{ __html: card.desc }}
      />

      {/* Descripción secundaria (si existe) */}
      {card.desc2 && (
        <div
          className={`text-slate-200 text-sm leading-relaxed text-left w-full max-w-xs border-l-2 pl-3 opacity-90 ${accentColor2}`}
          dangerouslySetInnerHTML={{ __html: card.desc2 }}
        />
      )}
    </div>
  );

  /** 🖼️ Imagen con glow reutilizable */
  const renderGlowImage = (src, alt = "Visual") => (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-400/60 blur-3xl pointer-events-none"></div>
        <img src={src} alt={alt} className="relative w-full max-w-sm object-contain" />
      </div>
    </div>
  );

  /** 🧠 Contenido principal según layout */
  const renderContent = () => {
    switch (layout) {

      /** === LAYOUT 1: Texto + Imagen === */
      case 1:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 w-full h-full items-center justify-center">
            <div className="flex flex-col gap-6">
              {title && <h1 className="text-4xl lg:text-6xl font-bold text-green-400">{title}</h1>}
              {subtitle && <h6 className="text-pretty text-slate-300 text-xl">{subtitle}</h6>}
              {renderButtons()}
            </div>
            {contentImg && renderGlowImage(contentImg)}
          </div>
        );

      /** === LAYOUT 2: GRID DE CARDS === */
      case 2:
        const gridCols =
          cards.length === 4
            ? "grid-cols-1 lg:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 lg:grid-cols-2 lg:grid-cols-3";

        return (
          <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            {cards?.length > 0 && (
              <div className={`grid ${gridCols} gap-6 w-full max-w-6xl mx-auto place-items-center`}>
                {cards.map(renderCard)}
              </div>
            )}
          </div>
        );

      /** === LAYOUT 3: TESTIMONIO === */
      case 3:
        return (
          <div className="flex lg:flex-row flex-col gap-10 w-full h-full items-center lg:p-12">
            {/* Perfil */}
            <div className="flex flex-col flex-1 items-center text-center lg:text-left gap-2">
              {testimonial?.img && (
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-48 h-48 rounded-full object-cover border-2 border-green-300/40 shadow-md"
                />
              )}
              {testimonial?.name && <h3 className="text-2xl font-semibold text-white">{testimonial.name}</h3>}
              {testimonial?.role && <p className="text-green-400 text-sm">{testimonial.role}</p>}
            </div>

            {/* Cita */}
            <div className="flex flex-col flex-3 items-start text-left gap-6">
              {testimonial?.quote && (
                <blockquote className="text-slate-100 leading-8 text-lg border-l-2 border-green-300/40 pl-2 lg:pl-8 italic">
                  “{testimonial.quote}”
                </blockquote>
              )}
            </div>
          </div>
        );

      /** === LAYOUT 4: GRID DE CARDS + IMAGEN LATERAL === */
      case 4:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 w-full items-center justify-center">
            {/* Cards */}
            <div className="flex flex-col items-center justify-center gap-8">
              {cards?.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                  {cards.map(renderCard)}
                </div>
              )}
            </div>
            {/* Imagen lateral */}
            {contentImg && renderGlowImage(contentImg)}
          </div>
        );

      default:
        return null;
    }
  };

  /** === RENDER PRINCIPAL === */
  return (
    <section
      className="
        relative w-full max-w-[1200px] lg:h-[87vh]
        px-4 lg:px-22 py-12 lg:py-8
        rounded-4xl border border-slate-300/30 bg-slate-950/60 backdrop-blur-xl
        flex flex-col items-center justify-between gap-6
      "
    >
      {/* HEADER (solo si layout !== 1) */}
      {layout !== 1 && (
        <header
          className={`w-full flex flex-col lg:flex-row items-center justify-center gap-4 ${
            headerImg ? "text-left" : "text-center"
          }`}
        >
          {headerImg && (
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-25 pointer-events-none"></div>
              <img
                src={headerImg}
                alt="Header visual"
                className="relative w-24 h-auto drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
              />
            </div>
          )}

          <div className="flex flex-col gap-2 text-center lg:text-left">
            {title && <h1 className="text-2xl lg:text-4xl font-bold text-green-400 text-balance">{title}</h1>}
            {subtitle && <h6 className="text-pretty text-slate-300 text-sm lg:text-xl">{subtitle}</h6>}
          </div>
        </header>
      )}

      {/* CONTENIDO CENTRAL */}
      <div className="w-full h-full rounded-xl">{renderContent()}</div>

      {/* FOOTER (solo si layout !== 1) */}
      {layout !== 1 && <footer className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">{renderButtons()}</footer>}
    </section>
  );
}
