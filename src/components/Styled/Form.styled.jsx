import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  & > input {
    border-radius: 50px;
    border: 2px solid white;
    outline: none;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem;
    margin: 1rem;
    transition: 1s all;
    width: 90%;
  }

  & input {
    color: orange;
  }
`;
