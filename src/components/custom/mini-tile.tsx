import classNames from "classnames";
import { IconType } from "react-icons";

type miniCardTypes = {
  title: string;
  Icon?: IconType;
};

export default function MiniTile({ title, Icon }: miniCardTypes) {
  return (
    <div
      className={classNames(
        "flex justify-center items-center py-1 px-2 h-auto w-fit rounded text-white text-xs bg-white/25 hover:bg-white/30"
      )}>
      <span>
        {Icon ? (
          <div className="pr-2">
            <Icon />
          </div>
        ) : (
          <></>
        )}
      </span>
      {title}
    </div>
  );
}
