import React from 'react';

function Desruct() {
    function calculate(a, b) {
        const add = a + b;
        const sub = a - b;
        const mul = a * b;
        const divi = a / b;

        const list = [add, sub, mul, divi];
        return list;
    }

    const list = calculate(2, 5);
    // ------------------------------------------------------------------------------------------------------------------
    const vehicleOne = {
        brand: 'ford',
        model: 'Mustang',
        type: 'car',
        year: '2025',
        color: 'red',
        registration: {
            city: 'Hwasung'
        }
    }

    myVehicle(vehicleOne);

    function myVehicle(vehicle) {
        const message = `My ${vehicle.type} is a ${vehicle.color} ${vehicle.brand} ${vehicle.model}.`;
        return message;
    }


    const vehicleMessage = myVehicle(vehicleOne);

    return (
        <div>
            {list.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <p>{vehicleMessage}</p>
        </div>
    );




}



export default Desruct;