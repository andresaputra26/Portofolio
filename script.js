let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            let currentLink = document.querySelector('header nav a[href*="' + id + '"]');
            if(currentLink){
                currentLink.classList.add('active');
            }
        }
    });

    // Menutup navbar saat scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Menutup navbar saat salah satu item menu diklik di mobile
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Portofolio Category Filter
let filterBtns = document.querySelectorAll('.filter-btn');
let portofolioBoxes = document.querySelectorAll('.portofolio-box');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        let filterValue = btn.getAttribute('data-filter');

        portofolioBoxes.forEach(box => {
            let category = box.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                box.classList.remove('hide');
                box.classList.remove('show');
                void box.offsetWidth; // trigger reflow for animation
                box.classList.add('show');
            } else {
                box.classList.add('hide');
                box.classList.remove('show');
            }
        });
    });
});
