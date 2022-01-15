import React, { useState } from "react";
import { StyledForm } from "../Styled/Form.styled";
import axios from "axios";
import { Button } from "../Styled/Button.styled";
import { Cta } from "../Styled/Cta.styled";
import cryptoStrategy from "../../images/strategy.svg";
import { openNotification } from "../Toast";

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
      .then((res) => openNotification(res, res));
  };
  return (
    <Cta>
      <div>
        <img src={cryptoStrategy} alt="crypto strategy" />
      </div>
      <StyledForm onSubmit={subscribe}>
        <h1>Develop a good strategy for trading crypto</h1>
        <h2>
          We can help you develop a good strategy for trading crypto. Subscribe
          to our waitlist and we'd let you know when it is your turn
        </h2>
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
