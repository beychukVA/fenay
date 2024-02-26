import axios from '../axios'

export const UploadFile = async (data) => {
    const formData = new FormData(); 
   
    // Update the formData object 
    formData.append( 
      "file", 
      data , 
      data.name
    ); 
     const response = await axios.post('/api/posts/uploadpost', formData)
      return response?.data
}