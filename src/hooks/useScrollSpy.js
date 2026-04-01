import { useState, useEffect } from "react";

export const useScrollSpy = (ids, offset = 120) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      let curr = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - offset <= y) curr = id;
      }
      setActive(curr);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return active;
};
