import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function ChangePassword(props) {
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [alert, setAlert] = useState('');
	const [alertVariant, setAlertVariant] = useState('');

	const submitHandler = async (e) => {
		e.preventDefault();

		console.log(props.username);

		await axios
			.patch('/user/changePassword', {
				password: password,
				newpassword: newPassword,
				username: 'admin',
			})
			.then(() => {
				setAlertVariant('success');
				setAlert('Password changed successfully');
			})
			.catch((err) => {
				if (err.response.status === 404) {
					setAlertVariant('danger');
					setAlert('Wrong user or password');
				}
				if (err.response.status === 500) {
					setAlertVariant('danger');
					setAlert('Server error');
				}
			});
	};

	return (
		<Form onSubmit={submitHandler}>
			<Form.Group controlId='password'>
				<Form.Label>Old Password</Form.Label>
				<Form.Control
					required
					type='password'
					size='sm'
					value={password}
					name='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Group>
			<Form.Group controlId='newpassword'>
				<Form.Label>New Password</Form.Label>
				<Form.Control
					required
					type='password'
					size='sm'
					value={newPassword}
					name='newpassword'
					onChange={(e) => setNewPassword(e.target.value)}
				/>
			</Form.Group>
			<br></br>
			{alert === '' ? null : (
				<Alert variant={alertVariant} style={{ textAlign: 'center' }}>
					{alert}
				</Alert>
			)}
			<div>
				<Button variant='primary' type='submit'>
					Change
				</Button>
			</div>
		</Form>
	);
}

export default ChangePassword;
