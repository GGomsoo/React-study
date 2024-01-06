import { useState } from "react";
import styles from './Login.module.css'

function Toolba() {
  // isLogin 기본값 false = 로그인 안 한 상태
  const [isLogin, setIsLogin] = useState(false)

  // 로그인 클릭
  // isLogin 상태 false를 반전(true)시킨다.
  const clickLogin = () => {
    setIsLogin((isLogin) => !isLogin)
  }

  return (
    <div className={styles.wrapper}>
      {/* isLogin의 상태에 따라 로그인 버튼의 표시명이 달라진다. */}
      <button 
      className={styles.btn}
      onClick={clickLogin}>
        {isLogin ? "로그아웃" : "로그인"}
      </button>

      {/* isLogin이 true일 경우 (로그인 했을 경우)에 나타날 멘트 */}
      {isLogin ? <span className={styles.greeting}>이 버튼을 누른 당신, 환영합니다!</span> : null}

      <hr />
      <h2>로그인 툴바에 대한 강의</h2>

    </div>
  )
}

export default Toolba