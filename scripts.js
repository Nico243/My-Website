document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').textContent = 'Thank you for your message, ' + name + '! I will get back to you shortly.';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').textContent = 'Please fill out all fields.';
    }
});