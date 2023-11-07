import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense, onToggle }) => {
  //   const [title, setTitle] = useState('');
  //   const [price, setPrice] = useState('');
  //   const [date, setDate] = useState('');

  const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        title: e.target.value,
      };
    });
  };

  const priceChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      price: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      date: new Date(e.target.value),
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); // submit 차단
    console.log('submit 버튼을 누름!');
    console.log(onSaveExpense);

    // 사용자가 입력한 값을 객체로 포장
    // const NewExpense = {
    //   title: title,
    //   price: price,
    //   date: date,
    // };

    // Date 입력창에 값이 변하지 않아서 추가한 함수()
    // 전달할 때 객체를 다시 포장...하는게,,,맞나봄.
    const newExpense = {
      title: userInput.title,
      price: +userInput.price,
      date: new Date(userInput.date),
    };

    onSaveExpense(userInput);

    // 사용자가 사용한 입력칸을 비워줌
    setUserInput({
      title: '',
      price: '',
      date: '',
    });

    onToggle();
  };

  const cancelInsertHandler = () => {
    console.log('취소 버튼 눌림!');
    onToggle();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='100'
            step='100'
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button
          type='button'
          onClick={cancelInsertHandler}
        >
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
