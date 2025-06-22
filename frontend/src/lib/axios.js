import axios from 'axios'

const axiosInstance = axios.create({
  baseURL:
    import.meta.mode === 'development' 
      ? 'http://localhost:5000/api' 
      : import.meta.env.VITE_BACKEND_URL || 'https://your-backend-app.vercel.app/api',
  withCredentials: true, // send cookies to the server
})

export default axiosInstance
