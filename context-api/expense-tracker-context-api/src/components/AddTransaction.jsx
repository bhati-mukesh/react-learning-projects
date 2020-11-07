import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const submitTransaction = () => {
    addTransaction({
      text,
      amount: parseInt(amount),
      id: Math.floor(Math.random() * 10000),
    });
  };

  return (
    <>
      <h3>Add new Transaction</h3>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Enter text..."
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income){" "}
        </label>
        <input
          type="text"
          name="amount"
          value={amount}
          placeholder="Enter amount..."
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          submitTransaction();
        }}
      >
        Add transaction
      </button>
    </>
  );
};

export default AddTransaction;
