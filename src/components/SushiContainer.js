import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'
function SushiContainer({sushi, onClickOnSushi, remainingMoney}) {

  const [indexes, setIndexes] = useState([0, 1, 2, 3])

  const sushiElements = sushi.map((one) => {
    return (
      <Sushi key={one.id} index={one.id - 1} src={one.img_url} name={one.name} price={one.price} 
      handleClick={handleClickOnSushi} remainingMoney={remainingMoney} />
    )
  })

  const elementsToDisplay = sushiElements.filter((one) => {
    if (one.key - 1 === indexes[0] || one.key - 1 === indexes[1] || one.key - 1 === indexes[2] || one.key - 1 === indexes[3]) {
      return true;
    }
    return false;
  })

  function handleClickOnSushi(price) {
   onClickOnSushi(price); 
  }
  function handleUpdateIndexes() {
    const newIndexes = indexes.map((index) => index + 4);
    
    console.log(newIndexes)
    setIndexes(newIndexes);
  }

  return (
    <div className="belt">
      {elementsToDisplay}
      <MoreButton updateIndexes={handleUpdateIndexes}/>
    </div>
  );
}

export default SushiContainer;
