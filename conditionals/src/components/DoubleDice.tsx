export default function DoubleDice() {
    const rand1 = Math.floor(Math.random() * 3) + 1;
    const rand2 = Math.floor(Math.random() * 3) + 1;
    const win = rand1 === rand2;
    const styles = {backgroundColor: win ? 'green' : '#ff2e24'};
    
    return (
        <div className="text-white p-2 rounded-2xl" style={styles}>
            <h2 className="font-bold text-2xl">Double dice</h2>
            <ul>
                <li>Dice 1: <span className="text-blue-300">{rand1}</span></li>
                <li>Dice 2: <span className="text-blue-300">{rand2}</span></li>
                <li>
                    {win ? 'Doubles!' : 'Not doubles!'}
                </li>
            </ul>
            {win && <h3 className="text-green-300">You win!</h3>}
        </div>
    )
}