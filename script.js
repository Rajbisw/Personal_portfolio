document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
    // Function to auto-type the about section
const aboutText = "Hello! I'm a web developer with a passion for creating engaging, user-friendly websites. With expertise in HTML, CSS, JavaScript, and various frameworks, I strive to build seamless digital experiences.";
let i = 0;
const aboutDescription = document.getElementById("about-description");

function typeAboutText() {
    if (i < aboutText.length) {
        aboutDescription.innerHTML += aboutText.charAt(i);
        i++;
        setTimeout(typeAboutText, 500); // Adjust speed by changing the timeout
    }
}

// Call the function to start typing the about section when the page loads
window.onload = typeAboutText;

});


