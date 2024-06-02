export default function ShoppingItem({item, quantity, completed}: {item: string, quantity: number, completed: boolean}) {

    return (
        <li className="list-none capitalize flex items-center justify-between" style={{color: completed ? 'green' : 'red'}}>
            <div className={completed ? 'line-through flex items-center justify-between w-3/4' : "flex items-center justify-between w-3/4"}>
                {item}
                <img src="icons/arrow-right.svg" className="w-8" alt="Arrow right" />
    
                {quantity}
            </div>
            {completed ? '✅' : '❌'}
        </li>
    )
}