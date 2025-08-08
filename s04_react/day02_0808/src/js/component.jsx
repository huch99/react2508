import React from "react";

function Component() {
    function Div(props) {
        return (
            <div className={props.cName}>{props.children}</div>
        );
    }

    return (
        <div className="container">
            <div className="areaA">
                <Div cName= 'boxA' children= 'A' />
                <Div cName= 'boxA' children= 'A' />
                <Div cName= 'boxA' children= 'A' />
                <Div cName= 'boxA' children= 'A' />
            </div>

            <div className="areaB">
                <Div cName= 'boxB' children= 'B' />
                <Div cName= 'boxB' children= 'B' />        
            </div>

        </div>
    );
}

export default Component;