import styled from "styled-components";

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid var(--gray-300);
  color: var(--gray-500);
  font-size: 1rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: var(--ink);
    color: var(--ink);
    transform: translateY(-2px);
  }
`;

const SocialIcon = ({ href, icon: Icon, label }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <Icon />
  </Link>
);

export default SocialIcon;
