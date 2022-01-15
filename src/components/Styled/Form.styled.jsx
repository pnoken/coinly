import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40%;

  & h1 {
    font-weight: 900;
    font-size: 3rem;
  }

  & h2 {
    font-weight: 400;
    font-size: 1rem;
  }

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
    width: 100%;
  }

  & input {
    color: orange;
  }

  @media (max-width: 1300px) {
      max-width: 90%;
    

    & > div > img {
      width: 90%;
    }
`;
