import styled from "styled-components";

export const Nav = styled.nav`
  background: orange;
`;

export const NavSection = styled.section`
  margin: 2rem auto;
  width: 80%;
  display: flex;
  justify-content: space-between;

  & > div > img {
    width: 50px;
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
`;
