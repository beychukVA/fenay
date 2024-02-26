import axios from '../axios'
import {parseJwt} from "../helpers/getId"

export const FetchConversations = async () => {
    const {_id} = await parseJwt()
     const response = await axios.get('/api/conversations/'+_id);
     const filterChats = response.data.data.filter(item => !item.members.includes(null))
     const modifiedData  = await  Promise.all(filterChats.map(async chat => {
            const otherUserId = chat.members.find(id => id !== _id)
            const response2 = await axios.get('/api/users/singleuser/'+otherUserId)
        return {   ...chat , user_data : response2.data.data  }
     }) )
     return modifiedData
}

export const FetchExistingConversation = async (sencondId) => {
    const {_id} = await parseJwt()
     const response = await axios.get(`/api/conversations/find/${_id}/${sencondId}`);
     return response.data.data
}

export const CreateConversation = async (body) => {
    const response = await axios.post('/api/conversations', {
     ...body
     })
     return response?.data
}

export const CreateMessage = async (body) => {
    const response = await axios.post('/api/messages', {
     ...body
     })
     return response?.data
}

export const GetMessage = async (conversationId) => {
     const response = await axios.get('/api/messages/'+conversationId);
     return response.data.data
}