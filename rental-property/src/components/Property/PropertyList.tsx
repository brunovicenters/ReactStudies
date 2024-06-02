import Property from "./Property"

export default function PropertyList({ properties }: {properties: {id: number, name: string, rating: number, price: number}[]}) {
    return (
        <div>
            <h1 className="text-3xl text-white text-center mb-6">Property List</h1>
            <ul className="flex max-w-2xl justify-between flex-wrap">
                {properties.map(property => <Property key={property.id} {...property} />)}
            </ul>
        </div>)
}