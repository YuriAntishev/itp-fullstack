import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Login from "./pages/Login";

const { Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer style={{ textAlign: "center" }}>
          Copyright ©2022 Created by Yuri Antishev
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
