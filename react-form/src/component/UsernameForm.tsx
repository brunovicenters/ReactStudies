import { useState } from "react";

export default function UsernameForm() {
    const [username, setUsername] = useState("");
    
    const updateUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(evt.target.value);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Username Form</h1>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1">
                    <label htmlFor="username" className="text-white text-lg">Username:</label>
                    <input id="username" onChange={updateUsername} value={username} className="w-full px-4 py-2 rounded" type="text" placeholder="Enter your username" />
                </div>
                <button className="bg-gradient-to-tr from-green-300/60 to-70% to-green-600/60 text-black px-4 py-2 rounded">
                    <span className="w-full h-full">
                        Submit
                    </span>
                </button>
            </div>
        </div>
    )
}