import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { GiSwordman, GiSwordwoman, GiBroadsword, GiCrossedSwords, GiGooeySword, GiTombstone } from "react-icons/gi";
import { RiResetLeftLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

// Define board squares
const BOARD_LENGTH = 26;
const SQUARES = [2, 4, 6, 8, 10, 15, 17, 19, 21, 23]; // 10 logical squares
const PLAYER_SQUARES = SQUARES.slice(0, 5); // 2,4,6,8,10
const ENEMY_SQUARES = SQUARES.slice(5);      // 15,17,19,21,23

const PLAYER_START = PLAYER_SQUARES[2];
const ENEMY_START = ENEMY_SQUARES[ENEMY_SQUARES.length - 3]; // 21

const SQUARE_TYPE = {
  EMPTY: "▢",
  FILLER_DASH: "—",
  PLAYER: "∩",
  ENEMY: "☄",
  SWORD: "⁍",
  GOOEY: "✦",
  GRAVE: "†",
  BARRIER: "|",
  LEFT: "\\",
  RIGHT: "/",
};

const getInitialBoard = () => {
  const arr = Array(BOARD_LENGTH).fill(SQUARE_TYPE.EMPTY);
  arr[0] = SQUARE_TYPE.LEFT;
  arr[1] = SQUARE_TYPE.LEFT;
  arr[3] = SQUARE_TYPE.FILLER_DASH;
  arr[5] = SQUARE_TYPE.FILLER_DASH;
  arr[7] = SQUARE_TYPE.FILLER_DASH;
  arr[9] = SQUARE_TYPE.FILLER_DASH;
  arr[11] = SQUARE_TYPE.FILLER_DASH;
  arr[14] = SQUARE_TYPE.FILLER_DASH;
  arr[16] = SQUARE_TYPE.FILLER_DASH;
  arr[18] = SQUARE_TYPE.FILLER_DASH;
  arr[20] = SQUARE_TYPE.FILLER_DASH;
  arr[22] = SQUARE_TYPE.FILLER_DASH;

  arr[12] = SQUARE_TYPE.BARRIER;
  arr[13] = SQUARE_TYPE.BARRIER;
  arr[24] = SQUARE_TYPE.RIGHT;
  arr[25] = SQUARE_TYPE.RIGHT;
  arr[PLAYER_START] = SQUARE_TYPE.PLAYER;
  arr[ENEMY_START] = SQUARE_TYPE.ENEMY;
  return arr;
};

const BattleSwitchPrototype = () => {
  const [board, setBoard] = useState(getInitialBoard());
  const [playerPos, setPlayerPos] = useState(PLAYER_START);
  const [enemyPos, setEnemyPos] = useState(ENEMY_START);
  const [gooeyPos, setGooeyPos] = useState<number | null>(null);

  // Remove gooey sword at the start of each turn
  const clearGooey = (arr: string[]) => {
    if (gooeyPos !== null) {
      arr[gooeyPos] = SQUARE_TYPE.EMPTY;
      setGooeyPos(null);
    }
  };

  const handleLeft = () => {
    const arr = [...board];
    clearGooey(arr);
    let newPlayerPos = playerPos;
    switch (playerPos) {
      case PLAYER_SQUARES[0]: // far left
        // can't move left
        break;
      default:
        // move left
        arr[playerPos] = SQUARE_TYPE.EMPTY;
        newPlayerPos = PLAYER_SQUARES[PLAYER_SQUARES.indexOf(playerPos) - 1];
        arr[newPlayerPos] = SQUARE_TYPE.PLAYER;
        break;
    }
    setPlayerPos(newPlayerPos);
    setBoard(arr);
  };

  const handleRight = () => {
    const arr = [...board];
    clearGooey(arr);
    let newPlayerPos = playerPos;
    switch (playerPos) {
      case PLAYER_SQUARES[PLAYER_SQUARES.length - 1]: // far right
        // can't move right
        break;
      default:
        // move right
        arr[playerPos] = SQUARE_TYPE.EMPTY;
        newPlayerPos = PLAYER_SQUARES[PLAYER_SQUARES.indexOf(playerPos) + 1];
        arr[newPlayerPos] = SQUARE_TYPE.PLAYER;
        break;
    }
    setPlayerPos(newPlayerPos);
    setBoard(arr);
  };

  const handleAttack = () => {
    const arr = [...board];
    clearGooey(arr);
    let swordTarget: number | null = null;
    // Determine sword target
    const idx = PLAYER_SQUARES.indexOf(playerPos);
    if (idx !== -1 && idx < PLAYER_SQUARES.length - 1) {
      swordTarget = PLAYER_SQUARES[idx + 1];
    }
    if (swordTarget !== null) {
      // If sword hits enemy
      if (enemyPos === swordTarget) {
        arr[enemyPos] = SQUARE_TYPE.GOOEY;
        setGooeyPos(enemyPos);
        // Move enemy one square right if possible
        const enemyIdx = ENEMY_SQUARES.indexOf(enemyPos);
        if (enemyIdx !== -1 && enemyIdx < ENEMY_SQUARES.length - 1) {
          const newEnemyPos = ENEMY_SQUARES[enemyIdx + 1];
          arr[newEnemyPos] = SQUARE_TYPE.ENEMY;
          setEnemyPos(newEnemyPos);
        } else if (enemyIdx === ENEMY_SQUARES.length - 1) {
          // If enemy is at the last square, place a grave
          arr[enemyPos + 1] = SQUARE_TYPE.GRAVE;
        }
      }
    }
    setBoard(arr);
  };

  const handleReset = () => {
    setBoard(getInitialBoard());
    setPlayerPos(PLAYER_START);
    setEnemyPos(ENEMY_START);
    setGooeyPos(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      switch (e.key) {
        case "ArrowLeft":
        case "a":
        case "A":
          handleLeft();
          break;
        case "ArrowRight":
        case "d":
        case "D":
          handleRight();
          break;
        case " ":
        case "w":
        case "W":
        case "Enter":
          handleAttack();
          break;
        case "r":
        case "R":
          handleReset();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playerPos, enemyPos, board, gooeyPos]);

  // Render logic
  const renderSquare = (char: string, idx: number) => {
    switch (char) {
      case SQUARE_TYPE.PLAYER:
        return <GiSwordman key={idx} style={{ display: 'inline', verticalAlign: 'middle' }} />;
      case SQUARE_TYPE.ENEMY:
        return <GiSwordwoman key={idx} style={{ display: 'inline', verticalAlign: 'middle', transform: 'scaleX(-1)' }} />;
      case SQUARE_TYPE.SWORD:
        return <GiBroadsword key={idx} style={{ display: 'inline', verticalAlign: 'middle', transform: 'scale(.8)' }} />;
      case SQUARE_TYPE.GOOEY:
        return <GiGooeySword key={idx} style={{ display: 'inline', verticalAlign: 'middle' }} />;
      case SQUARE_TYPE.GRAVE:
        return <GiTombstone key={idx} style={{ display: 'inline', verticalAlign: 'middle' }} />;
      case SQUARE_TYPE.BARRIER:
        return <span key={idx} style={{ fontWeight: 'bold' }}>|</span>;
      case SQUARE_TYPE.LEFT:
        return <span key={idx} style={{ fontWeight: 'bold' }}>\</span>;
      case SQUARE_TYPE.RIGHT:
        return <span key={idx} style={{ fontWeight: 'bold' }}>/</span>;
      default:
        return <span key={idx}>{char}</span>;
    }
  };

  return (
    <Card className="relative">
      <CardHeader></CardHeader>
      <CardContent>
        <p style={{ fontSize: 30, textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 2 }}>
          {board.map((char, idx) => renderSquare(char, idx))}
        </p>
        <div className="flex justify-center mt-2">
          <div className="inline-flex gap-x-1 bg-white pt-1 pb-1 rounded-md select-none cursor-default">
            <Button
              type="button"
              variant="outline"
              className="px-4 py-0.5 text-xs font-medium rounded-md border w-fit select-none cursor-default hover:bg-[#55575b] hover:text-gray-100"
              onClick={handleLeft}
            >
              «
            </Button>
            <Button
              type="button"
              variant="outline"
              className="px-4 py-0.5 text-xs font-medium rounded-md border w-fit select-none cursor-default hover:bg-[#55575b] hover:text-gray-100"
              onClick={handleRight}
            >
              »
            </Button>
            <Button
              type="button"
              variant="outline"
              className="px-4 py-0.5 text-xs font-medium rounded-md border w-fit select-none cursor-default hover:bg-[#55575b] hover:text-gray-100"
              onClick={handleAttack}
            >
              <GiCrossedSwords style={{ display: 'inline', verticalAlign: 'middle' }} />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="px-4 py-0.5 text-xs font-medium rounded-md border w-fit select-none cursor-default hover:bg-[#55575b] hover:text-gray-100"
              onClick={handleReset}
            >
              <RiResetLeftLine style={{ display: 'inline', verticalAlign: 'middle' }} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BattleSwitchPrototype; 