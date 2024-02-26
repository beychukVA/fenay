import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

export const AuthProvider = ({ children }) => {
	const [credentials, setCredentials] = useState();
	let location = useLocation();

	const firebaseConfig = {
		apiKey: 'AIzaSyD9AM4pwSYHHNjPVBWMSEYQJ6Dpmw4EEgI',
		authDomain: 'finay-126e7.firebaseapp.com',
		projectId: 'finay-126e7',
		storageBucket: 'finay-126e7.appspot.com',
		messagingSenderId: '508574959862',
		appId: '1:508574959862:web:92c7d9112d65a1667ec4d7',
		measurementId: 'G-4HG0GRBDBP',
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	// Initialize Firebase
	const analytics = getAnalytics(app);
	// Initialize Firebase Authentication and get a reference to the service
	const auth = getAuth(app);

	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token || credentials) {
			setCredentials(token);
			if (
				[
					'/login',
					'/NAMM',
					'/logout',
					'/verify-apple',
					'/signup',
					'/about-us',
				].includes(location.pathname)
			) {
				navigate(-1);
			}
		} else {
			if (
				[
					'/profile',
					'/Explore',
					'/song',
					'/community',
					'/create',
					'/terms',
					'/settings',
					'/request-verification',
				].includes(location.pathname)
			) {
				navigate('/');
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const authContext = React.useMemo(
		() => ({
			auth,
			credentials,
			setCredentials,
			signOut: async () => {
				setCredentials(undefined);
				var rememberMe = localStorage.getItem('rememberMe');
				localStorage.clear();
				localStorage.setItem('rememberMe', rememberMe);
				auth.signOut();
			},
		}),
		[auth, credentials]
	);
	return (
		<AuthContext.Provider value={authContext}>
			{children}
		</AuthContext.Provider>
	);
};
