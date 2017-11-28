export default {
    login (userForm) {
        return axios.post('/api/login', {
            user: userForm.user,
            password: userForm.password
        })
    }
}