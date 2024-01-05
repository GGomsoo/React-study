import { useState } from "react";

// 실습 - Hook 사용하기
function Count2(initialValue) {
  const [count, setCount] = useState(initialValue)

  // 증가 함수
  const increaseCount = () => setCount((count) => count + 1)

  // 감소 함수
  // count값이 0 아래로 내려가지 못하게 Math 함수 사용.
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0))

  return [count, increaseCount, decreaseCount]
}

export default Count2