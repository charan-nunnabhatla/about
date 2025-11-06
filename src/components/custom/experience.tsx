import Tile from "./tile";

export default function Experience() {
  return (
    <div id="experience" className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--near-black)] mb-8 md:mb-12 tracking-tight">
          Experience
        </h2>
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <Tile
            title="Software Developer | VectorSoft"
            sub_title="Developing AI-driven healthcare features including conversational AI for natural patient interactions, automated clinical transcription (SOAP/DAP notes), and interactive DUI education platform. Led large-scale data migrations from PDF/Excel to MongoDB, improving data accuracy and accessibility."
            date="Mar 2025 - Present"
          />
        </div>
      </div>
    </div>
  );
}
