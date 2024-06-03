import { useState } from "react"

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(false)
    const toggleIsHappy = () => setIsHappy(!isHappy)

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white uppercase">{isHappy ? "😁" : "😟"}</h1>
            <input onClick={toggleIsHappy} type="checkbox" className="mt-4 rounded-lg w-6 h-6" />
        </div>
    )
}