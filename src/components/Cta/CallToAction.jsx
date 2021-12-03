import React from "react";
import { Flex } from "../Styled/Flex";
import { StyledForm } from "../Styled/Form.styled";

function CallToAction() {
  return (
    <Flex>
      <header>
        <h1>We help you develop a good strategy for trading crypto</h1>
      </header>
      <StyledForm>
        <input placeholder="enter email" />
        <button>Join Waitlist</button>
      </StyledForm>
    </Flex>
  );
}

export default CallToAction;
