import { useState } from "react";
import { Button, Layout } from "antd";
import { MetaMaskInpageProvider } from "@metamask/providers";
import Web3 from "web3";
import { LoginWrapper } from "../styles";

const { Content } = Layout;

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
    web3?: any;
  }
}

const Login = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        setWalletAddress(account);
        setIsConnected(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <Content className="site-layout" style={{ padding: "0 50px" }}>
      <LoginWrapper>
        <div>Login with Web3.js</div>
        <br />
        {!isConnected && (
          <div>
            <Button type="primary" onClick={onConnect}>
              Login
            </Button>
          </div>
        )}
        {isConnected && (
          <div className="app-wrapper">
            <div className="app-details">
              <h2> You are connected to metamask.</h2>
              <div className="app-balance">
                <span>Wallet Address: </span>
                <div>{walletAddress}</div>
              </div>
            </div>
            <div>
              <Button onClick={onDisconnect}>Disconnect</Button>
            </div>
          </div>
        )}
      </LoginWrapper>
    </Content>
  );
};

export default Login;
