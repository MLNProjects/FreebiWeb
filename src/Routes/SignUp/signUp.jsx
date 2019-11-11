import React, { useCallback } from 'react';
import auth from '../../utilities/base';

const SignUp = () => {
	const handleSignUp = useCallback(async event => {
		event.preventDefault();
		const { email, password } = event.target.elements;
		try {
			await auth.auth().createUserWithEmailAndPassword(email.value, password.value);
			console.log('User created');
		} catch (error) {
			alert(error);
		}
	}, []);

	return (
		<div className="signup-wrapper">
			<h1>Sign up to use this amazing service!</h1>
			<form onSubmit={handleSignUp}>
				<label>
					<input name="email" type="email" placeholder="Email" />
				</label>
				<label>
					<input name="password" type="password" placeholder="Password" />
				</label>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUp;
