import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 90%;

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
    width: 80%;
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
