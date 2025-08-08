import React from "react";

function Car() {
    function MyCar(props) {
        return (
            <h2>제가 타는 차는 '{props.sub}'사의 {props.product}입니다.</h2>
        );
    }
    return (
        <div>
            <MyCar sub='기아' product='모닝' />
            <MyCar sub='현대' product='싼타페' />
            <MyCar sub='BMW' product='M5' />
            <MyCar sub='벤츠' product='GLC' />
            <MyCar sub='Audi' product='R8' />
            <MyCar sub='Ford' product='Mustang' />
        </div>
    );
}

export default Car;