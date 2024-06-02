export default function SlotMachine({value1, value2, value3}: {value1: any, value2: any, value3: any}) {

    const isEqual = value1 === value2 && value2 === value3;

    const styles = {
        color: isEqual ? '#228B22' : '#FA8072'
    }

    return (
        <div className="text-center space-y-5">
            <div className="text-white text-5xl space-x-3">
                <span>{value1}</span>
                <span>{value2}</span>
                <span>{value3}</span>
            </div>
            <div className="text-3xl" style={styles}>
                {isEqual ? 'You won!' : 'You lose!'}
            </div>
            {isEqual ? <p className="text-xl text-white">Congrats!!!</p> : ''}
        </div>
    )
}