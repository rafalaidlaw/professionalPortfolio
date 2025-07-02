import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { GiSwordman, GiSwordwoman, GiBroadsword, GiMetalHand, GiCrossedSwords, GiGooeySword } from "react-icons/gi";
import { RiResetLeftLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

let str = "\\" + "\\" + "▢-▢-∩-▢-▢-||-▢-▢-☄-▢-▢//";
let arr = str.split("");
const INITIAL_STR = str;
const INITIAL_ARR = arr.slice();
console.log(arr);
//ııııııı
const attackMove = () => {
  for (let n = 0; n < arr.length; n++) {
    if (arr[n] === "⁍") {
      if (arr[n + 2] === "☄") {
        arr[n + 2] = "✦";
        arr[n] = "▢";
        // After placing gooey sword, push the enemy one square to the right if possible
        if (arr[n + 3] === "▢") {
          arr[n + 3] = "☄";
        }
        break;
      }
      if (arr[n + 3] != "|" && arr[n + 2] != "|" && arr[n + 2] !== undefined) {
        arr[n + 2] = "⁍";
        arr[n] = "▢";
        break;
      }
      if (arr[n + 2] === "|" && arr[n + 3] != "|" && arr[n + 4] != "|" && arr[n + 4] !== undefined) {
        arr[n + 4] = "⁍";
        arr[n] = "▢";
        break;
      }
      if (arr[n + 2] === "|" && arr[n + 3] === "|" && arr[n + 5] != "|" && arr[n + 4] != "|" && arr[n + 5] !== undefined) {
        arr[n + 5] = "⁍";
        arr[n] = "▢";
        break;
      }
    }
  }
  // Ensure only one enemy is present after push
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "☄" && arr[i - 1] === "✦") {
      arr[i - 1] = "✦";
    }
  }
};

// Define the player icon
const PLAYER_ICON = GiSwordman;
// Define the enemy icon
const ENEMY_ICON = GiSwordwoman;
// Define the player sword icon
const PLAYER_SWORD = GiBroadsword;

const ErrorExample = () => {
  const [count, setCount] = useState(str);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Handler for mouse movement over button
  const handleLeft = () => {
    let moved = false;
    attackMove();
    for (let q = 0; q < arr.length; q++) {
      if (
        arr[q] === "∩" &&
        arr[q - 2] != "|" &&
        arr[q - 1] != "|" &&
        arr[q - 2] !== undefined &&
        arr[q - 2] !== "\\" &&
        arr[q - 1] !== "\\"
      ) {
        arr[q - 2] = "∩";
        arr[q] = "▢";
        moved = true;
      }
    }
    if (moved) {
      str = arr.join("");
      setCount(str);
    }
  };
  const handleRight = () => {
    let moved = false;
    attackMove();
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i] === "∩" &&
        arr[i + 2] != "|" &&
        arr[i + 1] != "|" &&
        arr[i + 2] !== undefined &&
        arr[i + 2] !== "/" &&
        arr[i + 1] !== "/"
      ) {
        arr[i + 2] = "∩";
        arr[i] = "▢";
        moved = true;
        break;
      }
    }
    if (moved) {
      str = arr.join("");
      setCount(str);
    }
  };
  const handleAttack = () => {
    attackMove();
    let gooeyPlaced = false;
    for (let q = 0; q < arr.length; q++) {
      if (arr[q] === "∩") {
        if (arr[q + 2] === "☄") {
          arr[q + 2] = "✦";
          arr[q] = "▢";
          // After placing gooey sword, push the enemy one square to the right if possible
          if (arr[q + 3] === "▢") {
            arr[q + 3] = "☄";
          }
          gooeyPlaced = true;
          
          break;
        }
      }
    }
    if (!gooeyPlaced) {
      for (let q = 0; q < arr.length; q++) {
        if (arr[q] === "∩" && arr[q + 2] === "▢") {
          arr[q + 2] = "⁍";
        }
      }
    }
    str = arr.join("");
    // After all attack logic, push the enemy to the right of every gooey sword if possible
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === "✦" && arr[i + 1] === "▢") {
        arr[i + 1] = "☄";
      }
    }
    setCount(str);
  };
  const handleReset = () => {
    str = INITIAL_STR;
    arr = INITIAL_ARR.slice();
    setCount(str);
  };
  const handleCursorEnter = () => {
    setShowCursor(true);
  };
  const handleCursorLeave = () => {
    setShowCursor(false);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };
  return (
    <Card className="relative">
      <CardHeader>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: 30, textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 2 }}>
          {Array.isArray(count)
            ? count.map((char, idx) =>
                char === "∩"
                  ? <PLAYER_ICON key={idx} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  : char === "☄"
                    ? <ENEMY_ICON key={idx} style={{ display: 'inline', verticalAlign: 'middle', transform: 'scaleX(-1)' }} />
                    : char === "⁍"
                      ? <PLAYER_SWORD key={idx} style={{ display: 'inline', verticalAlign: 'middle', transform: 'scale(.8)' }} />
                    : char === "✦"
                      ? <GiGooeySword key={idx} style={{ display: 'inline', verticalAlign: 'middle' }} />
                    : char
              )
            : count.split("").map((char, idx) =>
                char === "∩"
                  ? <PLAYER_ICON key={idx} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  : char === "☄"
                    ? <ENEMY_ICON key={idx} style={{ display: 'inline', verticalAlign: 'middle', transform: 'scaleX(-1)' }} />
                    : char === "⁍"
                      ? <PLAYER_SWORD key={idx} style={{ display: 'inline', verticalAlign: 'middle', transform: 'scale(.8)' }} />
                    : char === "✦"
                      ? <GiGooeySword key={idx} style={{ display: 'inline', verticalAlign: 'middle' }} />
                    : char
              )}
        </p>
        <div
          className="inline-flex gap-x-1 mt-2 bg-white pt-1 pb-1 rounded-md select-none cursor-default"
          style={{ position: 'relative', cursor: showCursor ? 'none' : 'default' }}
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
          onMouseMove={handleMouseMove}
        >
          {/* Custom cursor icon */}
          {showCursor && (
            <span
              style={{
                position: 'fixed',
                left: cursorPos.x + 2,
                top: cursorPos.y + 2,
                pointerEvents: 'none',
                zIndex: 9999,
                fontSize: 28,
              }}
            >
              <GiMetalHand style={{ transform: 'scaleX(-1)' }} />
            </span>
          )}
          <Button
            type="button"
            variant="outline"
            className="px-4 py-0.5 text-xs font-medium rounded-md border w-fit select-none cursor-default hover:bg-[#55575b] hover:text-gray-100"
            style={{ cursor: showCursor ? 'none' : undefined }}
            onClick={handleLeft}
          >
            «
          </Button>
          <Button
            type="button"
            variant="outline"
            className="px-4 py-0.5 text-xs font-medium rounded-md border w-fit select-none cursor-default hover:bg-[#55575b] hover:text-gray-100"
            style={{ cursor: showCursor ? 'none' : undefined }}
            onClick={handleRight}
          >
            »
          </Button>
          <Button
            type="button"
            variant="outline"
            className="px-4 py-0.5 text-xs font-medium rounded-md border w-fit select-none cursor-default hover:bg-[#55575b] hover:text-gray-100"
            style={{ cursor: showCursor ? 'none' : undefined }}
            onClick={handleAttack}
          >
            <GiCrossedSwords style={{ display: 'inline', verticalAlign: 'middle' }} />
          </Button>
          <Button
            type="button"
            variant="outline"
            className="px-4 py-0.5 text-xs font-medium rounded-md border w-fit select-none cursor-default hover:bg-[#55575b] hover:text-gray-100"
            style={{ cursor: showCursor ? 'none' : undefined }}
            onClick={handleRight}
          >
            Riposte
          </Button>
          <Button
            type="button"
            variant="outline"
            className="px-4 py-0.5 text-xs font-medium rounded-md border w-fit select-none cursor-default hover:bg-[#55575b] hover:text-gray-100"
            style={{ cursor: showCursor ? 'none' : undefined }}
            onClick={handleReset}
          >
            <RiResetLeftLine style={{ display: 'inline', verticalAlign: 'middle' }} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ErrorExample;
