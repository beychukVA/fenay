import axios from '../axios'

export const GetNotifications = async () => {
    const response = await axios.get('/api/notification')
    return response.data.data ? response.data.data   : response.data 
}