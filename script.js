document.addEventListener('DOMContentLoaded', () => {
    // Initialize contact form submission handling
    initContactForm();
});

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert('Mohon isi semua bidang dengan benar.');
            return;
        }

        // For demo purposes, just show a success message
        alert(`Terima kasih, ${name}! Pesan Anda telah diterima.`);

        form.reset();
    });
}
