document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;


        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

     
        console.log('Form data:', { name, email, message });
        alert('Message sent successfully!');
        form.reset();
    });
});