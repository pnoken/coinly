import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Nav, NavSection } from "./Styled/Nav.styled";
import { useContext } from "react";
import { TxnContext } from "../context/TxnContext";
import { Button } from "./Styled/Button.styled";

const { Footer } = Layout;

const LayoutComponent = (props) => {
  const navContent = [
    //{ name: "Coinly", route: "/" },
    // { name: "Cryptos", route: "/cryptos" },
    //{ name: "Get Started", route: "/signup" },
  ];

  const { connectWallet, currentAccount, formData, handleChange, sendTxn } =
    useContext(TxnContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTxn();
  };
  return (
    <Layout className="layout">
      <Nav>
        <NavSection>
          <div className="logo" />
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
            <Button onClick={connectWallet} width="20%">
              Connect Wallet
            </Button>
          )}
        </NavSection>
      </Nav>
      {props.children}
      <Footer
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "orange",
        }}
      >
        Coinly &copy;2021 Copyright
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
