import React, { useState } from 'react'

function BackGroundChanger({ col }) {
  const colors = ["red", "blue", "green", "yellow", "gray", "black", "pink", "default"]
  const [color, setColor] = useState({ col })

  function handleColor(val) {
    if (val == "default") {
      setColor(" ")
    }
    else {
      setColor(val)

    }
  }
  return (
    <div style={{ background: color, minHeight: "100vh", padding: "20px" }}>
      <h1>Background Changer</h1>
      <div>
        {colors.map((val) => (
          <button key={val} onClick={() => handleColor(val)} style={{ margin: "5px" }}>
            {val}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BackGroundChanger