import React, { useEffect, useRef, useState } from 'react'

export const ExpenseFormUseRef = ({ setExpenses }) => {

      const titelRef= useRef()
      const categoryRef= useRef()
      const amountRef= useRef()
 

    const handleSubmit = (e) => {
        e.preventDefault()
        setExpenses((pre)=>[...pre,
            {
               title: titelRef.current.value,
                category: categoryRef.current.value,
                amount: amountRef.current.value,
                id: crypto.randomUUID()
             }]);
             titelRef.current.value = "";
            categoryRef.current.value = "";
              amountRef.current.value = "";
 
    }

  return (
       <>
          <form className="expense-form" onSubmit={handleSubmit}>
              <div className="input-container">
                  <label htmlFor="title">Title</label>
                  <input id="title" name='title'
                    ref={titelRef} />
              </div>
              <div className="input-container">
                  <label htmlFor="category">Category</label>
                  <select id='category' name='category' 
                   ref={categoryRef}>
                      <option hidden >Select Category</option>
                      <option value="grocery">Grocery</option>
                      <option value="clothes">Clothes</option>
                      <option value="bills">Bills</option>
                      <option value="education">Education</option>
                      <option value="medicine">Medicine</option>
                  </select>
              </div>
              <div className="input-container">
                  <label htmlFor="amount">Amount</label>
                  <input id="amount" name='amount'
                   ref={amountRef}/>
              </div>
              <button className="add-btn">Add</button>
          </form>
       </>
  )
}
