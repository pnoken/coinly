import React, { useState } from "react";
import { StyledForm } from "../Styled/Form.styled";
import axios from "axios";
import { Button } from "../Styled/Button.styled";
import { Cta } from "../Styled/Cta.styled";
import cryptoStrategy from "../../images/strategy.svg";
import { openNotification } from "../Toast";
import { Spin } from "antd";

function CallToAction() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const subscribe = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post("https://coinly-be.herokuapp.com/waitlist", {
        email: email,
      })
      .then((res) => {
        setLoading(false);
        openNotification(res.statusText, res.data);
        setEmail("");
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          openNotification(err.response.statusText, err.response.data);
        }
        if (!err.response) {
          openNotification(
            "Error",
            "Sorry an error occured. Kindly try again later"
          );
        }
      });
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {loading ? (
          <Button disabled="true">
            <Spin />
            Join Waitlist
          </Button>
        ) : (
          <Button>Join Waitlist</Button>
        )}
      </StyledForm>
    </Cta>
  );
}

export default CallToAction;
