// 1. Alert(popup) saat form dikirim
const form = document.querySelector("form");
const thankYou = document.getElementById("thankYouMessage");
const backBtn = document.getElementById("backButton");
const themeBtn = document.getElementById("toggleMode");

form.addEventListener('submit', function(e) {
    e.preventDefault(); //mencegah halaman reload
    
    // ambil nilai input
    const email = document.getElementById("email").value.trim();

    //ambil elemen error
    const emailError = document.getElementById("emailError");

    //Reset Error
    emailError.textContent ="";

    //validasi manual
    let valid = true;

    if (email === "") {
        emailError.textContent = "Email wajib diisi!";
        valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Format email tidak valid!";
        valid = false;
    }

    //jika semua valid, tampilkan pesan terima kasih
    if (valid) {
        alert("Terima kasih! Pesan Anda sudah terkirim, akan Kami hubungi secepatnya")
        form.style.display = "none";
        thankYou.style.display = "block";
    }
});

//tombol kembali ke form
backBtn.addEventListener("click", function () {
    form.style.display = "block";
    thankYou.style.display = "none";
    form.reset();
})

//ubah tema
// Cek apakah user sebelumnya sudah pilih tema
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️ Mode Terang";
}

// Saat tombol diklik
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Mode Terang";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙 Mode Gelap";
        localStorage.setItem("theme", "light");
    }
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