import React, {useState} from "react";

function Sushi({src, name, price, handleClick, remainingMoney}) {
  const [eaten, setEaten] = useState(false);
  function onClick(e) {
    if (!eaten && remainingMoney >= price) {
      setEaten(true);
      handleClick(price);
    }

  }
  return (
    <div className="sushi">
      <div className="plate" onClick={onClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={src}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
