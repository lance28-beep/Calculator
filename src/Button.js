import React from 'react'

function Button({ name, func, keyCode, inputHandler }) {
  return (
    <button
      id={name}
      key={keyCode}
      className={`${name} ${
        name === 'clear' ? 'width' : name === 'add' ? 'height' : ''
      }`}
      onClick={() => inputHandler(func)}
      value={func}
    >
      {func === '*' ? 'x' : func}
    </button>
  )
}

export default Button
