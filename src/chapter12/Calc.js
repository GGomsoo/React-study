import { useState } from "react"
import TempInput from "./TempInput"

function Boiling(props) {
  // 100도 넘으면 물 끓는다!!!
  if (props.celsius >= 100) {
    return <h2>라면 넣어라 용두야</h2>
  }
  else {
    return <h2>이 물론 아무것도 못한다~</h2>
  }
}

// 화씨를 섭씨로 변경
function toCelcius(fahr) {
  return ((fahr - 32) * 5) / 9
}

// 섭씨를 화씨로 변경
function toFahrenheit(cels) {
  return ((cels * 9) / 5) + 32
}

// 온도
function tryConvert(temp, convert) {
  const input = parseFloat(temp)
  if (Number.isNaN(input)) {
    return ""
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

function Calc(props) {
  const [temperature, setTemperature] = useState('')
  const [scale, setScale] = useState("c")

  const changeCels = (temperature) => {
    setTemperature(temperature)
    setScale("c")
  }

  const changeFahr = (temperature) => {
    setTemperature(temperature)
    setScale("f")
  }
  const celsius = (
    scale === "f" ? tryConvert(temperature, toCelcius) : temperature
  )
  const fahreneit = (
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature
  )

  return (
    <div>
      <TempInput 
      scale="c"
      temperature={celsius}
      onTempChange={changeCels}/>

      <TempInput 
      scale="f"
      temperature={fahreneit}
      onTempChange={changeFahr}/>

      <Boiling celsius={parseFloat(celsius)} />
    </div>
  )
}


export default Calc