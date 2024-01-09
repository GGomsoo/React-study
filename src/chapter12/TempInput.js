const tempTypes = {
  c : "섭씨",
  f : "화씨"
}

function TempInput(props) {
  const tempChange = (event) => {
    props.onTempChange(event.target.value)
  }

  // input에서 value의 props.temperature는
  // Calc.js의 const로 선언한 temperature값
  return (
    <fieldset>
      <legend>
        온도를 입력하시오 / 단위 : {tempTypes[props.scale]}
      </legend>
      <input value={props.temperature} onChange={tempChange}></input>
    </fieldset>
  )
}

export default TempInput