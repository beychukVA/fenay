import axios from 'axios';
import { baseURL } from '../constant/constants';

export const Login = async (email, uid) => {
	const response = await axios.post(baseURL + '/api/auth/login', {
		email,
		uid,
	});
	return response?.data;
};

export const VerifyEmail = async (email, code) => {
	const response = await axios.post(baseURL + '/api/auth/verifymail', {
		email,
		code,
	});
	return response?.data;
};

export const Register = async (email, password) => {
	const response = await axios.post(baseURL + '/api/auth/register', {
		email,
		// password,
	});
	return response?.data;
};

export const Profile = async (token) => {
	const response = await axios.get(baseURL + '/api/profile', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response?.data;
};
