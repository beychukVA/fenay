import axios from '../axios';

export const UploadFiles = async (data) => {
	const formData = new FormData();
	// Update the formData object
	formData.append('file', data);
	const response = await axios.post('/api/uploads', formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return response?.data;
};
