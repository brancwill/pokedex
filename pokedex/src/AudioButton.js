import React from 'react';

function AudioButton(props) {
  let audio = new Audio(props.cry)

  const start = () => {
    audio.play()
  }

  return (
    < div className="AudioButton">
      <button onClick={start}>&#9654;</button>
    </div >
  );
}

export default AudioButton;