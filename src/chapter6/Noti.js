import React from "react";
import styles from "./Noti.module.css"

class Notification extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  // LifeCycle Hook 보기위한 console.log
  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called.`)
  }

  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called.`)
  }

  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called.`)
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.messageText}>{this.props.message}</span>
      </div>
    )
  }
}

export default Notification