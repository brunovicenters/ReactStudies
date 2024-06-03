import PackBoxes from "./PackBoxes";

export default function ContainerBoxes() {
    const colors=["#f44336","#e91e63","#9c27b0","#3f51b5","#673ab7","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b"]

    return (
        <div className="grid grid-cols-1 grid-rows-5">
            <PackBoxes colors={colors} />
            <PackBoxes colors={colors} />
            <PackBoxes colors={colors} />
            <PackBoxes colors={colors} />
            <PackBoxes colors={colors} />
        </div>
    );
}