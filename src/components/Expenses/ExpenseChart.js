import React from 'react';

import Chart from '../Chart/Chart';
import Expenses from './Expenses';

const ExpenseChart = ({ expenses }) => {
  console.log('expenses: ', expenses);
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // 선택년도의 모든 지출데이터를 꺼내서 월을 추출하면서
  // 해당 월의 지출액을 chartDataPoints의 월 value에 누적
  expenses.forEach((exp) => {
    // 이 월 정보는 실제 월에서 1이 빠져있다. (이따 배열로 비교할 때 짜피 0부터 시작하니까 굳이 +1 안해줘도 무방!)
    const expenseMonth = exp.date.getMonth();
    const expnesePrice = exp.price;

    chartDataPoints[expenseMonth].value += expnesePrice;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
