import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './chapter4/Clock';
import CommentList from './chapter5/CommentList';
import NotiList from './chapter6/NotiList';
import Count from './chapter7/Count';
import Accom from './chapter7/Accommodate'
import Event from './chapter8/Event'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <Clock />
  // <NotiList />
  // <Count />
  // <Accom />
  <Event />
);

// // setInterval을 통해 1000ms(1초) 마다 clock 컴포넌트의 element가 새롭개 생성되게 해줌
// setInterval(() => {
//   root.render(
//     <Clock />
//   )
// }, 1000)