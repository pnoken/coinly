import { Flex } from "./components/Styled/Flex";
import { Header } from "./components/Header";
import LayoutComponent from "./components/Layout";
import bitcoinlogo from "./images/crypto-bitcoin.svg";
import CallToAction from "./components/Cta/CallToAction";
import { Button } from "./components/Styled/Button.styled";
import StayAhead from "./components/Cta/StayAhead";
import SocialMedia from "./components/Cta/MoreThanSocialMedia";

const App = () => {
  return (
    <LayoutComponent>
      <Header>
        <Flex>
          <header>  
            <h1>Maximize your crypto returns</h1>
            <h3>Earn high APY from DeFi investments</h3>
            <Button
              width="40%"
              
            >
              <a href="#learn-more">
              Learn More
              </a>
            </Button>
          </header>
          <div>
            <img src={bitcoinlogo} alt="bitcoin" />
          </div>
        </Flex>
      </Header>
      <SocialMedia />
      <StayAhead />
      <CallToAction />
    </LayoutComponent>
  );
};

export default App;
