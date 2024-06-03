export default function MouseOver() {
    return (
        <div>
            <h2 onMouseOver={() => alert('hovered')} className="w-full uppercase font-bold p-2 text-black bg-purple-400/70 shadow-lg shadow-purple-400/30 rounded-md">
                Hover Me
            </h2>
        </div>
    )
}