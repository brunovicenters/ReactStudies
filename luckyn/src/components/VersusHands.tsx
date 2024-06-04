import { useState } from "react";
import { getRolls, sum } from "../utils";
import Dice from "./Dice/Dice";
import Button from "./Partials/Button";

export default function VersusHands({numDices=2}: {numDices: number}) {
    const [dicePlayer1, setDicePlayer1] = useState(getRolls(numDices));
    const [dicePlayer2, setDicePlayer2] = useState(getRolls(numDices));

    const isWinner: boolean = sum(dicePlayer1) > sum(dicePlayer2);

    return (
        <div className="flex flex-col w-full">
            <h1 className="text-3xl font-bold uppercase text-rose-500 text-center">Versus Hands</h1>
            <div className="flex w-full">
                <div className={`flex flex-col justify-center items-center p-3 border-r-2 border-t-2 border-b-2 border-amber-600 rounded-r-lg w-1/3 ${isWinner ? 'bg-green-600/30 shadow-lg shadow-green-800/50' : 'bg-red-600/30 shadow-lg shadow-red-800/50'}`}>
                    <h2 className="text-xl font-bold uppercase text-teal-600 mb-5">Player 1</h2>
                    <Dice dice={dicePlayer1} color="#2dd4bf" colorHover="#0f766e"/>
                </div>
                <div className="flex justify-center items-center w-1/3">
                    <h2 className="text-2xl font-bold uppercase text-orange-600">VS</h2>
                </div>
                <div className={`flex flex-col justify-center items-center p-3 border-l-2 border-t-2 border-b-2 border-amber-600 rounded-l-lg w-1/3 ${!isWinner ? 'bg-green-600/30 shadow-lg shadow-green-800/50' : 'bg-red-600/30 shadow-lg shadow-red-800/50'}`}>
                    <h2 className="text-xl font-bold uppercase text-violet-600 mb-5">Player 2</h2>
                    <Dice dice={dicePlayer2} color="#a78bfa" colorHover="#5b21b6"/>
                </div>
            </div>
            <div className="w-full flex justify-center mt-4">
                <Button text="Rematch" onClick={() => {
                    setDicePlayer1(getRolls(numDices));
                    setDicePlayer2(getRolls(numDices));
                }} />
            </div>
        </div>
    )
}