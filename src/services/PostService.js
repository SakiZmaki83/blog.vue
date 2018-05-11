import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

export default class PostService {
   
    savePost(post) {
        return axios.post('/posts', post)
    }

    getPost() {
        return axios.get('/posts')
    }
}

export const post = new PostService()