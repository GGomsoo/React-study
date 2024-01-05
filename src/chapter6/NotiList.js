import React from "react";
import Notification from "./Noti";

const reserveNoti = [
  {
    id : 1,
    message : "안녕, 오늘 일정 알려줄게"
  },
  {
    id : 2,
    message : "점심 시간이야"
  },
  {
    id : 3,
    message : "이제 일어나야지?"
  },
]

var timer

// LifeCycle Hook
class NotiList extends React.Component {
  constructor(props) {
    super(props)

    // 앞으로 사용할 데이터를 state 에 넣어서 초기화
    this.state = {
      notifications : []
    }
  }

  // 1초마다 정해진 작업을 수행
  componentDidMount() {
    const { notifications } = this.state
    timer = setInterval(() => {
      if (notifications.length < reserveNoti.length) {
        const index = notifications.length
        notifications.push(reserveNoti[index])

        // state를 업데이트하기 위해 setState함수를 사용
        this.setState({
          notifications: notifications
        })
      }

      else {
        // message를 다 띄우면 state를 비운다. (초기화)
        // Unmount된 log를 보기 위함.
        this.setState({
          notifications: []
        })
        clearInterval(timer)
      }
    }, 1000)
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
          <Notification 
          key={notification.id}
          id={notification.id}
          message={notification.message}/>)
        })}
      </div>
    )
  }
}

export default NotiList