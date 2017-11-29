import Cookies from 'js-cookie'

export default {
    setToken (token) {
        Cookies.set('jwt_token', token)
    },
    getToken () {
        return Cookies.get('jwt_token')
    },
    removeToken () {
        Cookies.remove('jwt_token')
    }
}