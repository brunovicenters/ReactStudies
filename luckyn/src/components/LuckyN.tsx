import { useState } from "react";
import { getRolls, sum } from "../utils";
import Dice from "./Dice/Dice";

export default function LuckyN({numDice=2, goal=6}: {numDice: number, goal: number}) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = sum(dice) === goal;

    function roll() {
        setDice(getRolls(numDice));
    }

    return (
        <main className={`${isWinner ? 'bg-green-600/30 shadow-lg shadow-green-800/50' : ''} flex flex-col justify-center items-center border-2 border-amber-600 p-4 rounded-lg`}>
            <div className="text-amber-600 bg-slate-900 p-2 rounded-lg shadow-md shadow-amber-600/50 text-3xl font-bold mb-10">
                Lucky {goal}
            </div>
            <Dice dice={dice} color="#ef4444" colorHover="#b91c1c"/>
            <button onClick={roll} className="transition ease-in-out duration-100 hover:-rotate-12 text-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-black hover:text-white p-2 rounded-lg uppercase mt-4 shadow-md shadow-emerald-500/50 hover:shadow-lg hover:shadow-emerald-600/50">Roll</button>
            {isWinner && <p className="text-3xl font-bold text-white mt-4">You won!</p>}
        </main>
    )
}