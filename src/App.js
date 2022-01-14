import { useContext } from "react";
import { TxnContext } from "./context/TxnContext";
import { Flex } from "./components/Styled/Flex";
import { Header } from "./components/Header";
import LayoutComponent from "./components/Layout";
import bitcoinlogo from "./images/crypto-bitcoin.svg";
import CallToAction from "./components/Cta/CallToAction";

const App = () => {
  const { connectWallet, currentAccount, formData, handleChange, sendTxn } =
    useContext(TxnContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTxn();
  };

  return (
    <LayoutComponent>
      <Header>
        <Flex>
          <header>
            <h1>Start your crypto journey with us</h1>
            <h3>Learn from crypto experts around the world</h3>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://calendly.com/coinly/10min";
              }}
            >
              Book a free appointment
            </button>
            {!currentAccount && (
              <button onClick={connectWallet}>Connect Wallet</button>
            )}
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
