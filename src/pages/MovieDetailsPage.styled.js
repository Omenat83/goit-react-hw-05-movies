import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: flex;
  gap: 7px;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 22px;

  &:hover {
    color: red;
  }
`;
export const SectionsContainer = styled.ul`
  padding: 20px 0;
  border-bottom: 2px solid grey;
`;
export const SectionLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: red;
  }
`;

export const Section = styled.li`
padding: 5px 0;
`
