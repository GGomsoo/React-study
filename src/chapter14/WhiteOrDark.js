import { useCallback, useState } from "react";
import ContextTheme from "./ContextTheme";
import MainContent from "./MainContent";

function WhiteOrDark() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = useCallback(() => {
    if (theme == "light") {
      setTheme("dark")
    }
    else if (theme == "dark") {
      setTheme("light")
    }
  },[theme])

  return (
    <ContextTheme.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ContextTheme.Provider>
  )
}

export default WhiteOrDark