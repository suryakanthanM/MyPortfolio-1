// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active menu link on scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop - 100 &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            document.querySelectorAll('nav ul li a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === `#${section.id}`) {
                    a.classList.add('active');
                }
            });
        }
    });
});
