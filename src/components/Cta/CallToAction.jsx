import React from "react";
import { Flex } from "../Styled/Flex";

function CallToAction() {
  return (
    <Flex>
      <header>
        <h1>We help you develop a good strategy for trading crypto</h1>
      </header>
      <form>
        <input placeholder="enter email" />
        <button>Join Waitlist</button>
      </form>
    </Flex>
  );
}

export default CallToAction;
