import { useState, useEffect, useRef } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<{
    width: number;
    height: number;
    x: number;
    y: number;
    borderRadius: string;
  } | null>(null);
  const currentElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Update hovered element position on mouse move if hovering
      const target = e.target as HTMLElement;

      // Skip if target is the cursor itself
      if (
        target.classList.contains("custom-cursor") ||
        target.classList.contains("custom-cursor-dot")
      ) {
        setIsTransitioning(false);
        setIsHovering(false);
        setHoveredElement(null);
        currentElementRef.current = null;
        return;
      }

      // Prioritize finding the closest container with rounded borders (for email container, etc.)
      const closestContainer = target.closest(".bg-gradient-to-br") as HTMLElement;
      const closestClickable = target.closest("a, button, [role='button'], .cursor-pointer, .group") as HTMLElement;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("group") ||
        closestClickable ||
        closestContainer
      ) {
        setIsTransitioning(true);
        setIsHovering(true);
        // Check if we're hovering a nav element
        setIsHoveringNav(!!target.closest("nav"));
        // Prefer the container element if it exists, otherwise use clickable, then target
        const element = closestContainer || closestClickable || target;
        currentElementRef.current = element;
        const rect = element.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(element);

        // Ensure border radius is properly calculated
        let borderRadius = computedStyle.borderRadius || '0px';
        // If element has rounded-lg class, ensure we use proper radius
        if (element.classList.contains('rounded-lg')) {
          borderRadius = '0.5rem'; // rounded-lg in Tailwind
        } else if (element.classList.contains('rounded-xl')) {
          borderRadius = '0.75rem'; // rounded-xl
        } else if (element.classList.contains('rounded-2xl')) {
          borderRadius = '1rem'; // rounded-2xl
        } else if (element.classList.contains('rounded-md')) {
          borderRadius = '0.375rem'; // rounded-md
        } else if (element.classList.contains('rounded')) {
          borderRadius = '0.25rem'; // rounded
        } else if (element.classList.contains('rounded-full')) {
          borderRadius = '9999px'; // rounded-full
        }

        setHoveredElement({
          width: rect.width + 8,
          height: rect.height + 8,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          borderRadius: borderRadius,
        });
      } else {
        setIsTransitioning(false);
        setIsHovering(false);
        setIsHoveringNav(false);
        setHoveredElement(null);
        currentElementRef.current = null;
      }
    };

    const updateElementPosition = () => {
      if (currentElementRef.current) {
        const rect = currentElementRef.current.getBoundingClientRect();

        // Check if element is still in viewport
        const isInViewport = (
          rect.top < window.innerHeight &&
          rect.bottom > 0 &&
          rect.left < window.innerWidth &&
          rect.right > 0
        );

        // If element is out of viewport, destroy hover effect
        if (!isInViewport) {
          setIsTransitioning(false);
          setIsHovering(false);
          setIsHoveringNav(false);
          setHoveredElement(null);
          currentElementRef.current = null;
          return;
        }

        const computedStyle = window.getComputedStyle(currentElementRef.current);
        const element = currentElementRef.current;

        // Ensure border radius is properly calculated
        let borderRadius = computedStyle.borderRadius || '0px';
        // If element has rounded-lg class, ensure we use proper radius
        if (element.classList.contains('rounded-lg')) {
          borderRadius = '0.5rem'; // rounded-lg in Tailwind
        } else if (element.classList.contains('rounded-xl')) {
          borderRadius = '0.75rem'; // rounded-xl
        } else if (element.classList.contains('rounded-2xl')) {
          borderRadius = '1rem'; // rounded-2xl
        } else if (element.classList.contains('rounded-md')) {
          borderRadius = '0.375rem'; // rounded-md
        } else if (element.classList.contains('rounded')) {
          borderRadius = '0.25rem'; // rounded
        } else if (element.classList.contains('rounded-full')) {
          borderRadius = '9999px'; // rounded-full
        }

        setHoveredElement({
          width: rect.width + 8,
          height: rect.height + 8,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          borderRadius: borderRadius,
        });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateElementPosition, true);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateElementPosition, true);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? "hover" : ""} ${isHoveringNav ? "nav-hover" : ""} ${isTransitioning ? "transitioning" : ""}`}
        style={{
          left: isHovering && hoveredElement ? `${hoveredElement.x}px` : `${mousePosition.x}px`,
          top: isHovering && hoveredElement ? `${hoveredElement.y}px` : `${mousePosition.y}px`,
          width: isHovering && hoveredElement ? `${hoveredElement.width}px` : '20px',
          height: isHovering && hoveredElement ? `${hoveredElement.height}px` : '20px',
          borderRadius: isHovering && hoveredElement ? hoveredElement.borderRadius : '50%',
          zIndex: isHoveringNav ? 999998 : 999996,
        }}
      />
      <div
        className={`custom-cursor-dot ${isTransitioning ? "transitioning" : ""}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          opacity: isHovering ? 0 : 1,
        }}
      />
    </>
  );
}
