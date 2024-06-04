import { useState } from "react";

export default function FancyScoreKeeper({qty = 2, target = 10}: {qty: number, target: number}) {
    const [playersScores, setPlayersScores] = useState(new Array(qty).fill(0))

    const increaseScore = (i: number) => {
        let winner = false;
        playersScores.map((s) => s === target ? winner = true : null);

        if (winner) {
            return;
        }
        setPlayersScores((s) => {
            return s.map((s, index) => index === i ? s + 1 : s);
        })
    }

    const reset = () => {
        setPlayersScores(new Array(qty).fill(0))
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="relative text-center text-white font-bold mb-5 uppercase border-b border-slate-400 shadow-lg shadow-amber-400 hover:-translate-y-1 hover:shadow-amber-600">
                <h1 className="text-3xl">Fancy Score Keeper</h1>
                <button onClick={reset} className="absolute top-1 -right-10 uppercase p-1 rounded-lg text-slate-900 bg-red-300 shadow-red-300 hover:bg-red-400 shadow-lg hover:shadow-red-400">Reset</button>
            </div>
            <div className="w-full flex space-x-2 flex-wrap justify-center">
                {playersScores.map((s, i) => {
                    return (
                        <div onClick={() => increaseScore(i)} key={i} className="relative w-36 mb-5 text-white flex flex-col justify-center items-center">
                            { s === target  ? <span className="absolute text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-green-900/70 p-2 rounded-lg">WON!!</span> : null}
                            
                            <p className="text-xl">Player {i+1}: </p>
                            <span>{s}</span>
                            <button className="flex-1 p-2 rounded-lg text-slate-900 bg-amber-300 shadow-amber-300 hover:bg-amber-400 shadow-lg hover:shadow-amber-400">+1 Player {i+1}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}