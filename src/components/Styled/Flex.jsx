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
    max-width: 100%;

    & > h1 {
      font-weight: 900;
      font-size: 4rem;
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

  & > div > img {
    flex: 1;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;

    & > header {
      max-width: 90%;
    }

    & > div > img {
      width: 90%;
    }
  }
`;
