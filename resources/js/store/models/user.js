const state = {
    me: null,
}

const getters = {
    me: state => {
        return state.me
    },
}

const mutations = {
    setMe(state, user) {
        state.me = user
    },
}

const actions = {
    getMe({commit, state}) {
        axios.get(`/api/users/me`)
            .then(res => {
                if(res)
                    commit('setMe', res.data.result)
            })
            .catch(err => {
                console.log(err.response.data.error)
            })
    },
}

export default {
    state, getters, mutations, actions
}
