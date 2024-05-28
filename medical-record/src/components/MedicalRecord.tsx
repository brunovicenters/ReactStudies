export default function MedicalRecord({name = 'Undefined', age, gender = 'Undefined', symptoms}) {
    
    return (
        <div className="flex flex-col justify-center items-start">
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
                Symptoms: <span className="text-blue-500">{symptoms}</span>
            </p>
        </div>
    )
}
