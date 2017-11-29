export default {
    login (userForm) {
        return axios.post('/oauth/token', {
            username: userForm.user,
            password: userForm.password,
            client_id: 2,
            grant_type: 'password',
            client_secret: '4tEUM5tzvvxrp9sE02eCK1XEn0K0aejpGgiXmfjd',
            provider: 'admins',
            scope: ''
        })
    }
}