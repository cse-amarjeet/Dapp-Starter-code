import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./contracts/BuyMeACoffee.json";

import Buy from "./components/Buy";
import Memos from "./components/Memos";
// import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x4c97DA97358dD18dbaf62709eC1bd1d582A29aA2";
      const contractAbi = abi.abi;

      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  // console.log(state);

  return (
    <div className="App">
      <Buy state={state}></Buy>
      <Memos state={state}></Memos>
    </div>
  );
}

export default App;
