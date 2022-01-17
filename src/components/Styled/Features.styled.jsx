import styled from "styled-components";

const Features = styled.section`
  background-color: ${({ bg }) => bg || null};

  header > h2 {
    font-weight: 400;
    font-size: 1rem;
  }
`;

export default Features;
