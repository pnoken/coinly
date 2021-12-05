import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Header } from "./Header";
const { Footer } = Layout;

const LayoutComponent = (props) => {
  const navContent = [
    { name: "Coinly", route: "/" },
    // { name: "Cryptos", route: "/cryptos" },

    { name: "Get Started", route: "/signup" },
  ];
  return (
    <Layout className="layout">
      <Header>
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
      </Header>
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
