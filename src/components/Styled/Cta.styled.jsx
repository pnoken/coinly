import styled from "styled-components";

export const Cta = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: auto;

  & > div {
    flex: 1;
  }

  & > div > img {
    max-width: 90%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    & > header {
      max-width: 90%;
    }

    & > div > img {
      max-width: 90%;
    }
  }

  @media (max-width: 760px) {
    width: 90%;

    & h1 {
      font-weight: 900;
      font-size: 2rem;
    }
  }
`;
