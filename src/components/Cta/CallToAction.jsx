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
        <img src={cryptoStrategy} />
      </div>
      <StyledForm onSubmit={subscribe}>
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
