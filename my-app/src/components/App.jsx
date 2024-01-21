import React, { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../utils/load-contract";
import Web3 from "web3";

const App = () => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });

  function setAccountListener(provider) {
    provider.on("accountsChanged", (accounts) => {
      setConnectedAccount(accounts[0]);
    });
  }

  useEffect(() => {
    async function detectProvider() {
      const provider = await detectEthereumProvider();
      const contract = await loadContract("TodoList", provider);
      console.log(contract);
      if (provider) {
        provider.request({ method: "eth_requestAccounts" });
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
        });
        console.log("Connected");
      } else {
        console.log("Metamask not detected");
      }
    }

    detectProvider();
  }, []);

  useEffect(() => {
    let { provider, web3, contract } = web3Api;

    async function getAccount() {
      let account = await web3.eth.getAccounts();
      console.log(account);
      setAccountListener(provider);
      setConnectedAccount(account[0]);
      let balance = await web3.eth.getBalance(account[0]);
      balance =
        Math.round((await web3.utils.fromWei(balance, "ether")) * 100) / 100;
      setAccountBalance(balance);

      console.log(account);
      console.log(balance);
    }

    web3Api.contract && getAccount();
  }, [web3Api]);

  useEffect(() => {
    async function showTodos() {
      let data = await web3Api.contract.returnTodos();
      console.log(data);
      setTodos(data);
    }
    web3Api.contract && showTodos();
  }, [refresh, web3Api.contract]);

  async function addToDo() {
    let data = await web3Api.contract.addItem(task, {
      from: connectedAccount,
    });
    console.log(data);
    setRefresh(!refresh);
    if (data) {
      setTask("");
    }
  }

  return (
    <div className="bossDiv">
      <div className="mainDiv">
        <div>
          <h1>Decentralized ToDo List</h1>
        </div>
        <div className="todoDiv">
          {todos.map((item, index) => {
            return (
              <div className="taskDiv" key={index}>
                <p>{item[0]}</p>
                <button className="delBtn">Del</button>
              </div>
            );
          })}
        </div>
        <div className="inputBox">
          <input
            onChange={(e) => {
              setTask(e.target.value);
            }}
            value={task}
          />
          <button className="addBtn" onClick={addToDo}>
            Add
          </button>
          {/* <button className="addBtn" onClick={showTodos}>
            Show
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default App;
