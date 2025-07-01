import React, { useState } from "react";

let str = "\\" + "\\" + "▢-▢-∩-▢-▢-||-▢-▢-☄-▢-▢//";
let arr = str.split("");
console.log(arr);
//ııııııı
const attackMove = () => {
  for (let n = 0; n < arr.length; n++) {
    if (arr[n] === "⁍" && arr[n + 3] != "|") {
      arr[n + 2] = "⁍";
      arr[n] = "▢";
      break;
    }
    if (arr[n] === "⁍" && arr[n + 2] === "|" && arr[n + 3] != "|") {
      arr[n + 4] = "⁍";
      arr[n] = "▢";
      break;
    }
    if (arr[n] === "⁍" && arr[n + 2] === "|" && arr[n + 3] === "|") {
      arr[n + 5] = "⁍";
      arr[n] = "▢";
      break;
    }
  }
};

const ErrorExample = () => {
  const [count, setCount] = useState(str);

  const handleLeft = () => {
    attackMove();
    console.log("left");
    for (let q = 0; q < arr.length; q++) {
      if (arr[q] === "∩" && arr[q - 2] != "|") {
        arr[q - 2] = "∩";
        arr[q] = "▢";
      }
    }
    str = arr.join("");
    console.log(arr);
    setCount(str);
  };
  const handleRight = () => {
    attackMove();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "∩" && arr[i + 2] != "|") {
        arr[i + 2] = "∩";
        arr[i] = "▢";
        break;
      }
    }
    str = arr.join("");
    console.log(arr);
    setCount(str);
  };
  const handleAttack = () => {
    attackMove();
    for (let q = 0; q < arr.length; q++) {
      if (arr[q] === "∩") {
        arr[q + 2] = "⁍";
      }
    }
    str = arr.join("");
    console.log(arr);
    setCount(str);
  };
  return (
    <div>
      <p style={{ fontSize: 30 }}>{count}</p>
      <div
        style={{
          grid: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          className="btn"
          style={{
            justifyContent: "space-between",
            backgroundColor: "pink",
            fontSize: 28,
            border: "none",
            color: "white",
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}
          onClick={handleLeft}
        >
          «
        </button>
        <button
          type="button"
          className="btn"
          style={{
            backgroundColor: "pink",
            fontSize: 28,
            border: "none",
            color: "white",
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}
          onClick={handleRight}
        >
          »
        </button>
        <button
          type="button"
          className="btn"
          style={{
            backgroundColor: "pink",
            fontSize: 28,
            border: "none",
            color: "white",
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}
          onClick={handleAttack}
        >
          ⚔
        </button>

        <button
          type="button"
          className="btn"
          style={{
            backgroundColor: "pink",
            fontSize: 28,
            border: "none",
            color: "white",
            borderRadius: 10,
            padding: 10,
            margin: 10,
          }}
          onClick={handleRight}
        >
          Duck
        </button>
      </div>
    </div>
  );
};

export default ErrorExample;
