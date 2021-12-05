import React, { useState } from "react";
import { Flex } from "../Styled/Flex";
import { StyledForm } from "../Styled/Form.styled";
import axios from "axios";

function CallToAction() {
  const [email, setEmail] = useState("");
  const subscribe = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://coinly-19698-default-rtdb.europe-west1.firebasedatabase.app",
        {
          email: email,
        }
      )
      .then((res) => console.log(res));
  };
  return (
    <Flex>
      <header>
        <h1>We help you develop a good strategy for trading crypto</h1>
      </header>
      <StyledForm onSubmit={subscribe}>
        <input
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Join Waitlist</button>
      </StyledForm>
    </Flex>
  );
}

export default CallToAction;
