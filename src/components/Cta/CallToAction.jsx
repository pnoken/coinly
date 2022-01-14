import React, { useState } from "react";
import { StyledForm } from "../Styled/Form.styled";
import axios from "axios";
import { Button } from "../Styled/Button.styled";
import { Cta } from "../Styled/Cta.styled";
import cryptoStrategy from "../../images/strategy.svg";

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
    <Cta>
      <div>
        <img src={cryptoStrategy} alt="crypto strategy" />
      </div>
      <StyledForm onSubmit={subscribe}>
        <h2>We can help you develop a good strategy for trading crypto</h2>
        <input
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button>Join Waitlist</Button>
      </StyledForm>
    </Cta>
  );
}

export default CallToAction;
