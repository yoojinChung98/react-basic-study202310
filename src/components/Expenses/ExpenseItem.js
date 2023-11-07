import { useState } from 'react'; // 중괄호: 해당 파일의 함수만 가져오는 것
import React from 'react'; // 걍쓰기 : 해당 파일을 전부 가져오는 것
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

/*
const ExpenseItem = (props) => {
  console.log('props의 값: ', props);

  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expensePrice = props.price;
*/
const ExpenseItem = ({ title, price: propsPrice, date }) => {
  // let itemTitle = title;

  // 값이 변경되어 화면에 반영되어야 하는 값들은 useState 훅을 통해 상태변수로 관리한다.
  // useStatesms 배열을 리턴하는데, 첫번째 요소는 관리할 상태값, 두번째 요소는 상태값을 변경하는 setter 함수
  const [itemTitle, setItemTitle] = useState(title);
  console.log('itemTitle: ', itemTitle);
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

  const clickHandler = (e) => {
    // itemTitle = '안녕';
    // console.log(itemTitle);

    // // state로 관리하는 변수는 반드시 setter로만 변경하셔야 합니다.
    // setItemTitle((snapshot) => {
    //   console.log(`snapshot: ${snapshot}`);
    //   // 메롱이 새로운 값이 되며 기존 스냅샷과 다를 경우
    //   // 화면을 리렌더리하고 같을 경우 리렌더링 하지 않는다
    //   return '메롱';
    // });
    setItemTitle('메롱');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{itemTitle}</h2>
        <div className='expense-item__price'>{formattedPrice}원</div>
      </div>
      <button
        id='btn'
        onClick={clickHandler}
      >
        수정
      </button>
      <button
        id='btn'
        onClick={(e) => {
          console.log('삭제!');
        }}
      >
        삭제
      </button>
    </Card>
  );
};

export default ExpenseItem;
