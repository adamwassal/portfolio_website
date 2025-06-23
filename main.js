
let menu = document.getElementById('links')
let links = menu.getElementsByTagName('a')
let btn = document.getElementById('burger')
let cbtn = document.getElementById('closeburger')


function burger() {

    btn.style.display = 'none';
    cbtn.style.display = 'block';
    for (let i = 0; i < links.length; i++) {
        links[i].style.display = 'block';
    }

}

function closeburger() {
    btn.style.display = 'block';
    cbtn.style.display = 'none';
    for (let i = 0; i < links.length; i++) {
        links[i].style.display = 'none';
    }
}

if (window.innerWidth >= 800) {
    btn.style.display = 'none';
    cbtn.style.display = 'none';
    for (let i = 0; i < links.length; i++) {
        links[i].style.display = 'block';
    }
}
else {
    btn.style.display = 'block';
    cbtn.style.display = 'none';
    for (let i = 0; i < links.length; i++) {
        links[i].style.display = 'none';
    }
}
