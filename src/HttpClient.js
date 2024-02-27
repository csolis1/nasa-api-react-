import axios from "axios"

const nasaEndpoint = process.env.REACT_APP_NASA_ENDPOINT
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY

axios.interceptors.request.use(
    config => {
        config.params = config.params ? config.params : {}
        const configUrl = config.url
        if (configUrl.includes(nasaEndpoint)) {
            config.params["api_key"] = nasaApiKey
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default {
    getApod() {
        return axios.get(`${nasaEndpoint}planetary/apod`)
    },
}

// quite literally spent 3 hours wondering why api call was not working and http was undefined and turns  out react didnt like my env.file being called env.development.local