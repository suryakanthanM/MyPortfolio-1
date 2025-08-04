// ===== Initialize EmailJS =====
(function() {
    emailjs.init("k8YhHVt4Bcl0lh1lY"); // Replace with your EmailJS Public Key
})();

// ===== Handle Form Submission =====
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_kyyyd7n', 'template_dfcu039', this)
        .then(function() {
            alert('✅ Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('❌ Failed to send message. Please try again.');
            console.log('FAILED...', error);
        });
});
