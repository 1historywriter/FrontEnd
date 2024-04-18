// Объект с данными о космическом корабле
const spaceship = {
    name: "Starship",
    manufacturer: "SpaceX",
    crew: 100,
    maxSpeed: "Warp 9"
};

// Функция для отображения данных корабля на странице
function displaySpaceshipDetails() {
    document.getElementById('name').textContent = spaceship.name;
    document.getElementById('manufacturer').textContent = spaceship.manufacturer;
    document.getElementById('crew').textContent = spaceship.crew;
    document.getElementById('maxSpeed').textContent = spaceship.maxSpeed;
}

// Вызываем функцию для отображения данных при загрузке страницы
displaySpaceshipDetails();

// Обработчик клика по кнопке "Hide Manufacturer"
document.getElementById('hideManufacturerBtn').addEventListener('click', function() {
    const manufacturerElement = document.getElementById('manufacturer');
    // Переключаем видимость элемента
    manufacturerElement.style.display = (manufacturerElement.style.display === 'none') ? 'inline' : 'none';
});