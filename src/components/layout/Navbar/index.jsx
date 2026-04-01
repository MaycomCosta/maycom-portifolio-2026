import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useScrollSpy } from "../../../hooks/useScrollSpy";
import { scrollTo } from "../../../utils/scroll";

const NavWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  height: 72px;
  display: flex;
  align-items: center;
  transition: background 0.4s ease, border-color 0.4s ease;
  background: ${({ $scrolled }) => ($scrolled ? "rgba(250,250,248,0.92)" : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(12px)" : "none")};
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? "var(--gray-200)" : "transparent")};
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 640px) { padding: 0 1.25rem; }
`;

const Logo = styled.button`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--ink);
  background: none;
  border: none;
  line-height: 1;

  em {
    font-style: italic;
    color: var(--gray-400);
    font-weight: 300;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) { display: none; }
`;

const NavLink = styled.button`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? "var(--ink)" : "var(--gray-400)")};
  background: none;
  border: none;
  transition: color 0.2s;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--ink);
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover { color: var(--ink); &::after { transform: scaleX(1); } }
`;

const LangRow = styled.div`
  display: flex;
  gap: 0.15rem;
`;

const LangBtn = styled.button`
  font-family: 'DM Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? "var(--ink)" : "var(--gray-400)")};
  background: none;
  border: none;
  padding: 0.2rem 0.3rem;
  transition: color 0.2s;
  font-weight: ${({ $active }) => ($active ? "500" : "400")};

  &:hover { color: var(--ink); }
`;

const Divider = styled.span`
  font-size: 0.65rem;
  color: var(--gray-300);
  line-height: 1;
  align-self: center;
`;

const MobileBtn = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;

  @media (max-width: 768px) { display: flex; }

  span {
    display: block;
    width: 20px;
    height: 1px;
    background: var(--ink);
    transition: all 0.3s ease;
    transform-origin: center;
  }

  ${({ $open }) => $open && `
    span:nth-child(1) { transform: translateY(5px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-5px) rotate(-45deg); }
  `}
`;

const MobileMenu = styled.div`
  position: fixed;
  inset: 72px 0 0 0;
  background: var(--white);
  z-index: 499;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};
  transition: opacity 0.35s ease;
`;

const MobileLink = styled.button`
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--ink);
  background: none;
  border: none;
  letter-spacing: -0.01em;
`;

const SECTIONS = ["about", "work", "skills", "contact"];

const Navbar = ({ t, lang, changeLang, langs }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(SECTIONS);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => { scrollTo(id); setOpen(false); };

  return (
    <>
      <NavWrap $scrolled={scrolled}>
        <Inner>
          <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Maycom <em>Costa</em>
          </Logo>

          <NavRight>
            <Links>
              <NavLink onClick={() => go("about")} $active={active === "about"}>{t("nav.about")}</NavLink>
              <NavLink onClick={() => go("work")} $active={active === "work"}>{t("nav.work")}</NavLink>
              <NavLink onClick={() => go("contact")} $active={active === "contact"}>{t("nav.contact")}</NavLink>
            </Links>

            <LangRow>
              {langs.map((l, i) => (
                <React.Fragment key={l}>
                  <LangBtn $active={lang === l} onClick={() => changeLang(l)}>{l}</LangBtn>
                  {i < langs.length - 1 && <Divider>/</Divider>}
                </React.Fragment>
              ))}
            </LangRow>

            <MobileBtn $open={open} onClick={() => setOpen(o => !o)}>
              <span /><span /><span />
            </MobileBtn>
          </NavRight>
        </Inner>
      </NavWrap>

      <MobileMenu $open={open}>
        <MobileLink onClick={() => go("about")}>{t("nav.about")}</MobileLink>
        <MobileLink onClick={() => go("work")}>{t("nav.work")}</MobileLink>
        <MobileLink onClick={() => go("contact")}>{t("nav.contact")}</MobileLink>
      </MobileMenu>
    </>
  );
};

export default Navbar;
