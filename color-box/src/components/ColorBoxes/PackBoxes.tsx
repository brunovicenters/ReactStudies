import Box from "./Box";

export default function PackBoxes({colors}: {colors: string[]}) {    
    return (
        <div className="grid grid-cols-5">
            <Box colors={colors} />
            <Box colors={colors} />
            <Box colors={colors} />
            <Box colors={colors} />
            <Box colors={colors} />
        </div>
    );
}