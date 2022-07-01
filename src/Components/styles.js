import { Link } from "react-router-dom";
import styled from "styled-components";

export const Input = styled.input`
  border: 2px solid #808080;
  border-radius: 0.75em;
  background: #f4f4f4;
  font-size: 14px;
  font-family: Poppins;
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
export const Ul = styled.ul`
  position: relative;
  //display: inline-flex;
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 100%;
  background-color: #662483;
  border-bottom: 1px solid;
  margin: auto;
  padding: 15px;
  list-style-type:none;
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
export const HeaderLink = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  width: 120px;
  color: whitesmoke;
  margin: 0.25px 0.5px 0.75px 0.25px;
  padding: 0.5em;
  &:hover {
    cursor: pointer;
    color: #ef7d00;
  }
`;

