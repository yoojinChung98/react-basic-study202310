import React from 'react';

import Card from '../../UI/Card';
import styles from './Home.module.css';

const Home = () => {
  const { onLougout } = useContext(AuthContext);
  // console.log('authCtx: ', authCtx);

  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <button onClick={onLogout}></button>
    </Card>
  );
};

export default Home;
