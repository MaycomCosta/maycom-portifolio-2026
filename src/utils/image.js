// Warm-toned editorial placeholder — beige/gray abstract
export const PLACEHOLDER = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='600' viewBox='0 0 900 600'%3E%3Crect width='900' height='600' fill='%23F0EDE8'/%3E%3Crect x='0' y='0' width='450' height='600' fill='%23E8E3DC' opacity='0.6'/%3E%3Crect x='350' y='150' width='200' height='300' fill='%23D4D4D4' opacity='0.4'/%3E%3Ccircle cx='200' cy='300' r='120' fill='%23A0A0A0' opacity='0.15'/%3E%3Cline x1='0' y1='300' x2='900' y2='300' stroke='%23D4D4D4' stroke-width='1'/%3E%3Ctext x='450' y='320' text-anchor='middle' fill='%236B6B6B' font-family='Georgia,serif' font-size='13' letter-spacing='4'%3EIMAGE%3C/text%3E%3C/svg%3E`;

export const safeSrc = (src) => (src ? src : PLACEHOLDER);

export const onImgError = (e) => {
  if (e.target.src !== PLACEHOLDER) e.target.src = PLACEHOLDER;
};
