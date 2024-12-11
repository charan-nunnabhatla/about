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
      className="group relative flex w-full  hover:bg-[rgba(73,73,73,0.3)] hover:cursor-pointer h-auto rounded p-2 bg-transparent  ">
      <section className="mr-auto">
        <h2 className="inline-flex items-center justify-center leading-none group-hover:text-white text-lg md:text-xl">
          {props.title}
          {props.link ? (
            <svg
              className="translate-x-0 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100 rotate-0 duration-300 p-0"
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
        <p className="text-gray-400 text-sm md:text-base">{props.sub_title}</p>
      </section>
      <section className="flex items-center justify-center p-3 text-gray-400">
        {props.date}{" "}
      </section>
    </div>
  );
}
