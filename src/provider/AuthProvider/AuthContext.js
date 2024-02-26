import { createContext } from 'react';

const authContext = {
	auth: undefined,
	credentials: undefined,
	signOut: () => {},
	setCredentials: (_) => {},
};

export const AuthContext = createContext(authContext);
