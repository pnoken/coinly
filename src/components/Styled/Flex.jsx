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
    max-width: 40%;

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

    & > button {
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
    }

    & > button:hover {
      background: orange;
      border: 2px solid black;
      color: black;
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

  @media (max-width: 625px) {

    & header {
      & > button {
        font-size: 0.6rem;
        paddingL 0.2rem;
        
      }
    }
  }
`;
