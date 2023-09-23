import { createStore } from 'vuex'
import User from './models/user'
import Event from './models/event'


// Create a new store instance.
const store = createStore({
    modules: {
        User,
        Event,
    }
})

export default store
