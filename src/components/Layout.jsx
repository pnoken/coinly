import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Nav, NavSection } from "./Styled/Nav.styled";
import { useContext } from "react";
import { TxnContext } from "../context/TxnContext";
import { Button } from "./Styled/Button.styled";
import coinlylogo from "../images/coinly_logo.svg";
import './Layout.css'

const { Footer } = Layout;

const LayoutComponent = (props) => {
  const navContent = [
    //{ name: "Coinly", route: "/" },
    // { name: "Cryptos", route: "/cryptos" },
    //{ name: "Get Started", route: "/signup" },
  ];

  // formData, handleChange, sendTxn

  const { connectWallet, currentAccount } = useContext(TxnContext);

  // const handleSubmit = (e) => {
  //   const { addressTo, amount, keyword, message } = formData;

  //   e.preventDefault();

  //   if (!addressTo || !amount || !keyword || !message) return;

  //   sendTxn();
  // };
  return (
    <Layout className="layout">
<div className="marquee" id="coinmarketcap-widget-marquee" coins="1,1027,825,1839,3890,1274,3794,7653,6636" currency="USD" theme="light" transparent="false" show-symbol-logo="true"></div>      <Nav>
        <NavSection>
          <div className="logo">
            <img src={coinlylogo} alt="Coinly logo" />
          </div>
          <Menu
            style={{ textAlign: "center", backgroundColor: "orange" }}
            theme="dark"
            mode="horizontal"
          >
            {navContent.map((content, index) => {
              return (
                <Menu.Item key={index + 1}>
                  <Link to={content.route}>{content.name}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
          {!currentAccount && (
            <Button onClick={connectWallet} width="40%">
              Connect Wallet
            </Button>
          )}
        </NavSection>
      </Nav>
      {props.children}
      <Footer
        style={{
          textAlign: "center",
          color: "black",
        }}
      >
        Coinly &copy;2021 Copyright
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
