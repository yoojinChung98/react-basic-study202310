import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';

const Expenses = ({ items }) => {
  console.log('items: ', items);
  // 선택된 연도 상태값 관리
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  // ExpensesFilter에 내려보내 선택된 연도 값을 끌어올려주는 함수
  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  // // ExpenseItem을 동적 렌더링하기
  // const iterateExpenseItem = () => {
  //   const renderArray = [];

  //   for (let item of items) {
  //     renderArray.push(
  //       <ExpenseItem
  //         title={item.title}
  //         price={item.price}
  //         date={item.date}
  //       />
  //     );
  //   }

  // const iterateExpenseItem = () => {
  //   // .map() 이라는 함수는 해당 객체의 배열을 하나씩 매개변수로 받아서 그걸 깔 수 있나봄.
  //   // 자바스크립트 '배열'의 메서드 map(배열 요소에 적용할 함수)
  //   // 콜백 함수의 매개값으로 배열의 요소가 하나씩 전달됨.
  //   // 콜백 함수는 배열 요소의 개수만큼 '반복'됨.
  //   // map의 리턴값: 함수가 적용된 각 요소가 담긴 '새로운 배열'이 '리턴'됨.
  //   return items.map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       price={item.price}
  //       date={item.date}
  //     />
  //   ));
  // }; 함수선언 없이 그냥 사용 가능!!

  // 필터 메서드를 따로 분리함
  const filteredItems = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  // 조건부 렌더링을 위한 변수
  // 아래 retrun부에 그냥 써도 되는데 깔끔해 보이려고 여기에 넣음
  let expenseContent = <p>아직 등록된 지출이 없습니다.</p>;

  if (filteredItems.length > 0) {
    expenseContent = filteredItems.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        price={item.price}
        date={item.date}
      />
    ));
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredItems} />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
