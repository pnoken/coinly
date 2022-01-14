import styled from "styled-components";

export const Cta = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: auto;

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
