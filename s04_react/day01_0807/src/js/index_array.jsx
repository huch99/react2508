import React from 'react';

function Array() {
    const belts = ['whiteBelt','blueBelt','purpleBelt','brownBelt','blackBelt'];

    const beltList = belts.map((belt) => <p>{belt}</p>);

    return (
        <div>
            {beltList}
        </div>
    );
}

export default Array;