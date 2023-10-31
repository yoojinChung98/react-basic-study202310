import React from 'react';
import Card from './components/UI/Card';

const Hello = (props) => {
  console.log('Hello component!');
  console.log(props);

  return (
    <Card className='rectangle'>
      <div>
        {props.children}
        Hello React!
      </div>
    </Card>
  );
};

export default Card;
