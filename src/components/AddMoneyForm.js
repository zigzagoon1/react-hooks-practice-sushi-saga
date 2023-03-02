import React, {useState} from "react";

function AddMoneyForm({remainingMoney, handleAddMoney}) {
    const [input, setInput] = useState("");
    
    
    function handleSubmit(e) {
        e.preventDefault();
        const amount = e.target.input.value;
        handleAddMoney(amount);
        setInput("")

    }
    function handleChange(e) {
        setInput(e.target.value);
    }
    return (
        <div id="add_money_form">
            <header>Add Money To Wallet</header>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="input" 
                    placeholder="Type amount to add here..." value={input}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddMoneyForm;