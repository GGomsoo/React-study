import { useEffect, useState } from "react";
import Count2 from "./Count2";
import styles from "./Accomodate.module.css"

const MAX_CAPACITY = 10

function Accom(props) {
  const [isFull, setIsFull] = useState(false)
  const [count, increaseCount, decreaseCount] = Count2(0)

  // state가 바뀔 때 마다 console에 찍힘
  useEffect(() => {
    console.log("==================")
    console.log("useEffect() 호출!.")
    console.log(`isFull : ${isFull}`)
  })

  // count에 변화가 있을 때만 변경 (의존성 배열에 count값이 있기 때문)
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY)
    console.log(`현재 카운드 값 : ${count}`)
  }, [count])

  return (
    <div className={styles.mainDiv}>
      <p>{`총 ${count}명이 들어왔다!`}</p>

      <button
        className={styles.btn}
        onClick={increaseCount}
        disabled={isFull}>
        들어오시오
      </button>

      <button
        className={styles.btn}
        onClick={decreaseCount}>
        나가시오
      </button>

      {/* count값이 10이되면(isFull===true) 아래 메시지 출력 */}
      {isFull && <p className={styles.pTag}>정원 초과!</p>}
    </div>
  )
}

export default Accom