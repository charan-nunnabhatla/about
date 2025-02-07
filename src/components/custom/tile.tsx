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
      aria-label="tile"
      onClick={() => onClick(props.link)}
      className={`group relative flex w-full  hover:bg-[rgba(73,73,73,0.3)]  ${props.link ? "hover:cursor-pointer" : ""}  h-auto rounded p-2 bg-transparent  `}>
      <section className="mr-auto">
        <h2
          aria-label={`project title ${props.title}`}
          className="inline-flex items-center justify-center text-lg leading-none group-hover:text-white md:text-xl">
          {props.title}
          {props.link ? (
            <svg
              className="p-0 transition-all duration-300 rotate-0 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          ) : (
            <div></div>
          )}
        </h2>
        <p
          aria-label={props.sub_title}
          className="text-sm text-gray-400 md:text-base">
          {props.sub_title}
        </p>
      </section>
      <section
        aria-label={`the project ${props.title} was created on ${props.date}`}
        className="flex items-center justify-center p-3 text-gray-400">
        {props.date}{" "}
      </section>
    </div>
  );
}
