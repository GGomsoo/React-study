import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './chapter4/Clock';
import CommentList from './chapter5/CommentList';
import NotiList from './chapter6/NotiList';
import Count from './chapter7/Count';
import Accom from './chapter7/Accommodate'
import Event from './chapter8/Event'
import Login from './chapter9/Login'
import StuList from './chapter10/StudentList';

import NameForm from './chapter11/NameForm';
import RequestsForm from './chapter11/RequestForm';
import FruitForm from './chapter11/FruitForm';
import SignUp from './chapter11/SignUp';

import Calc from "./chapter12/Calc"

import ProfileCard from './chapter13/ProfileCard';

import WhiteOrDark from './chapter14/WhiteOrDark';

import Blocks from './chapter15/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <Clock />
  // <NotiList />
  // <Count />
  // <Accom />
  // <Event />
  // <Login />
  // <StuList />

  // <NameForm />
  // <RequestsForm />
  // <FruitForm />
  // <SignUp />

  // <Calc />

  // <ProfileCard />

  // <WhiteOrDark />

  <Blocks />
);

// // setInterval을 통해 1000ms(1초) 마다 clock 컴포넌트의 element가 새롭개 생성되게 해줌
// setInterval(() => {
//   root.render(
//     <Clock />
//   )
// }, 1000)