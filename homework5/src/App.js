import "./components/Themes.css"
import React from "react"
import { useSelector } from "react-redux"
import './App.css'
import ThemeSwitcher from "./components/ThemeSwitcher"

function App() {

  const them = useSelector((state) => state.theme)
  return (
    <>
    <ThemeSwitcher />
    <h1 className={`${theme}`}>SOME RANDOM TEXT</h1>
    </>
  )
}

export default App
