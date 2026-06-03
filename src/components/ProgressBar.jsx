import React from 'react'

const ProgressBar = ({timeLeft, mode}) => {

    const totalTime = mode === 'work' ? 1500 : 300;
    const progress = Math.floor(((totalTime - timeLeft) / totalTime) * 100);

  return (
    <div className='progress-container'>
        <div className='progress-bar'>
        <h2>{progress}%</h2>
        </div>
    </div>
  )
}

export default ProgressBar