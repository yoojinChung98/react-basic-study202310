import React from 'react';
import styles from './input.module.css';

export const Input = ({ id, label, type, value, isValid, ...rest }) => {
  return (
    <div className={`${styles.control} ${IsValid ? styles.invalid : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        {...rest} // rest라는 이름은 그냥 선생님이 지은 것! props로 넘어온 것 중,
        // type, id, value는 직접지정하고, 나머지는 걍 rest 라는 이름으로 한꺼번에 뿌려버리겠다는 뜻 (스프레드문법)
      />
    </div>
  );
};
