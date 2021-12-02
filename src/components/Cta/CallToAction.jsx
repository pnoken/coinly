import React from "react";
import { Flex } from "../Styled/Flex";
import { Form } from "../Styled/Form.styled";

function CallToAction() {
  return (
    <Flex>
      <header>
        <h1>We help you develop a good strategy for trading crypto</h1>
      </header>
      <Form>
        <input placeholder="enter email" />
        <button>Join Waitlist</button>
      </Form>
    </Flex>
  );
}

export default CallToAction;
