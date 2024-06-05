import { useState } from "react";

export default function UsernameForm() {
    const [formData, setFormData] = useState({username: '', password: ''});

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        setFormData(oldData => {
            return{...oldData, [name]: value}
        });
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Username Form</h1>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1">
                    <label htmlFor="username" className="text-white text-lg">Username:</label>
                    <input id="username" name="username" onChange={handleChange} value={formData.username} className="w-full px-4 py-2 rounded" type="text" placeholder="Enter your username" />
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="password" className="text-white text-lg">Password:</label>
                    <input id="password" name="password" onChange={handleChange} value={formData.password} className="w-full px-4 py-2 rounded" type="password" placeholder="********" />
                </div>
                <button className="bg-gradient-to-tr from-green-300/60 to-70% to-green-600/60 text-white box-border hover:border-2 border-white px-4 py-2 rounded">
                    <span className="w-full h-full">
                        Submit
                    </span>
                </button>
            </div>
        </div>
    )
}