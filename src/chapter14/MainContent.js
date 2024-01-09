import { useContext } from "react";
import ContextTheme from "./ContextTheme";
import styles from './MainContent.module.css'

function MainContent() {
  const { theme, toggleTheme } = useContext(ContextTheme)

  return (
    <div
      className={styles.mainStyle}
      style=
      {{
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white"
      }}
    >
      <h3>화이트모드 / 다크모드 기능 구현중.</h3>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  )
}

export default MainContent