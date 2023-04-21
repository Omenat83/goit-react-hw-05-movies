import styled from "styled-components";
import { Link } from "react-router-dom";

export const FilmLink = styled(Link)`
line-height: 1.7;
display: flex;
gap: 5px;
align-items: center;
`;

export const FilmsComtainer = styled.ul`
margin-top: 15px;
`

export const SearchForm = styled.form`
  padding: 10px 0;
  display: flex;
`;
export const FormInput = styled.input`
  padding: 3px;
  font-size: 18px;
  outline: none;
`;
export const FormButton = styled.button`
  font-size: 16px;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    background-color: lightgray;
    opacity: 1;
  }
`;