import { useState } from "react";

export default function Header() {
  const [currentItem, setCurrentItem] = useState(0);
  // const activeColor = '';
  return (
    <nav className="sticky top-0 z-10 hidden w-full h-auto backdrop-blur-sm md:block lg:max-w-[80%] lg:mx-auto">
      <ul className="flex list-none whitespace-nowrap">
        <li
          className={`mr-auto ${currentItem === 0 ? "bg-zinc-400 font-bold" : ""}`}
          onClick={() => setCurrentItem(0)}>
          <a href="#hero">Portfolio</a>
        </li>
        <li
          className={`${currentItem === 1 ? "bg-zinc-400 font-bold" : ""}`}
          onClick={() => setCurrentItem(1)}>
          <a href="#about">About</a>
        </li>
        <li
          className={` ${currentItem === 2 ? "bg-zinc-400" : ""}`}
          onClick={() => setCurrentItem(2)}>
          <a href="#tech-stack">Tech Stack</a>
        </li>
        <li
          className={` ${currentItem === 3 ? "bg-zinc-400" : ""}`}
          onClick={() => setCurrentItem(3)}>
          <a href="#projects">Projects</a>
        </li>
        <li
          className={` ${currentItem === 4 ? "bg-zinc-400" : ""}`}
          onClick={() => setCurrentItem(4)}>
          <a href="#education">Education</a>
        </li>
        <li
          className={` ${currentItem === 5 ? "bg-zinc-400" : ""}`}
          onClick={() => setCurrentItem(5)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
