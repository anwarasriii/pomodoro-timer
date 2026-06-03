import React, { useEffect, useState } from 'react'
import Timer from './components/Timer'
import Controls from './components/Controls';
import ProgressBar from './components/ProgressBar';
import { usePomodoro } from './hooks/usePomodoro';
import './App.css'

const App = () => {
  const {
    timeLeft,
    mode,
    start,
    pause,
    reset,
  } = usePomodoro();

  return (
    <div className='container'>
      <h2>{mode === 'work' ? 'Work Session' : 'Break Session'}</h2>
      <Timer timeLeft={timeLeft}/>
      <Controls
        onStart={start}
        onPause={pause}
        onReset={reset}
      />
      <ProgressBar
        timeLeft={timeLeft} mode={mode}
      />
    </div>
  )
}

export default App