import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Footer } = Layout;

const LayoutComponent = (props) => {
  const navContent = [
    { name: "Coinly", route: "/" },
    { name: "Cryptos", route: "/cryptos" },
    { name: "Exchanges", route: "/exchanges" },
    { name: "Login", route: "/login" },
    { name: "Get Started", route: "/signup" },
  ];
  return (
    <Layout className="layout">
      {/* <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          {navContent.map((content, index) => {
            return (
              <Menu.Item key={index + 1}>
                <Link to={content.route}>{content.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header> */}
      {props.children}
      <Footer style={{ textAlign: "center", backgroundColor: "orange" }}>
        Coinly &copy;2021 Copyright
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
