import { Link } from "react-router-dom";
import styled from "styled-components";

export const Input = styled.input`
  border: 2px solid #808080;
  border-radius: 0.75em;
  background: #f4f4f4;
  display: block;
  width: 215px;
  margin: 0.25em 1em 0em 0.25em;
  padding: 1em;
  &:focus {
    outline: none !important;
    border: 2px solid #662483;
    box-shadow: 0 0 2px #a84fcf;
  }
  &:hover {
    background: white;
  }
`;
export const InputLarge = styled(Input)`
  width: 480px;
`;
export const InputDate = styled(InputLarge)`
  width: 125px;
`;
export const Button = styled(InputLarge)`
  font-weight: bold;
  width: 135px;
  color: #ef7d00;
  &:hover {
    cursor: pointer;
    background: #dadada;
  }
`;
export const StyledLink = styled(Link)`
  border: 2px solid #808080;
  border-radius: 0.75em;
  background: #f4f4f4;
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  width: 135px;
  color: #ef7d00;
  margin: 0.25em 1em 0em 0.25em;
  padding: 1em;
  &:focus {
    outline: none !important;
    border: 2px solid #662483;
    box-shadow: 0 0 2px #a84fcf;
  }
  &:hover {
    cursor: pointer;
    background: #dadada;
  }
`;
// export const InputRadio = styled(Input)`
//   padding: 1.5em;
//   display: inline;
// `;
