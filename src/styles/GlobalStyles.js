import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Mono:wght@400;500&family=Barlow+Condensed:wght@300;400;500;600&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --white: #FAFAF8;
    --black: #0D0D0D;
    --ink: #1A1A1A;
    --gray-100: #F5F4F0;
    --gray-200: #EBEBEB;
    --gray-300: #D4D4D4;
    --gray-400: #A0A0A0;
    --gray-500: #6B6B6B;
    --gray-600: #3D3D3D;
    --warm: #F0EDE8;
    --warm-dark: #E8E3DC;
    --accent: #C8A96E;
    --accent-light: rgba(200,169,110,0.12);
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    cursor: none;
  }

  body {
    background: var(--white);
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Hide default cursor */
  *, *::before, *::after {
    cursor: none !important;
  }

  ::selection {
    background: var(--ink);
    color: var(--white);
  }

  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track { background: var(--gray-100); }
  ::-webkit-scrollbar-thumb { background: var(--gray-400); }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: none;
    border: none;
    background: none;
    font-family: inherit;
  }

  /* Reveal animation */
  @keyframes revealUp {
    from {
      opacity: 0;
      transform: translateY(40px);
      filter: blur(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }

  @keyframes revealFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.96); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes lineGrow {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .reveal {
    animation: revealUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .reveal-delay-1 { animation-delay: 0.1s; }
  .reveal-delay-2 { animation-delay: 0.25s; }
  .reveal-delay-3 { animation-delay: 0.4s; }
  .reveal-delay-4 { animation-delay: 0.55s; }
  .reveal-delay-5 { animation-delay: 0.7s; }
`;
