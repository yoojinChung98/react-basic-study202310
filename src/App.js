import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NoName from './NoName';

function App() {
  const $h1 = <h1>h1태그입니당</h1>;
  const $h2 = <h2>h2태그를 jsx를 이용하여 작성! (이 방식을 추천!)</h2>;

  return (
    <>
      <NoName />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
      <div className='App'>
        {$h1}
        {$h2}
      </div>
      <div className='noname'>
        <input type='text' value='문자열' />
        <p>
          오늘은 <strong>월요일</strong>,,, 아직도,,, <strong>월요일</strong>,,,
          <br />
          토요일까지,,,D-5
        </p>
      </div>
    </>
  );
}

export default App;
