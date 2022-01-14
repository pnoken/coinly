import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: 2px solid white;
  outline: none;
  background: #f7931a;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  transition: 1s all;
  width: 90%;

  & :hover {
    background: orange;
    border: 2px solid black;
    color: black;
  }
`;
