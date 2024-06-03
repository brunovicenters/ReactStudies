import PackBoxes from "./PackBoxes";

export default function ContainerBoxes() {
    return (
        <div className="grid grid-cols-1 grid-rows-5">
            <PackBoxes />
            <PackBoxes />
            <PackBoxes />
            <PackBoxes />
            <PackBoxes />
        </div>
    );
}