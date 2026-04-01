import { useState, useEffect, useCallback } from "react";

export const useCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicked(true);
    const up = () => setClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  const bindHover = useCallback(() => ({
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }), []);

  return { pos, hovered, clicked, bindHover, setHovered };
};
