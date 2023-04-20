const form = document.querySelector('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	if (username.value.trim() === '') {
		alert('Please enter your username');
	} else if (password.value.trim() === '') {
		alert('Please enter your password');
	} else {
		// Call login function
		login(username.value, password.value);
	}
});

function login(username, password) {
	// Call server-side script to authenticate user
}
//google login
gapi.load('auth2', function() {
  gapi.auth2.init({
      client_id: 'YOUR_CLIENT_ID',
  }).then(function(auth2) {
      var googleLoginButton = document.getElementById('google-login-button');
      auth2.attachClickHandler(googleLoginButton, {},
          function(googleUser) {
              var id_token = googleUser.getAuthResponse().id_token;
              var xhr = new XMLHttpRequest();
              xhr.open('POST', 'login.php');
              xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
              xhr.onload = function() {
                  if (xhr.responseText == "success") {
                      window.location.href = "dashboard.php";
                  } else {
                      alert("Login failed");
                  }
              };
              xhr.send('idtoken=' + id_token);
          },
          function(error) {
              alert(JSON.stringify(error, undefined, 2));
          }
      );
  });
});
