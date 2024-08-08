import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export const ExpenseForm = ({
  setExpenses,
  setExpense,
  expense,
  editingRowId,
  setEditingRowId,
}) => {
  // const[title ,setTitle]=useState('')
  // const [category,setCategory]=useState('')
  // const [amount ,setAmount ]=useState('')

  const [errors, setError] = useState({});
  const errorData = {};
  const validationsConfig = {
    title: [
      { required: true, message: "please enter titile" },
      { minLenght: 3, message: "Title should be at least 3 character long" },
    ],
    category: [{ required: true, message: "please enter Category" }],
    amount: [
      { required: true, message: "please enter Amount" },
      ,
      { number: /^[0-9]\d*(\.\d+)?$/, message: "Enter valid Number" },
    ],
    // email: [
    //   { required: true, message: "please enter email" },
    //   {
    //     pattern: /^[a-z0-9._%+-]+@gmail\.com$/,
    //     message: "please enter a valid email",
    //   },
    // ],
  };
  const validate = (form) => {
    Object.entries(form).forEach(([key, value]) => {
      validationsConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.minLenght && value.length < rule.minLenght) {
          errorData[key] = rule.message;
          return true;
        }
        // if (rule.pattern && !rule.pattern.test(value)) {
        //   errorData[key] = rule.message;
        //   return true;
        // }
          if(rule.number && !rule.number.test(value)){
              errorData[key] = rule.message
              return true
          }
      });
    });
    setError(errorData);
    return errorData;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;


    if (editingRowId) {
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...expense, id: editingRowId };
          }
          return prevExpense;
        }),
      );
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      setEditingRowId("");
      return;
    }

    // const expense = { title, category, amount ,id:crypto.randomUUID()}
    // setExpenses((pre)=> [...pre,expense])
    //  setTitle('')
    //  setCategory('')
    //  setAmount('')
    // const expense ={ ...gerFormData(e.target),id:crypto.randomUUID()}
    setExpenses((pre) => [...pre, { ...expense, id: crypto.randomUUID() }]);
    // e.target.reset() // all input field is empty
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };
  // const gerFormData = (form) => {
  //     const formData = new FormData(form)
  //     const data = {}
  //     for (const [key, value] of formData.entries()) {
  //         data[key] = value
  //     }
  //     return data
  // }
  // console.log(expense)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label={"Titles"}
        id={"title"}
        name={"title"}
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />

      <Select
        label={"Category"}
        id={"category"}
        name={"category"}
        value={expense.category}
        onChange={handleChange}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        error={errors.category}
        defaultOption="Select Category"
      />
      <Input
        label="Amount"
        id={"amount"}
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      
      />
      {/* <Input
        label="Email"
        id={"email"}
        name="email"
        value={expense.email}
        onChange={handleChange}
        error={errors.email}
      /> */}

      <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
    </form>
  );
};
