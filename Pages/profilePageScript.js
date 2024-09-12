document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('submit');
    if (loginBtn) {  // Ensure the element exists
        loginBtn.addEventListener('click', () => {
            const userEmail = document.getElementById('email').value;
            const userPassword = parseInt(document.getElementById('password').value);

            console.log(userEmail, userPassword);

            if (userEmail === "ardendiago@gmail.com" && userPassword === parseInt("12345")) {
                window.location.href = './UserPage.html';
            } else {
                console.log('Invalid credentials');
            }
        });
    }
});

function checkUserDetails() {

}
