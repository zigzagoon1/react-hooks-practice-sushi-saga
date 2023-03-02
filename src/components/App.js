import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import AddMoneyForm from "./AddMoneyForm";

const API = "http://localhost:3001/sushis";

function App() {

  const [addMoney, setAddMoney] = useState(false);
  const [plates, setPlates] = useState([]);
  const [sushi, setSushi] = useState([]);
  const [remainingMoney, setRemainingMoney] = useState(50);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then((sushi) => setSushi(sushi));
  }, [])
  
  function handleClickOnSushi(price) {
    setRemainingMoney(remainingMoney - price);
    const newPlates = [...plates, 1];
    setPlates(newPlates);
  }

  function handleAddMoneyClick() {
    setAddMoney(!addMoney);
  }
  function handleAddMoney(amount) {
    if (isNaN(amount)) {
      console.log("Error, numbers only");
      setAddMoney(false);
      return;
    }
    const remaining = parseInt(remainingMoney);
    const newAmount = remaining + parseInt(amount);
    setRemainingMoney(newAmount);
    setAddMoney(false);
  }
  return (
    addMoney? 
    <div>
        <AddMoneyForm handleAddMoney={handleAddMoney}/> 
    </div>
    : 
    <div className="app">
      <SushiContainer sushi={sushi} onClickOnSushi={handleClickOnSushi} remainingMoney={remainingMoney}/>
      <button id="add_money"onClick={handleAddMoneyClick}>Add Money</button>

      <Table plates={plates} remainingMoney={remainingMoney} handleAddMoney={handleAddMoney}/>
      
    </div>
  );
}

export default App;
