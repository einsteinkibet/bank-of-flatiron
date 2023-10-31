
import React, { useState } from 'react';

const TransactionTable = ({ transactions, onDeleteTransaction }) => {
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the transactions based on the search query
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Your Transactions</h2>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search transactions"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => onDeleteTransaction(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
