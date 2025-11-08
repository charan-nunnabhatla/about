export default function About() {
  return (
    <div id="about" className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--near-black)] tracking-tight whitespace-nowrap">
            About
          </h2>
          <div className="flex-1 h-1 bg-gradient-to-r from-[var(--near-black)] via-[var(--near-black)]/50 to-transparent rounded-full"></div>
        </div>
        <ul className="relative list-none space-y-0">
          <li className="flex items-start text-base sm:text-lg md:text-xl text-[var(--dark-text)] leading-relaxed relative">
            <div className="relative mr-3 sm:mr-4 pt-1.5" style={{minHeight: '100%'}}>
              <span className="flex-shrink-0 w-2 h-2 bg-[var(--near-black)] rounded-full block"></span>
              <div className="absolute left-1/2 top-3.5 w-0.5 bg-[var(--near-black)]/20 -translate-x-1/2" style={{height: 'calc(100% + 1.5rem)'}}></div>
            </div>
            <span className="pb-6 sm:pb-7 md:pb-8">AI Solutions Developer at VectorSoft, a product-based AI healthcare company, designing intelligent software systems that enhance healthcare efficiency and patient engagement</span>
          </li>
          <li className="flex items-start text-base sm:text-lg md:text-xl text-[var(--dark-text)] leading-relaxed relative">
            <div className="relative mr-3 sm:mr-4 pt-1.5" style={{minHeight: '100%'}}>
              <span className="flex-shrink-0 w-2 h-2 bg-[var(--near-black)] rounded-full block"></span>
              <div className="absolute left-1/2 top-3.5 w-0.5 bg-[var(--near-black)]/20 -translate-x-1/2" style={{height: 'calc(100% + 1.5rem)'}}></div>
            </div>
            <span className="pb-6 sm:pb-7 md:pb-8">Expertise in conversational AI integration, workflow automation, and interactive platform development</span>
          </li>
          <li className="flex items-start text-base sm:text-lg md:text-xl text-[var(--dark-text)] leading-relaxed relative">
            <div className="relative mr-3 sm:mr-4 pt-1.5" style={{minHeight: '100%'}}>
              <span className="flex-shrink-0 w-2 h-2 bg-[var(--near-black)] rounded-full block"></span>
              <div className="absolute left-1/2 top-3.5 w-0.5 bg-[var(--near-black)]/20 -translate-x-1/2" style={{height: 'calc(100% + 1.5rem)'}}></div>
            </div>
            <span className="pb-6 sm:pb-7 md:pb-8">Built AI-driven features including natural language patient interactions and automated clinical transcription systems (SOAP/DAP notes)</span>
          </li>
          <li className="flex items-start text-base sm:text-lg md:text-xl text-[var(--dark-text)] leading-relaxed relative">
            <div className="relative mr-3 sm:mr-4 pt-1.5" style={{minHeight: '100%'}}>
              <span className="flex-shrink-0 w-2 h-2 bg-[var(--near-black)] rounded-full block"></span>
              <div className="absolute left-1/2 top-3.5 w-0.5 bg-[var(--near-black)]/20 -translate-x-1/2" style={{height: 'calc(100% + 1.5rem)'}}></div>
            </div>
            <span className="pb-6 sm:pb-7 md:pb-8">Proficient in backend development with Node.js and Python, working with Local LLMs and AWS services</span>
          </li>
          <li className="flex items-start text-base sm:text-lg md:text-xl text-[var(--dark-text)] leading-relaxed relative">
            <div className="relative mr-3 sm:mr-4 pt-1.5" style={{minHeight: '100%'}}>
              <span className="flex-shrink-0 w-2 h-2 bg-[var(--near-black)] rounded-full block"></span>
              <div className="absolute left-1/2 top-3.5 w-0.5 bg-[var(--near-black)]/20 -translate-x-1/2" style={{height: 'calc(100% + 1.5rem)'}}></div>
            </div>
            <span className="pb-6 sm:pb-7 md:pb-8">Achieved 90% automation in large-scale data migration from PDF/Excel to MongoDB, improving data accuracy and accessibility</span>
          </li>
          <li className="flex items-start text-base sm:text-lg md:text-xl text-[var(--dark-text)] leading-relaxed relative">
            <div className="relative mr-3 sm:mr-4 pt-1.5">
              <span className="flex-shrink-0 w-2 h-2 bg-[var(--near-black)] rounded-full block"></span>
            </div>
            <span>Detail-oriented professional with strong problem-solving skills, thriving in both independent and fast-paced team environments</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
