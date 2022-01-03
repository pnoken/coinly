import React from "react";
import { Flex } from "./components/Styled/Flex";
import { Header } from "./components/Header";
import LayoutComponent from "./components/Layout";
import bitcoinlogo from "./images/crypto-bitcoin.svg";
import CallToAction from "./components/Cta/CallToAction";

// const LeftHandComponent = ({ name }) => {
//   return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
// };

// const RightHandComponent = ({ message }) => {
//   return <h1 style={{ backgroundColor: "red" }}>{message}</h1>;
// };

const App = () => {
  return (
    <LayoutComponent>
      <Header>
        <Flex>
          <header>
            <h1>Start your crypto journey with us</h1>
            <p>Learn from crypto experts around the world</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://calendly.com/coinly/10min";
              }}
            >
              Book a free appointment
            </button>
            {/* <button>Become a mentor</button> */}
          </header>
          <div>
            <img src={bitcoinlogo} alt="bitcoin" />
          </div>
        </Flex>
      </Header>
      <CallToAction />
    </LayoutComponent>
  );
};

export default App;
