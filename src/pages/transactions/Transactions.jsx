import React, { useEffect } from "react";
import "./transaction.scss";
import List from "../../components/transaction/TransactionTable";
// import { getAllTransaction } from "../../utils/fetch";

function Transactions() {
  // const data = async () => {
  //   const response = await getAllTransaction();
  //   console.log(response);
  // };

  useEffect(() => {
    // data();
  }, []);
  return (
    <div className="transactionContainer">
      <div className="transaction">
        <span className="pageTitle">Transactions</span>
        <div className="transactionContent">
          <List />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
