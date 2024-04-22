import axios from 'axios';
import { useState } from 'react';
import { BACKEND_URL } from '../config';

export const Signin = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div>
			<input
				onChange={(e) => {
					setUsername(e.target.value);
				}}
				type='text'
				placeholder='anything'
			/>
			<input
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				type='password'
				placeholder='anything'
			/>
			<button
				onClick={async () => {
					await axios.post(
						`${BACKEND_URL}/signin`,
						{
							username,
							password,
						},
						{
							withCredentials: true,
						}
					);
					alert('you are logged in');
				}}
			>
				Submit
			</button>
		</div>
	);
};
