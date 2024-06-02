export default function Property({ name, rating, price }: {name: string, rating: number, price: number}) {
    return (
        <li className="w-1/4 m-2 border-2 border-white p-4 shadow-lg shadow-white/50 flex justify-between items-center flex-col">
            <span className="text-lg text-white text-center w-full truncate" title={name}>{name}</span>
            <span className="text-base text-white">${price} a night</span>
            <span className="text-base text-white">{rating} ⭐</span>
        </li>
    )
}