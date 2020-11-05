import './LoginPage.css';

const LoginPage = () => (
	<form>
		<label>Username: <input type='text' placeholder='username' /></label>
		<label>Password: <input type='password' placeholder='password'/></label>
		<button type='submit'>Submit</button>
	</form>
);

export default LoginPage;