import React from "react";

function Spread() {
    const numberOne = [1,2,3];
    const numberTwo = [4,5,6];

    const numbersCombined = [...numberOne, ...numberTwo];

    return (
        <div>
            {numbersCombined}
        </div>
    );
}

export default Spread;