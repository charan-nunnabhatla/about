interface cardDetails {
  title: string;
  sub_title: string;
  date: string;
  link?: string | undefined;
}

export default function Tile(props: cardDetails) {
  const onClick = (url: string | undefined) => {
    if (url) window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <div
      onClick={() => onClick(props.link)}
      className="group relative flex flex-col w-full hover:cursor-pointer border-b border-[var(--near-black)]/10 pb-6 sm:pb-7 md:pb-8 transition-all duration-300 hover:border-[var(--near-black)]/20">
      <section className="flex-1 mb-3 sm:mb-4">
        <h3 className="inline-flex items-center text-[var(--near-black)] font-semibold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 group-hover:text-[var(--accent-blue)] transition-colors duration-300">
          {props.title}
          {props.link ? (
            <svg
              className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300 ml-1 sm:ml-2 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          ) : null}
        </h3>
        <p className="text-[var(--medium-text)] text-sm sm:text-base md:text-lg mb-2">{props.sub_title}</p>
      </section>
      <section className="flex items-center text-[var(--medium-text)] text-xs sm:text-sm md:text-base font-medium">
        {props.date}
      </section>
    </div>
  );
}
