import React, { useContext, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { GoogleAuthLogin } from '../Services/User';
import { AuthContext } from '../provider/AuthProvider/AuthContext';
import { useNavigate } from 'react-router';
import { Box } from '@mui/material';
import GoogleIcon from '../assets/GoogleIcon.svg';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { show_toast } from '../helpers/toast';

// Client ID and API key from the Developer Console
var CLIENT_ID =
	//   "692123031128-bashqe6e67b29cp5mgkuj7m8j0m7sa44.apps.googleusercontent.com";
	'440544890779-t01qtuodv65oblka5c54l282d6pklqqq.apps.googleusercontent.com';
// eslint-disable-next-line no-unused-vars
var API_KEY = '';

// Array of API discovery doc URLs for APIs used by the quickstart
// eslint-disable-next-line no-unused-vars
var DISCOVERY_DOCS = [
	'https://sheets.googleapis.com/$discovery/rest?version=v4',
];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
// eslint-disable-next-line no-unused-vars
var SCOPES = 'https://www.googleapis.com/auth/plus.login';

export const Google = () => {
	const { auth, setCredentials } = useContext(AuthContext);
	const navigate = useNavigate();
	const provider = new GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
	auth.languageCode = auth.useDeviceLanguage();

	// useEffect(() => {
	//   const initClient = () => {
	//     gapi.client.init({
	//       // discoveryDocs: DISCOVERY_DOCS,
	//       clientId: CLIENT_ID,
	//       scope: "",
	//     });
	//   };
	//   gapi.load("client:auth2", initClient);
	// });

	// const onSuccess = async (res) => {
	//   const token = await res?.getAuthResponse(true)?.access_token;
	//   const response = await GoogleAuthLogin(token);
	//   if (response) {
	//     const profile = res?.getBasicProfile();
	//     setLocalStorage(response.token, profile?.getEmail());
	//     setCredentials(response.token);
	//     navigate("/");
	//   }
	// };
	// const onFailure = (err) => {
	//   console.log("failed:", err);
	// };

	const handleSigninWithPopup = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				setLocalStorage(token, user.email);
				setCredentials(token);
				navigate('/');
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential =
					GoogleAuthProvider.credentialFromError(error);
				show_toast(`${errorCode} - ${errorMessage}`);
			});
	};

	const setLocalStorage = (token, email) => {
		localStorage.setItem('token', token);
		localStorage.setItem('login', true);
		localStorage.setItem('email', email);
	};

	return (
		<Box
			sx={{
				padding: '12px 28px',
				background: 'rgba(255, 255, 255, 0.05)',
				border: '1px solid #515151',
				borderRadius: '4px',
				cursor: 'pointer',
				transition: 'all 250ms ease',
				'&:hover': {
					background: 'rgba(255, 255, 255, 0.1)',
				},
			}}
			onClick={() => handleSigninWithPopup()}
			// disabled={renderProps.disabled}
		>
			<img
				style={{
					display: 'block',
					width: '24px',
					height: '24px',
				}}
				src={GoogleIcon}
				alt='Google'
			/>
		</Box>
		// <GoogleLogin
		//   render={(renderProps) => (
		//     <Box
		//       sx={{
		//         padding: "12px 28px",
		//         background: "rgba(255, 255, 255, 0.05)",
		//         border: "1px solid #515151",
		//         borderRadius: "4px",
		//         cursor: "pointer",
		//         transition: "all 250ms ease",
		//         "&:hover": {
		//           background: "rgba(255, 255, 255, 0.1)",
		//         },
		//       }}
		//       onClick={renderProps.onClick}
		//       disabled={renderProps.disabled}
		//     >
		//       <img
		//         style={{
		//           display: "block",
		//           width: "24px",
		//           height: "24px",
		//         }}
		//         src={GoogleIcon}
		//         alt="Google"
		//       />
		//     </Box>
		//   )}
		//   clientId={CLIENT_ID}
		//   buttonText=""
		//   onSuccess={onSuccess}
		//   onFailure={onFailure}
		//   cookiePolicy={"single_host_origin"}
		//   isSignedIn={true}
		// />
	);
};
