import React from "react";
import styled, { css } from "styled-components";

const base = css`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  position: relative;
`;

const StyledBtn = styled.button`
  ${base}
  padding: ${({ $size }) => $size === "sm" ? "0.55rem 1.1rem" : "0.85rem 2rem"};
  border: 1px solid var(--ink);
  background: ${({ $variant }) => $variant === "filled" ? "var(--ink)" : "transparent"};
  color: ${({ $variant }) => $variant === "filled" ? "var(--white)" : "var(--ink)"};

  &:hover {
    background: ${({ $variant }) => $variant === "filled" ? "var(--gray-600)" : "var(--ink)"};
    color: var(--white);
    transform: translateY(-1px);
  }

  &:active { transform: translateY(0); }
  &:disabled { opacity: 0.4; }
`;

const StyledLink = styled.a`
  ${base}
  padding: ${({ $size }) => $size === "sm" ? "0.55rem 1.1rem" : "0.85rem 2rem"};
  border: 1px solid var(--ink);
  background: ${({ $variant }) => $variant === "filled" ? "var(--ink)" : "transparent"};
  color: ${({ $variant }) => $variant === "filled" ? "var(--white)" : "var(--ink)"};

  &:hover {
    background: var(--ink);
    color: var(--white);
    transform: translateY(-1px);
  }
`;

// Text-only underline button
const StyledText = styled.button`
  ${base}
  padding: 0;
  color: var(--ink);
  background: none;
  border: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--ink);
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover::after { transform: scaleX(0); transform-origin: right; }
`;

const Button = ({ children, variant = "outline", size = "md", href, target, onClick, disabled, type = "button", text }) => {
  if (text) return <StyledText onClick={onClick}>{children}</StyledText>;
  if (href) return (
    <StyledLink href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} $variant={variant} $size={size}>
      {children}
    </StyledLink>
  );
  return (
    <StyledBtn type={type} onClick={onClick} disabled={disabled} $variant={variant} $size={size}>
      {children}
    </StyledBtn>
  );
};

export default Button;
