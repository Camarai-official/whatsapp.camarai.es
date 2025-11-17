// Slide.jsx
import { Icon } from "@iconify/react";

export default function Slide({
  headerImg,
  title,
  subtitle,
  primaryButton,
  layout,
  contentImg,
  cards = [],
  accentColor1,
  accentColor2,
  testimonial = null,
  onSlide,
  missionLabel,
  title1,
  title2,
  paragraph1,
  paragraph2,
}) {

  /** 🧩 Botones reutilizables (para footer y layout 1) */
  const renderButtons = () => {
    const primaryButtonClass = layout === 1
      ? "px-16 py-3 rounded-2xl text-lg text-xl border-2 border-purple-400/80 hover:border-purple-300/90 cursor-pointer uppercase transition-all font-bold"
      : "px-6 py-3 rounded-xl font-semibold bg-green-400 text-slate-900 hover:bg-green-300 flex items-center gap-2 cursor-pointer";

    return (
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {primaryButton && (
          <button
            className={primaryButtonClass}
            style={layout === 1 ? {
              backgroundColor: 'rgba(155, 110, 253, 0.2)',
            } : {}}
            onClick={() => onSlide?.(primaryButton.goTo)}
          >
            {layout === 1 ? (
              <span style={{
                fontFamily: "'Inter', sans-serif",
                background: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {primaryButton.text}
              </span>
            ) : (
              <>
                {primaryButton.text}
                {primaryButton.icon && (
                  <Icon icon={primaryButton.icon} className="w-5 h-5" />
                )}
              </>
            )}
          </button>
        )}
      </div>
    );
  };

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
        className="text-lg font-semibold text-slate-200 mb-1 text-center"
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
        <img src={src} alt={alt} className="relative w-full max-w-sm object-contain max-h-100" />
      </div>
    </div>
  );

  /** 🧠 Contenido principal según layout */
  const renderContent = () => {
    switch (layout) {

      /** === LAYOUT 1: Texto + Imagen === */
      case 1:
        return (
          <div className="flex flex-col items-center justify-center w-full h-full gap-8">
            {headerImg && (
              <div className="relative flex items-center justify-center mb-2">
                <div className="absolute inset-0 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
                <div className="relative">
                  {typeof headerImg === 'string' && headerImg.includes(':') && !headerImg.includes('/') && !headerImg.startsWith('data:') && !headerImg.startsWith('blob:') ? (
                    <Icon
                      icon={headerImg}
                      className="w-24 h-24"
                      style={{
                        color: '#a78bfa',
                        filter: 'drop-shadow(0 0 12px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 6px rgba(244, 114, 182, 0.6))'
                      }}
                    />
                  ) : (
                    <img
                      src={headerImg}
                      alt="Header"
                      className="w-32 h-32 object-contain"
                    />
                  )}
                </div>
              </div>
            )}
            {title && <h1 className="text-4xl xl:text-5xl font-black text-slate-100 text-center uppercase" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, lineHeight: '0.87' }}>{title}</h1>}
            {subtitle && <h6 className="text-pretty text-white text-lg xl:text-xl text-center max-w-3xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>{subtitle}</h6>}
            {renderButtons()}
          </div>
        );

      /** === LAYOUT 2: GRID DE CARDS === */
      case 2: {
        const gridCols = "grid-cols-1 xl:grid-cols-3";
        return (
          <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            {cards?.length > 0 && (
              <div className={`grid ${gridCols} gap-6 w-full max-w-6xl mx-auto place-items-center`}>
                {cards.map(renderCard)}
              </div>
            )}
          </div>
        );
      }

      /** === LAYOUT 3: TESTIMONIO === */
      case 3:
        return (
          <div className="flex xl:flex-row flex-col gap-10 w-full h-full items-center xl:p-12">
            {/* Perfil */}
            <div className="flex flex-col flex-1 items-center text-center xl:text-left gap-2">
              {testimonial?.img && (
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-48 h-48 rounded-full object-cover border-2 border-green-300/40 shadow-md"
                />
              )}
              {testimonial?.name && <h3 className="text-2xl font-semibold text-slate-100">{testimonial.name}</h3>}
              {testimonial?.role && <p className="text-green-400 text-sm">{testimonial.role}</p>}
            </div>

            {/* Cita */}
            <div className="flex flex-col flex-3 items-start text-left gap-6">
              {testimonial?.quote && (
                <blockquote className="text-slate-100 leading-8 text-lg border-l-2 border-green-300/40 pl-2 xl:pl-8 italic">
                  “{testimonial.quote}”
                </blockquote>
              )}
            </div>
          </div>
        );

      /** === LAYOUT 4: GRID DE CARDS + IMAGEN LATERAL === */
      case 4:
        return (
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10 w-full items-center justify-center">
            {/* Cards */}
            <div className="flex flex-col items-center justify-center gap-8">
              {cards?.length > 0 && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
                  {cards.map(renderCard)}
                </div>
              )}
            </div>
            {/* Imagen lateral */}
            {contentImg && renderGlowImage(contentImg)}
          </div>
        );

      /** === LAYOUT 5: MISIÓN CON ROBOT === */
      case 5:
        return (
          <div className="w-full h-full flex flex-col justify-center items-end relative">
            {/* Párrafos justificados a la derecha */}
            <div className="flex flex-col gap-6 xl:gap-8 text-white max-w-2xl xl:max-w-3xl">
              {paragraph1 && (
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '22px',
                    textAlign: 'right'
                  }}
                >
                  {paragraph1}
                </p>
              )}
              {paragraph2 && (
                <p
                  className="leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '22px',
                    textAlign: 'right'
                  }}
                >
                  {paragraph2}
                </p>
              )}
            </div>
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
        relative w-full max-w-[1200px] xl:h-[87vh]
        px-4 xl:px-22 py-12 xl:py-8
        rounded-4xl sm:border sm:border-slate-300/30
        bg-none sm:bg-slate-950/60 sm:backdrop-blur-xl
        flex flex-col items-center justify-center gap-6
      "
    >
      {/* HEADER (si layout !== 1) */}
      {layout !== 1 && (
        <header
          className={`w-full flex flex-col xl:flex-row items-center justify-center gap-4 ${
            headerImg ? "text-left" : "text-center"
          }`}
        >
          {headerImg && (
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-40 pointer-events-none"></div>
              <img
                src={headerImg}
                alt="Header visual"
                className="relative w-24 h-auto"
              />
            </div>
          )}

          <div className={`flex flex-col gap-2 ${headerImg ? "text-center xl:text-left" : "text-center"}`}>
            {title && <h1 className="text-2xl xl:text-4xl font-bold text-slate-100 text-balance">{title}</h1>}
            {subtitle && <h6 className="text-pretty text-slate-400 text-sm xl:text-xl">{subtitle}</h6>}
          </div>
        </header>
      )}

      {/* CONTENIDO CENTRAL */}
      <div className={`${layout === 5 ? 'w-1/2 h-1/2 ml-auto self-center overflow-y-auto' : 'w-full'} rounded-xl`}>{renderContent()}</div>

      {/* Elementos del layout 5 fuera de renderContent */}
      {layout === 5 && (
        <>
          {/* Label "NUESTRA MISIÓN" - Arriba a la izquierda */}
          {missionLabel && (
            <div
              className="absolute top-6 left-6 z-20 text-white uppercase"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: '24px'
              }}
            >
              {missionLabel}
            </div>
          )}

          {/* Título con gradiente y línea vertical - Hacia la izquierda */}
          {(title1 || title2) && (
            <div className="absolute top-16 xl:top-20 left-6 xl:left-8 z-20 pt-2">
              <div className="flex items-start gap-2 xl:gap-3">
                {/* Línea vertical blanca delgada */}
                <div className="w-px bg-[#9B6EFD] h-full min-h-[100px] xl:min-h-[120px]"></div>
                <div className="flex flex-col gap-0.5 xl:gap-1">
                  {title1 && (
                    <h1
                      className="font-black uppercase"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 900,
                        fontSize: '50px',
                        lineHeight: '1.05',
                        background: 'linear-gradient(135deg, #f472b6 0%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {title1}
                    </h1>
                  )}
                  {title2 && (
                    <h1
                      className="font-black uppercase"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 900,
                        fontSize: '50px',
                        lineHeight: '1.05',
                        background: 'linear-gradient(135deg, #f472b6 0%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {title2}
                    </h1>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Robot - Solo para layout 5, fuera del contenedor renderContent */}
      {layout === 5 && contentImg && (
        <div className="absolute bottom-0 left-0" style={{ left: 0, bottom: 0 }}>
          <img
            src={contentImg}
            alt="Robot"
            className="w-full max-w-md xl:max-w-lg 2xl:max-w-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
