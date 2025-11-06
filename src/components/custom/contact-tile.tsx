import { IconType } from "react-icons";

type contactTileType = {
  title: string;
  Icons: Array<[IconType, string]>;
};

export default function ContactTile({ title, Icons }: contactTileType) {
  const handleClick = (id: string) => {
    const mailTo = `mailto:${title}?subject=Job%20Opportunity&body=Dear%20Charan,%0A%0A%20I%20recently%20explored%20your%20portfolio,%20and%20I%20was%20truly%20impressed%20by%20your%20work.%20I%20believe%20my%20background%20in%20[Industry%20Field]%20could%20complement%20your%20efforts,%20and%20I%20would%20love%20to%20explore%20the%20possibility%20of%20working%20together%20on%20some%20exciting%20projects.%0A%0A%20I%20look%20forward%20to%20the%20opportunity%20to%20connect%20and%20discuss%20how%20we%20might%20collaborate.%0A%0A%20Best%20regards,%0A%20[Your%20Name]`;

    if (id === "copy") {
      navigator.clipboard.writeText(title);
    } else window.open(mailTo, "_blank", "noopener noreferrer");
  };
  return (
    <div className="group flex justify-between items-center text-base md:text-lg">
      <div className="text-[var(--near-black)] font-medium break-all">{title}</div>
      <div className="flex gap-4 ml-4">
        {Icons.map(([Icon, id], index) => {
          return (
            <div key={index}>
              <Icon
                onClick={() => handleClick(id)}
                className="transition-all duration-300 text-[var(--medium-text)] hover:text-[var(--accent-blue)] hover:scale-110 hover:cursor-pointer text-xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
