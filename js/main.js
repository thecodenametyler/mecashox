var map = L.map('map').setView([-20.2982072, 57.4894003], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-20.2982072, 57.4894003]).addTo(map);

const loco = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});