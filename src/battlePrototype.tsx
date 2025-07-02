import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { GiSwordman, GiSwordwoman } from "react-icons/gi";

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
    for (let q = 0; q < arr.length; q++) {
      if (arr[q] === "∩" && arr[q - 2] != "|") {
        arr[q - 2] = "∩";
        arr[q] = "▢";
      }
    }
    str = arr.join("");
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
    setCount(str);
  };
  return (
    <Card className="max-w-xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="ubuntu-font" style={{ color: '#55575b' }}>Error Example</CardTitle>
        <CardDescription className="text-gray-600">A playful interactive error demo. Move or attack the symbols using the buttons below.</CardDescription>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: 30, textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 2 }}>
          {Array.isArray(count)
            ? count.map((char, idx) =>
                char === "∩"
                  ? <GiSwordman key={idx} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  : char === "☄"
                    ? <GiSwordwoman key={idx} style={{ display: 'inline', verticalAlign: 'middle', transform: 'scaleX(-1)' }} />
                    : char
              )
            : count.split("").map((char, idx) =>
                char === "∩"
                  ? <GiSwordman key={idx} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  : char === "☄"
                    ? <GiSwordwoman key={idx} style={{ display: 'inline', verticalAlign: 'middle', transform: 'scaleX(-1)' }} />
                    : char
              )}
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <button
            type="button"
            className="btn cursor-pointer"
            style={{
              backgroundColor: "pink",
              fontSize: 28,
              border: "none",
              color: "white",
              borderRadius: 10,
              padding: 10,
              margin: 0,
            }}
            onClick={handleLeft}
          >
            «
          </button>
          <button
            type="button"
            className="btn cursor-pointer"
            style={{
              backgroundColor: "pink",
              fontSize: 28,
              border: "none",
              color: "white",
              borderRadius: 10,
              padding: 10,
              margin: 0,
            }}
            onClick={handleRight}
          >
            »
          </button>
          <button
            type="button"
            className="btn cursor-pointer"
            style={{
              backgroundColor: "pink",
              fontSize: 28,
              border: "none",
              color: "white",
              borderRadius: 10,
              padding: 10,
              margin: 0,
            }}
            onClick={handleAttack}
          >
            ⚔
          </button>
          <button
            type="button"
            className="btn cursor-pointer"
            style={{
              backgroundColor: "pink",
              fontSize: 28,
              border: "none",
              color: "white",
              borderRadius: 10,
              padding: 10,
              margin: 0,
            }}
            onClick={handleRight}
          >
            Duck
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ErrorExample;
