export default function ColorList({colors}: {colors: string[]}) {

    return (
        <div className="border-2 border-white p-3">
            <h1 className="text-3xl font-bold underline text-white">Color List:</h1>
            <ul>
                {colors.map(c => <li style={{color: c}} key={colors.indexOf(c)}>{c}</li>)}
            </ul>
        </div>
    );
}