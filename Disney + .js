'use strict';
var elementMenu = document.querySelectorAll('.element-menu');

elementMenu.forEach(function (item) {
    var header = item.querySelector('.titre-section');

    header.addEventListener('click', function () {
        item.classList.toggle('active');
    });
});
