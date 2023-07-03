import React, { useState, createContext, useEffect, useRef } from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const STARTING_TIME = 3
  const [text, setText] = useState('')
  const [wordcount, setWordcount] = useState(0)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const textBoxRef = useRef(null)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  function handleChange(e) {
    const { value } = e.target
    setText(value)
  }

  function calculateWordcount(text) {
    const wordsArr = text.trim().split(' ')
    return wordsArr.filter((word) => word !== '').length
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining(timeRemaining - 1)
      }, 1000)
      textBoxRef.current.focus()
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false)
      setWordcount(calculateWordcount(text))
    }
  }, [timeRemaining, isTimeRunning])

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText('')
    setWordcount(0)
  }

  return (
    <Context.Provider
      value={{
        toggleNav,
        isNavOpen,
        handleChange,
        text,
        textBoxRef,
        timeRemaining,
        startGame,
        isTimeRunning,
        wordcount,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
