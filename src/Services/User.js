import axios from '../axios';
import { parseJwt } from '../helpers/getId';

export const UpdateUser = async (data) => {
	const response = await axios.put('/api/users/updateuser', {
		...data,
	});
	return response.data.data ? response.data.data : response.data;
};

export const UpdatePassword = async (data) => {
	const response = await axios.put('/api/users/updatepassword', {
		...data,
	});
	return response?.data;
};

export const SubscribeUser = async (data) => {
	const response = await axios.put('/api/users/subscribe', {
		...data,
	});
	return response?.data;
};

export const BlockUser = async (data) => {
	const response = await axios.put('/api/users/block', {
		...data,
	});
	return response?.data;
};

export const GetBlockUser = async (data) => {
	const response = await axios.get('/api/users/getblockedusers');
	return response?.data.data ? response.data.data : response.data;
};

export const GetUser = async (id) => {
	if (id) {
		const response2 = await axios.get('/api/users/singleuser/' + id);
		return response2.data.data ? response2.data.data : response2.data;
	} else {
		const { _id } = await parseJwt();
		const response2 = await axios.get('/api/users/singleuser/' + _id);
		return response2.data.data ? response2.data.data : response2.data;
	}
};

export const FollowUser = async (id) => {
	const response = await axios.put('/api/users/follow', {
		id,
	});
	return response.data;
};

export const UnFollowUser = async (id) => {
	const response = await axios.put('/api/users/unfollow', {
		id,
	});
	return response.data;
};

export const GetFollowers = async (id) => {
	if (id) {
		const response2 = await axios.get('/api/users/getfollowers/' + id);
		console.log('GET FOLLOWERS', response2);
		return response2.data.data ? response2.data.data : response2.data;
	} else {
		const { _id } = await parseJwt();
		const response2 = await axios.get('/api/users/getfollowers/' + _id);
		return response2.data.data ? response2.data.data : response2.data;
	}
};

export const getFollowings = async (id) => {
	id = id || (await parseJwt())._id;
	const response = await axios.get('/api/users/getfollowings/' + id + '?test');
	return response.data.data ? response.data.data : response.data;
};

export const GetPosts = async (id) => {
	if (id) {
		const response = await axios.get('/api/posts/singleuserpost/' + id);
		return response.data.data ? response.data.data : response.data;
	} else {
		const { _id } = await parseJwt();
		const response = await axios.get('/api/posts/singleuserpost/' + _id);
		return response.data.data ? response.data.data : response.data;
	}
};

// export const GetPostsByUser = async (userId) => {
// 	if (userId) {
// 		const response = await axios.post('api/posts/postsByUser', {
// 			id: userId,
// 		});
// 		return response.data.data ? response.data.data : response.data;
// 	} else {
// 		const { _id } = await parseJwt();
// 		const response = await axios.post('api/posts/postsByUser', {
// 			id: _id,
// 		});
// 		return response.data.data ? response.data.data : response.data;
// 	}
// };

export const GetPostsByUser = async (userId) => {
	if (userId) {
		const response = await axios.get(`/api/posts/user/${userId}`);
		return response.data.data ? response.data.data : response.data;
	} else {
		const { _id } = await parseJwt();
		const response = await axios.get(`/api/posts/user/${_id}`);
		return response.data.data ? response.data.data : response.data;
	}
};

export const CreatePost = async (data) => {
	const response = await axios.post('/api/posts', {
		...data,
	});
	return response.data.data ? response.data.data : response.data;
};

export const SharePost = async (data) => {
	const response = await axios.post('/api/posts/sharepost', {
		...data,
	});
	return response.data.data ? response.data.data : response.data;
};

export const FlagePost = async (data) => {
	const response = await axios.put('/api/posts/flagpost', {
		...data,
	});
	return response.data.data ? response.data.data : response.data;
};

export const DeletePost = async (id) => {
	const response = await axios.delete('/api/posts/deletepost', {
		data: { id },
	});
	return response.data.data ? response.data.data : response.data;
};

export const GetCommnetsFromPost = async (postId) => {
	const response = await axios.get(`api/comments/${postId}`);
	return response.data.data ? response.data.data : response.data;
};

// export const GetLikesFromPost = async (postId) => {
// 	const response = await axios.get(`api/likes/${postId}`);
// 	return response.data.data ? response.data.data : response.data;
// };

export const CreateComment = async (data) => {
	const response = await axios.post('api/comments', {
		...data,
	});
	return response.data.data ? response.data.data : response.data;
};

export const GetAllUsers = async () => {
	const response = await axios.get('/api/users/timeline/allusers');
	return response.data.data ? response.data.data : response.data;
};

export const GetTagUsers = async () => {
	const response = await axios.get('/api/users/relatedusers');
	return response.data.data ? response.data.data : response.data;
};

export const GoogleAuthLogin = async (token) => {
	const response = await axios.post('/api/auth/googleAuth', {
		token: token,
	});
	return response.data.data ? response.data.data : response.data;
};

export const AppleAuthLogin = async (token) => {
	const response = await axios.post('/api/auth/appleAuth', {
		token: token,
	});
	return response.data.data ? response.data.data : response.data;
};
