import { useState } from "react";
import { getRolls } from "../utils";
import Dice from "./Dice/Dice";
import Button from "./Partials/Button";

export default function LuckyN({title="Dice game", numDice=2, winCheck}: {title: string, numDice: number, winCheck: (dice: number[]) => boolean}) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);

    function roll() {
        setDice(getRolls(numDice));
    }

    return (
        <main className={`${isWinner ? 'bg-green-600/30 shadow-lg shadow-green-800/50' : ''} flex flex-col justify-center items-center border-2 border-amber-600 p-4 rounded-lg`}>
            <div className="text-amber-600 bg-slate-900 p-2 rounded-lg shadow-md shadow-amber-600/50 text-3xl font-bold mb-10">
                LuckyN - {title}
            </div>
            <Dice dice={dice} color="#ef4444" colorHover="#b91c1c"/>
            <Button text="Roll" onClick={roll} />
            {isWinner && <p className="text-3xl font-bold text-white mt-4">You won!</p>}
        </main>
    )
}