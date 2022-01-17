import cryptoStrategy from "../../images/stay_ahead.svg";
import Features from "../Styled/Features.styled";
import { Flex } from "../Styled/Flex";

function StayAhead() {
  return (
    <Features bg="white">
      <Flex>
        <header>
          <h1>Stay Ahead of your crypto peers</h1>
          <h2>
            Avoid common mistakes by learning and copying trades of top traders
            on Binance, FTX and other trading platforms.
          </h2>
        </header>
        <div>
          <img src={cryptoStrategy} alt="crypto strategy" />
        </div>
      </Flex>
    </Features>
  );
}

export default StayAhead;
