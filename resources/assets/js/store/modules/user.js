import * as types from '../mutation-types'
import user from '../../api/user'
import jwt from '../../helpers/jwt'

export default {
    state: {
        token: ''
    },
    mutations: {
        [types.USER_LOGIN] (state, { token, name }) {
            state.token = token
        }
    },
    actions: {
        login ({ commit }, userForm) {
            return user.login(userForm).then(res => {
                jwt.setToken(res.data.token)
                commit(types.USER_LOGIN, res.data)
            })
        }
    }
}