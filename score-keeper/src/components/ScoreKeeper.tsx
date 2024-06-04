import { useState } from "react"

export default function ScoreKeeper() {
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0})

    const increaseP1 = () => {
        setScores((s) => {
            return {...s, p1Score: s.p1Score + 1}})
    }

    const increaseP2 = () => {
        setScores((s) => {
            return {...s, p2Score: s.p2Score + 1}})
    }

    return (
        <div className="w-52 flex flex-wrap">
            <div className="w-1/2 text-white flex flex-col justify-center items-center">
                <p className="text-xl">Player 1: </p>
                <span>{scores.p1Score}</span>
            </div>
            <div className="w-1/2 text-white flex flex-col justify-center items-center">
                <p className="text-xl">Player 2: </p>
                <span>{scores.p2Score}</span>
            </div>
            <div className="w-full">
                <button onClick={increaseP1} className="w-1/2 p-2 rounded-lg bg-red-400 text-white shadow-lg shadow-red-400">+1 Player 1</button>
                <button onClick={increaseP2} className="w-1/2 p-2 rounded-lg bg-blue-400 text-white shadow-lg shadow-blue-400">+1 Player 2</button>
            </div>
        </div>
    )
}