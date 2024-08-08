import { useState } from "react";

import "./App.css";

import { ExpenseTable } from "./Component/ExpenseTable";
import ExpenseData from "./Component/ExpenseData";
import { ExpenseForm } from "./Component/ExpenseForm";
import { useLocalStorage } from "./Hooks/useLocalStorage";

function App() {
  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
    email: "",
  });
  const [expenses, setExpenses] = useLocalStorage('expenses',ExpenseData);
  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId", "");

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        {/* <ExpenseFormUseRef setExpenses={setExpenses} /> */}
        <ExpenseTable
          expenses={expenses}
          setExpense={setExpense}
          setExpenses={setExpenses}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
}

export default App;
