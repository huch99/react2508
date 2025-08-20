const carForm = document.getElementById('car-form');
const carList = document.getElementById('car-list');

let cars = [];

carForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('car-name').value;
  const year = document.getElementById('car-year').value;
  const price = document.getElementById('car-price').value;

  const car = { name, year, price };
  cars.push(car);
  renderCars();
  carForm.reset();
});

function renderCars() {
  carList.innerHTML = '';
  cars.forEach((car, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${car.name} (${car.year}년) - ${car.price}만원</span>
      <button class="delete-btn" onclick="deleteCar(${idx})">삭제</button>
    `;
    carList.appendChild(li);
  });
}

window.deleteCar = function(idx) {
  cars.splice(idx, 1);
  renderCars();
};