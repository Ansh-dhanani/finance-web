const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // Send the ID token to your server for verification and authentication
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: handleCredentialResponse
    });

    document.querySelectorAll('.google-signin').forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            google.accounts.id.prompt();
        });
    });
};