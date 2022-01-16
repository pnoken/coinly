import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  margin: 2rem auto;
  width: 80%;
  align-items: center;
  justify-content: space-between;

  & > header {
    flex: 1;
    color: white;
    max-width: 90%;

    & > h1 {
      font-weight: 900;
      font-size: 3rem;
    }

    & h2 {
      font-weight: 500;
      font-size: 3rem;
    }

    & > h3 {
      font-weight: 300;
      font-size: 2rem;
    }
  }

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
      width: 90%;
    }
  }

  @media (max-width: 760px) {
    width: 90%;

    & > header {
      max-width: 100%;

      & > h1 {
        font-weight: 900;
        font-size: 2rem;
      }

      & h2 {
        font-weight: 500;
        font-size: 2rem;
      }

      & > h3 {
        font-weight: 300;
        font-size: 1.5rem;
      }
    }
  }
`;
