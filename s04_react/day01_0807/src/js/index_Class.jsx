import React from 'react';

function Class() {
    class Car {
        constructor(name) {
            this.brand = name;
        }

        present() {
            return 'I have a ' + this.brand;
        }
    }

    class Model extends Car {
        constructor(name, mod) {
            super(name);
            this.model = mod;
        }

        show() {
            return this.present() + ', it is a ' + this.model;
        }
    }

    const myCar2 = new Model("Ford", "Mustang");
    myCar2.show();

    return (
        <div>
            <h1>{myCar2.show()}</h1>
        </div>
    );
}

export default Class;