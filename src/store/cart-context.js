import React from 'react';
import Cart from '../components/Food/Cart/Cart';

// 장바구니에 담기거나 제외되는 항목들을 상태관리하는 컨텍스트
// 컨텍스트에 들어가는 초기 객체는 뭘 담을 것인지에 대한 정의.
const CartContext = React.createContext({
  items: [], // 장바구니에 담긴 항목 배열
  addItem: (item) => {}, // 파라미터까지 정의해주면 더 좋음 (자동완성시 편함)
  removeItem: (id) => {},
});

export default CartContext;
