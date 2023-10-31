import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

/*
const ExpenseItem = (props) => {
  console.log('props의 값: ', props);

  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expensePrice = props.price;
*/
const ExpenseItem = ({ title, price: propsPrice, date }) => {
  // const price = 99999;
  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice = propsPrice;

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  // 날짜 포맷팅 변환 함수 정의
  const makeFormattedDate = () => {
    const year = date.getFullYear();
    // const month = date.toLocaleString('en-US', {객체}) : 월 뒤에 '월'을 언어에 맞춰 붙여줌
    const month = date.toLocaleString('ko-KR', { month: 'long' });
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  // 숫자를 원화표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(propsPrice);

  return (
    <Card className='circle'>
      <div className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{formattedPrice}원</div>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
