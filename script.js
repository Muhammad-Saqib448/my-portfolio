const menubar = document.querySelector('#menu');
const closebar = document.querySelector('#close');
const rightbanner = document.querySelector('.right_banner');
const topbanner = document.querySelector('.top_banner');

document.addEventListener('DOMContentLoaded', function() {
    menubar.onclick = function() {
        rightbanner.style.display =  'flex';
        menubar.style.display = 'none';
        closebar.style.display = 'flex';
        topbanner.style.display = 'grid';
    }
    closebar.onclick = function() {
        rightbanner.style.display = 'none';
        menubar.style.display = 'flex';
        closebar.style.display = 'none';
        topbanner.style.display = 'flex';
    }
});
