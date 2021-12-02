import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > button,
  input {
    border-radius: 50px;
    border: 2px solid white;
    outline: none;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem;
    margin: 1rem;
    transition: 1s all;
  }

  & input {
    color: orange;
  }

  & > button {
    cursor: pointer;
    background: #f7931a;
  }

  & > button:hover {
    background: orange;
    border: 2px solid black;
  }
`;
