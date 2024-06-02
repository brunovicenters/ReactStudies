import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({data}: {data: {id: number, item: string, quantity: number, completed: boolean}[]}) {

    return (
        <div>
            <h1 className="text-3xl text-white mb-5">Shopping List</h1>
            <ul className="text-lg space-y-2">
                {data.map((item: {id: number, item: string, quantity: number, completed: boolean}) => (
                    <ShoppingItem key={item.id} item={item.item} quantity={item.quantity} completed={item.completed} />
                ))}
            </ul>
        </div>
    )
}