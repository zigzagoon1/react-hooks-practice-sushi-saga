import React from "react";

function MoreButton({updateIndexes}) {
  function handleUpdate(e) {
    e.preventDefault();
    updateIndexes();
  }
  return <button onClick={handleUpdate}>More sushi!</button>;
}

export default MoreButton;
