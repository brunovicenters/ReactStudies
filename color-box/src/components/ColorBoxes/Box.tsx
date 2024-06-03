export default function Box({ color }: { color: string }) {
    return (
        <div
            style={{ backgroundColor: color }}
            className="w-24 h-24 rounded-3xl"
        ></div>
    );
}