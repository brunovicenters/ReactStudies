function handleClick() {
    console.log('clicked')
}

export default function Clicker() {
    return (
        <div>
            <h1 className="text-2xl text-white mb-4">Click the button</h1>
            <button onClick={handleClick} className="hover:scale-105 w-full uppercase font-bold p-2 text-black bg-white/70 shadow-lg shadow-white/30 rounded-md">Click</button>
        </div>
    )
}