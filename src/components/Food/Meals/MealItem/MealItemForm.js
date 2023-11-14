import React from 'react';
import Input from '../../../UI/Input/Input';
import styles from './MealItemForm.module.scss';

const MealItemForm = ({ id, onAddToCart }) => {
  // 수량의 상태를 관리하는 변수.
  const [amount, setAmount] = useState(0);

  // 담기 버튼을 누르면 발동하는 함수
  const formSubmitHandler = (e) => {
    e.preventDefault();
    onAddToCart(amount); // 담기 버튼을 눌러야 context에게 확정된 수량을 전달해줌
  };

  // 수량이 변경될 때마다 발동하는 함수
  const amoutHandler = (amt) => {
    // console.log(`선택된 수량: ${amt}`);
    setAmount(amt);
  };

  return (
    <form
      className={styles.form}
      onSubmit={formSubmitHandler}
    >
      <Input
        onAdd={amoutHandler}
        label='수량'
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
