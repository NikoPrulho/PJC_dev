// fontion pour ouvrir le menu de  navigation pour tel et tablette
const menuToggle = document.getElementById('menu_icon');
const mobileMenu = document.getElementById('mobile_menu');
const mobileHeader = document.getElementById('mobile_menu_container');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileHeader.classList.toggle('no-shadow'); 
});


const bandeau = document.getElementById('mobile_header_bar');
const scrollTrigger = document.getElementById('scroll_trigger_mobil_nav');



// Fonction pour montrer ou cacher le bandeau mobile
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Si le déclencheur est visible (en haut de la page), cacher le bandeau
            bandeau.classList.remove('show');
        } else {
            // Si le déclencheur n'est plus visible, montrer le bandeau
            bandeau.classList.add('show');
        }
    });
});

// Observer l'élément déclencheur
observer.observe(scrollTrigger);
