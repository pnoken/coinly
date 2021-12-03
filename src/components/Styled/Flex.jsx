import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  margin: 2rem auto;
  width: 80%;
  align-items: center;

  & > header {
    flex: 1;
    width: 100%;

    color: white;

    & > h1 {
      font-weight: 900;
      font-size: 4rem;
    }

    & > p {
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
    }

    & > button:hover {
      background: orange;
      border: 2px solid black;
      color: black;
    }
  }

  & > img {
    flex: 1;
    width: 100%;
  }

  

  @media (max-width: 1545px) {
    & > header {
      & > h1 {
        font-size: 2rem;
      }

      & > p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 1300px) {

    flex-direction: column;
    
    & > img {
      display: none;
    }
  }

  @media (max-width: 625px) {
   
      flex-direction: column;
   
    & > img {
      display: none;
    }

    & header {
      & > button {
        font-size: 0.6rem;
        paddingL 0.2rem;
      }
    }
  }
`;
