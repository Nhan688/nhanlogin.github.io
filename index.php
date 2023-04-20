<?php
// MySQLサーバーに接続
$host = 'localhost';
$user = 'username';
$password = 'password';
$dbname = 'database_name';

$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

// フォームからユーザー名とパスワードを取得
$username = $_POST['username'];
$password = $_POST['password'];

// ユーザー名とパスワードを検証
$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
	// 認証成功
	echo "Welcome, " . $username;
} else {
	// 認証失敗
	echo "Invalid username or password";
}

// MySQLサーバーから切断
mysqli_close($conn);
?>
