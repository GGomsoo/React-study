import { useEffect, useState } from "react"

function Count() {
  const [counter, setCounter] = useState(0)

  // 강의에서는 onclick 라는 변수를 따로 설정하지 않고
  // button의 onClick 이벤트 내에 함수를 다음과 같이 적어버림
  // onClick={() => setCounter(counter + 1)}

  const onclick = () => {
    setCounter(counter => counter + 1)
    console.log("현재 숫자 : ", counter+1)
  }
  // ComponentDidMount, componentDidUpdate와 비슷하게 작동
  useEffect(() => {
    // 인터넷 탭 제목이 바뀐다.
    document.title = `넌 ${counter}번 눌렀다.`
  }, [counter])

  return (
    <div>
      <p>총 {counter}번 클릭함</p>
      <button onClick={onclick}>
        눌러봐
      </button>
    </div>
  )
}

export default Count