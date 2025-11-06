export default function Hero() {
  return (
    <div
      id="hero"
      className="flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 min-h-[80vh] sm:min-h-[70vh]">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 sm:gap-8 md:gap-12">
          <img
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover flex-shrink-0"
            src="/about/IMG_1614.png"
            alt="Charan Nunnabhatla"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[var(--near-black)] mb-3 sm:mb-4 tracking-tight leading-none" style={{fontFamily: "'Caveat', cursive", fontWeight: 700, textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.2)'}}>
              Charan
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[var(--medium-text)] font-normal mb-4 sm:mb-6">
              Software Developer
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[var(--medium-text)] leading-relaxed max-w-2xl mx-auto md:mx-0">
              AI Solutions Developer specializing in conversational AI, workflow automation, and intelligent healthcare systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
