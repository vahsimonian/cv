import React, { useContext } from 'react'
import { Context } from '../Context'
import '../App.css'

const SpeedTypeGame = () => {
  const {
    handleChange,
    text,
    textBoxRef,
    timeRemaining,
    startGame,
    isTimeRunning,
    wordcount,
  } = useContext(Context)

  return (
    <div className='speed-game-body'>
      <h1 className='header-speed-game'>How fast do you type?</h1>
      <textarea
        className='textarea-speed-game'
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button
        className='speed-game-btn'
        onClick={startGame}
        disabled={isTimeRunning}
      >
        Start
      </button>
      <br />
      <h1 className='header-speed-game'>Word Count: {wordcount}</h1>
    </div>
  )
}

export default SpeedTypeGame
