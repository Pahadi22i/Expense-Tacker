import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPositions,
  setExpenses,
  rowId,
  setExpense,
  expenses,
  setEditingRowId,
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          const { title, amount, category } = expenses.find(
            (expense) => expense.id === rowId,
          );
            setEditingRowId(rowId)
          setExpense({ title, amount, category });
          setMenuPositions({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          console.log("Deleting");
          setExpenses((preState) =>
            preState.filter((expense) => expense.id !== rowId),
          );
          setMenuPositions({});
        }}
      >
        Delete
      </div>
    </div>
  );
};
