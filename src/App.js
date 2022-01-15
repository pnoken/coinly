import { Flex } from "./components/Styled/Flex";
import { Header } from "./components/Header";
import LayoutComponent from "./components/Layout";
import bitcoinlogo from "./images/crypto-bitcoin.svg";
import CallToAction from "./components/Cta/CallToAction";
import { Button } from "./components/Styled/Button.styled";

const App = () => {
  return (
    <LayoutComponent>
      <Header>
        <Flex>
          <header>
            <h1>Start your crypto journey with us</h1>
            <h3>Learn from crypto experts around the world</h3>
            <Button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://calendly.com/coinly/10min";
              }}
            >
              Book a free appointment
            </Button>
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
