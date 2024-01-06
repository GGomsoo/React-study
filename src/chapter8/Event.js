// import React from "react"
// // 최근 문법? 이 아닌 것 같다.
// // 새롭게 작성하겠음.

import { useState } from "react"

// class ConfirmBtn extends React.Component {
//   constructor(props) {
//     super(props)

//     // 확인여부를 저장하기 위한 isConfirmed
//     // 초기값은 false
//     this.state = {
//       isConfirmed: false
//     }

//     // this.handleConfirm = this.handleConfirm.bind(this)
//   }

//   // Btn의 onclick를 처리하기 위한 EventHandler
//   // bind 사용하는 방식으로 EventHandler 처리
//   // bind 방식이 무엇인가?????
//   handleConfirm = () => {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed
//     }))
//   }

//   render() {
//     return (
//       <button
//         onClick={this.handleConfirm}
//         disabled={this.state.isConfirmed}
//       >
//         {this.state.isConfirmed ? "확인됐다." : "몰?루"}
//       </button>
//     )
//   }
// }

// export default ConfirmBtn

function Event() {
  const [confirm, setConfirm] = useState(false)
  const click = () => {
    // 현재 상태를 반전시키는 방법.
    // 하지만, 상태가 비동기적으로 업데이트 되기 때문에
    // 항상 최신 상태를 가져온다고 할 순 없다.
    // setConfirm(!confirm)

    // 현재 confirm 상태를 반전시킨다. 라는 의미.
    setConfirm((prevconfirm) => !prevconfirm)
    console.log("바꼈다.")
  }

  return (
    <div>
      <button 
      onClick={click}
      disabled={confirm}>
        {confirm ? "확인됐다." : "몰?루"}
      </button>
    </div>
  )
}

export default Event