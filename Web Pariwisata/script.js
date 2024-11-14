// Script untuk navigasi smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script untuk menangani form kontak
const aboutForm = document.querySelector('.about-form');

aboutForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah pengiriman form secara default

    const name = aboutForm.name.value;
    const email = aboutForm.email.value;
    const message = aboutForm.message.value;

    // Validasi sederhana
    if (name === '' || email === '' || message === '') {
        alert('Semua harus diisi!');
        return;
    }

    // Mengirim data ke server (ini hanya contoh, tidak ada endpoint)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form setelah pengiriman
    aboutForm.reset();
    alert('Pesan Anda telah dikirim!');
});

// Menambahkan efek hover pada gambar konten
const contentImages = document.querySelectorAll('.content img');
contentImages.forEach(image => {
    image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Menambahkan aksi pada tombol booking
const bookingButtons = document.querySelectorAll('.booking-button');
bookingButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Pemesanan Tiket Berhasil!');
    });
});