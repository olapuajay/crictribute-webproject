const form = document.getElementById('form');
        const username = document.getElementById('username');
        const password = document.getElementById('password');

        const usernameError = document.getElementById('usernameError');
        const passwordError = document.getElementById('passwordError');

        form.addEventListener('submit', function(event) {
            let isValid = true;


            if (username.value === '') {
            usernameError.textContent = 'Username is required';
            isValid = false;
            } else {
            usernameError.textContent = '';
            }

            if (password.value === '') {
            passwordError.textContent = 'Password is required';
            isValid = false;
            } else {
            passwordError.textContent = '';
            }

            if (!isValid) {
            event.preventDefault();
            }
        });
        document.getElementById('signin').addEventListener('click', () => {
            window.location.href = 'signIn.html';
        });