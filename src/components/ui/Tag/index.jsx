import styled from "styled-components";

const TagEl = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gray-500);
  border: 1px solid var(--gray-300);
  padding: 0.2rem 0.6rem;
  border-radius: 2px;
`;

const Tag = ({ children }) => <TagEl>{children}</TagEl>;
export default Tag;
