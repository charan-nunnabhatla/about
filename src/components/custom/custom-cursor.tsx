import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(hasTouch && isCoarsePointer);
    };

    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);

    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    let animationId: number;

    const animate = () => {
      // Smooth lerp for ring (slightly delayed follow)
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${mousePos.current.x}px`;
        dotRef.current.style.top = `${mousePos.current.y}px`;
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [isTouchDevice]);

  // Don't render custom cursor on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
