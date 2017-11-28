import * as types from '../mutation-types'
import user from '../../api/user'

export default {
    state: {
        name: '',
        token: ''
    },
    mutations: {
        [types.USER_LOGIN] (state, { token }) {
            state.token = token
        }
    },
    actions: {
        login ({ commit }, userForm) {
            user.login(userForm).then(res => {
                commit(types.USER_LOGIN, res.data)
            })
        }
    }
}