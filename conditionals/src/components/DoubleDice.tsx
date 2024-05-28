export default function DoubleDice() {
    const rand1 = Math.floor(Math.random() * 3) + 1;
    const rand2 = Math.floor(Math.random() * 3) + 1;
    
    return (
        <div className="text-white">
            <h2 className="font-bold text-2xl">Double dice</h2>
            <ul>
                <li>Dice 1: <span className="text-blue-300">{rand1}</span></li>
                <li>Dice 2: <span className="text-blue-300">{rand2}</span></li>
                <li>
                    {rand1 === rand2 ? 'Doubles!' : 'Not doubles!'}
                </li>
            </ul>
            {rand1 === rand2 && <h3 className="text-green-300">You win!</h3>}
        </div>
    )
}