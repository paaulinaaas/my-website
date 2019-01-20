import style from './scss/style.scss';

let lastKnownScrollY = 0,
    currentScrollY = 0,
    ticking = false,
    eleHeader = null;

const classes = {
    pinned: 'header-pin',
    unpinned: 'header-unpin',
    active: 'nav--active'
};

function onScroll() {
    currentScrollY = window.pageYOffset;
    requestTick();
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update);
    }
    ticking = true;
}

function update() {
    if (currentScrollY < lastKnownScrollY) {
        pin();
    } else if (currentScrollY > lastKnownScrollY) {
        unpin();
    }
    lastKnownScrollY = currentScrollY;
    ticking = false;
}
function pin() {
    if (eleHeader.classList.contains(classes.unpinned)) {
        eleHeader.classList.remove(classes.unpinned);
        eleHeader.classList.add(classes.pinned);
    }
}
function unpin() {
    if (eleHeader.classList.contains(classes.pinned) || !eleHeader.classList.contains(classes.unpinned) ) {
        eleHeader.classList.remove(classes.pinned);
        eleHeader.classList.add(classes.unpinned);
    }
}
window.onload = function() {
        eleHeader = document.querySelector('.header');
        document.addEventListener('scroll', onScroll, false);
    }

    document.querySelector('.nav__bar').addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle(classes.active);
    })

    document.querySelectorAll('.nav__item').forEach((item) => {
        item.addEventListener('click', () => {
            document.querySelector('.nav').classList.remove(classes.active)
        })
    })
