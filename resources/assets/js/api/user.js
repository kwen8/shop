export default {
    login (userForm) {
        return axios.post('/api/login', {
            username: userForm.user,
            password: userForm.password,
        })
    }
}