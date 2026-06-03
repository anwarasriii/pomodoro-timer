import React from 'react'


const Controls = ({onStart, onPause, onReset}) => {

    return (
        <div className='button'>
            <button onClick={onStart}>Start</button>
            <button onClick={onPause}>Pause</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default Controls