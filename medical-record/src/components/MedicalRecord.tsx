export default function MedicalRecord(props: { name: string, age: number, gender: string, symptoms: string}) {
    
    return (
        <div className="flex flex-col justify-center items-start">
            <h1 className="text-3xl text-red-500">Medical Record</h1>
            <p className="font-bold text-xl text-green-500">
                Name: <span className="text-blue-500">{props.name}</span>
            </p>
            <p className="font-bold text-xl text-green-500">
                Age: <span className="text-blue-500">{props.age}</span>
            </p>
            <p className="font-bold text-xl text-green-500">
                Gender: <span className="text-blue-500">{props.gender}</span>
            </p>
            <p className="font-bold text-xl text-green-500">
                Symptoms: <span className="text-blue-500">{props.symptoms}</span>
            </p>
        </div>
    )
}
