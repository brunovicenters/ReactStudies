export default function MedicalRecord({name = 'Anonymous', age, gender = 'Undefined', symptoms}: { name?: string, age: number, gender?: string, symptoms: string[] }) {
    
    return (
        <div className="flex flex-col justify-center items-start h-72 border-s-2 border-red-500 pl-2">
            <h1 className="text-3xl text-red-500">Medical Record</h1>
            <p className="font-bold text-xl text-green-500">
                Name: <span className="text-blue-500">{name}</span>
            </p>
            <p className="font-bold text-xl text-green-500">
                Age: <span className="text-blue-500">{age}</span>
            </p>
            <p className="font-bold text-xl text-green-500">
                Gender: <span className="text-blue-500">{gender}</span>
            </p>
            <p className="font-bold text-xl text-green-500">
                Symptoms:
                <ul>
                    {symptoms.map(s => {
                        return (
                        <li className="text-blue-500 flex items-center space-x-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                             {s}
                        </li>)
                    })}
                </ul>
            </p>
        </div>
    )
}
