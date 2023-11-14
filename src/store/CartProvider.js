import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = {
  items: [],
};

// 리듀서 함수 정의: 여러가지 복잡한 상태관리를 중앙 집중화.
// state: 업데이트 하기 전의 상태값
// action: 어떤 업데이트를 하는지에 대한 정보와 필요값들이 들어있음. (그 업데이트될 값이 들어오나봄)
const cartReducer = (state, action) => {
  if (action.type == 'ADD') {
    // 기존에 가지고 있던 state.item 을 깔고, 새로 온 action의 item을 더 깔아줌.
    const updatedItem = [...state.items, action.item];

    return {
      items: updatedItem,
    }; // 이 액션에 대한 업데이트된 새로운 상태 반환.
  } else if (action.type == 'REMOVE') {
    const removedItems = state.items.filter((item) => item.id !== action.id);
    return {
      itmes: removedItems,
      // 이 리턴된 값은 하단의 useReducer를 이용하여 생성된? cartState의 값이 됨(가장 최신의 상태니까)
    };
  }

  return {
    items: defaultState,
  };
};

const CartProvider = ({ children }) => {
  // 리듀서 사용
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  // Provider가 감싸고 있는 모든 children에게 이 상태변수와 모든 함수를 전달해줘서 사용할 수 있게 됨.(중앙집중화)
  // Provider 가 감싸고 있는 children은 provider 가 제공하는 모든 context(?) 를 사용할 수 있음.

  // Provider의 value 는 실제로 관리할 데이터 객체.
  const cartContext = {
    items: cartState.items, // 장바구니에 담긴 항목 배열
    addItem: (item) => {
      // 액션함수는 반드시 무슨 액션을 하는지와 액션에 필요한 값을 전달.
      dispatchCartAction({
        type: 'ADD',
        item: item,
      });
    },
    removeItem: (id) => {
      dispatchCartAction({
        type: 'REMOVE',
        id: id,
      });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
