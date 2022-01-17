import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { openNotification } from "../components/Toast";

import { contractABI, contractAddress } from "../utils/constants";

export const TxnContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const txnContract = new ethers.Contract(contractAddress, contractABI, signer);

  return txnContract;
};

export const TxnProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  // const [isLoading, setIsLoading] = useState(false);
  const [txnCount, setTxnCount] = useState(localStorage.getItem("txnCount"));
  // const [toast, setToast] = useState(false);
  // const [errors, setErrors] = useState({ title: "", message: "" });

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum)
        return openNotification(
          "Please Install metamask",
          "It looks like you dont have metamask in your device"
        );

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        openNotification("", "No Accounts found");
      }
    } catch (error) {
      openNotification("", error.message);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum)
        return openNotification(
          "Metamask not installed",
          "It looks like you dont have metamask in your device"
        );

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      openNotification("No Ethereum Object", "No Ethereum Accounts Found");
    }
  };

  const sendTxn = async () => {
    try {
      const { addressTo, amount, keyword, message } = formData;
      const txnContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });

      const txnHash = await txnContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      console.log(`Loading -${txnHash.hash}`);
      await txnHash.wait();

      console.log(`Success -${txnHash.hash}`);

      const txnCount = await txnContract.getTransactionCount();
      setTxnCount(txnCount.toNumber());
      //get the data from the form
    } catch (error) {
      console.log(error);
      openNotification("No ethereum object", "No ETH accounts found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <TxnContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTxn,
        txnCount,
      }}
    >
      {children}
    </TxnContext.Provider>
  );
};
