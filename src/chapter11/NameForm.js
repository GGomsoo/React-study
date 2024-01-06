import { useState } from "react";

function NameForm() {
  // value의 초기값은 빈 문자열
  const [value, setValue] = useState('')

  // input 태그에서 활용할 onChange에 대한 변수
  const Nameplz = (event) => {
    // value가 event.target.value로 바뀐다는 의미.
    setValue(event.target.value)
  }

  // form 태그에서 활용
  const Namesubmit = (event) => {
    // 제출하면 아래와 같은 양식으로 alert창이 나타난다.
    alert('입력한 이름 : ' + value)
    console.log('입력한 이름 : ' + value)

    // 제출하고나면 value값은 다시 빈 문자열로 초기화
    setValue('')

    // 이벤트의 기본 동작을 취소하는 메서드
    // form 내부에서 submit 이벤트가 발생하면 페이지가 다시 로드되는데
    // 아래 메서드를 활용하면, 폼을 제출해도 페이지가 새로고침 되지않고 함수가 호출된다.
    event.preventDefault()
  }

  return (
    <form onSubmit={Namesubmit}>
      <label>이름 : </label>
      <input type="text" value={value} onChange={Nameplz} placeholder="이름을 입력하세요."></input>
      <button type="submit">제출하기!</button>
    </form>
  )
}

export default NameForm