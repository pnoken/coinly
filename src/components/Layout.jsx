import React from "react";
import { Layout } from "antd";
import { Nav, NavSection } from "./Styled/Nav.styled";
import { Button } from "./Styled/Button.styled";
import coinlylogo from "../images/coinly_logo.svg";
import './Layout.css'

const { Footer } = Layout;

const LayoutComponent = (props) => {
  return (
    <Layout className="layout">
<div className="marquee" id="coinmarketcap-widget-marquee" coins="1,1027,825,1839,3890,1274,3794,7653,6636" currency="USD" theme="light" transparent="false" show-symbol-logo="true"></div>      <Nav>
        <NavSection>
          <div className="logo">
            <img src={coinlylogo} alt="Coinly logo" />
          </div> 
            <Button width="20%">
              <a href="https://app.coinly.me" target="_blank" rel='noreferrer noopener'>
              Go to App
              </a>
            </Button>  
        </NavSection>
      </Nav>
      {props.children}
      <Footer
        style={{
          textAlign: "center",
          color: "black",
        }}
      >
        &copy;2022  Coinly
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
