import { useState } from "react";

function SignUp() {
  const [name, setName] = useState('')
  const [gender, setGender] = useState("남성")

  const changeName = (event) => {
    setName(event.target.value)
  }

  const submitName = (event) => {
    alert(`이름을 제출합니다 
    이름 : ${name} / 성별 : ${gender}`)
    console.log(name)
    event.preventDefault()
  }

  const changeGender = (event) => {
    setGender(event.target.value)
  }

  return (
    <form onSubmit={submitName}>
      <label>
        이름 : 
        <input type="text" value={name} onChange={changeName}></input>
      </label>
      <hr/>
      <label>
        성별 : 
        <select value={gender} onChange={changeGender}>
          <option value="남성">남성</option>
          <option value="여성">여성</option>
        </select>
      </label>
      <button type="submit">이름 제출합니다</button>
    </form>
  )
}

export default SignUp