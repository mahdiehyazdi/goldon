import axios from 'axios'

export default axios.create({
    baseURL:'http://localhost:3001/',
    headers:{'X-Requeste-from':'Mahdieh'},
    timeout:10000
})