import React from 'react';
// 여기 CartModal import 필요
import styles from './Cart.module.scss';

// 더미데이터 생성
const DUMMY_CART = [
  {
    id: 'c1',
    name: '스시',
    amount: 2,
    price: 46000,
  },
  {
    id: 'c2',
    name: '띠드버거',
    amount: 1,
    price: 12000,
  },
];

const Cart = ({ onClose }) => {
  const {
    'cart-items': cartItemStyle,
    total,
    actions,
    'button--alt': btnAlt,
    button,
  } = styles;

  return (
    <CartModal onClose={onClose}>
      {/* 주문 내역 */}
      <ul className={cartItemStyle}>
        {DUMMY_CART.map((cartItem) => (
          <li key={cartItem.id}>{cartItem.name}</li>
        ))}
      </ul>
      <div className='{total}'>
        <span>주문 총액</span>
        <span>50,000원</span>
      </div>
      <div className='{actions}'>
        <span
          className='{btnAlt}'
          onClick={onClose}
        >
          닫기
        </span>
        <span className='{button}'>주문</span>
      </div>
    </CartModal>
  );
};

export default Cart;
