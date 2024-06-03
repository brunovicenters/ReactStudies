import Box from "./Box";

export default function PackBoxes() {
    return (
        <div className="grid grid-cols-5">
            <Box color="#f44336" />
            <Box color="#e91e63" />
            <Box color="#9c27b0" />
            <Box color="#3f51b5" />
            <Box color="#673ab7" />
        </div>
    );
}