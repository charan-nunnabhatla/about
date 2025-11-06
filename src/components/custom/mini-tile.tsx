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
        "flex justify-center items-center py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 h-auto w-fit rounded-full text-[var(--near-black)] text-xs sm:text-sm md:text-base font-medium bg-[var(--warm-white)] hover:bg-[var(--near-black)] hover:text-[var(--warm-white)] border border-[var(--near-black)]/10 hover:border-[var(--near-black)] transition-all duration-300"
      )}>
      <span>
        {Icon ? (
          <div className="pr-1.5 sm:pr-2 md:pr-2.5 text-base sm:text-lg">
            <Icon />
          </div>
        ) : null}
      </span>
      {title}
    </div>
  );
}
