import { useState } from "react";

function FruitForm() {
  const [fruit, setFruit] = useState('')

  const changeFruit = (event) => {
    setFruit(event.target.value)
    console.log(event)
  }

  const submitFruit = (event) => {
    alert('너가 선택한 과일이 ' + fruit + ' 가 맞느냐?')
    console.log(fruit)
    setFruit('')
    event.preventDefault()
  }

  return (
    <form onSubmit={submitFruit}>
      <label>과일을 선택하세요 : </label>

      <br />

      <select value={fruit} onChange={changeFruit}>
        <option>과일을 선택하세요.</option>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="grape">포도</option>
        <option value="watermelon">수박</option>
      </select>

      <br />
      {/* <input type="file"></input> */}
      <button type="submit">과일 선택 완료!</button>
    </form>
  )
}

export default FruitForm