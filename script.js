// 1. Alert(popup) saat form dikirim
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); //mencegah halaman reload
    alert('Pesan terkirim! Terima Kasih Hehe');
    form.reset(); //mengosongkan input setelah submit
});

//2. Scroll halus untuk navigasi
const links = document.querySelectorAll('header nav a');

for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Cegah link default
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
};