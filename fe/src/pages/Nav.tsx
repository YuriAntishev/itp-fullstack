import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const Nav = () => {
  return (
    <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
      <div
        style={{
          float: "left",
          width: 120,
          height: 31,
          margin: "16px 24px 16px 0",
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: 1,
            label: <Link to="/">Home</Link>,
          },
          {
            key: 2,
            label: <Link to="/login">Login</Link>,
          },
        ]}
      />
    </Header>
  );
};

export default Nav;
