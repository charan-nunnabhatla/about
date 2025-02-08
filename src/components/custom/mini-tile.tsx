import { IconType } from "react-icons";

type miniCardTypes = {
  title: string;
  Icon?: IconType;
};

export default function MiniTile({ title, Icon }: miniCardTypes) {
  return (
    <div
      aria-label={title}
      title={title}
      className="flex items-center justify-center h-auto px-2 py-1 text-xs text-white rounded w-fit bg-white/25 hover:bg-white/30">
      <span>
        {Icon ? (
          <div className="pr-2">
            <Icon />
          </div>
        ) : null}
      </span>
      {title}
    </div>
  );
}
