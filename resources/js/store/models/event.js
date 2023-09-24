const state = {
    events: [],
}

const getters = {
    events: state => {
        return state.events
    },
}

const mutations = {
    setEvents(state, events) {
        state.events = events
    },
}

const actions = {
    getEvents({commit, state}) {
        axios.get(`/api/events`)
            .then(res => {
                if(res)
                    commit('setEvents', res.data.result)
            })
            .catch(err => {
                console.log(err.response.data.error)
            })
    },
}

export default {
    state, getters, mutations, actions
}
