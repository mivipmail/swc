<template>
    <table v-if="error" class="table">
        <thead>
            <tr>
                <th>Ошибка</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border-0">{{ error }}</td>
            </tr>
        </tbody>
    </table>
    <table v-if="event" class="table">
        <thead>
            <tr>
                <th>{{ event?.title }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ event?.content }}</td>
            </tr>
            <tr>
                <td>Дата создания: {{ event?.created_at }}</td>
            </tr>
            <tr>
                <td>Создал: {{ event?.creator_user.name }} {{ event?.creator_user.surname }}</td>
            </tr>
            <tr>
                <td>
                    <p class="pt-3"><strong>Участники</strong></p>
                    <div v-for="user in event?.member_users">
                        <router-link :to="{ name: 'user.show', params: { id: user.id } }"
                                    class="bd-links-link d-inline-block rounded">
                            {{ user.name }} {{ user.surname }}
                        </router-link>
                    </div>
                </td>
            </tr>
            <tr v-if="$store.getters.me">
                <td>
                    <button v-if="!event?.member_users.find(el => el.id === $store.getters.me.id)" 
                            @click.prevent="() => followEvent(true)"
                            type="button" 
                            class="btn btn-primary btn-sm">
                        Принять участие
                    </button>
                    <button v-if="event?.member_users.find(el => el.id === $store.getters.me.id)" 
                            @click.prevent="() => followEvent(false)"
                            type="button" 
                            class="btn btn-outline-primary btn-sm">
                        Отказаться от участия
                    </button>
                </td>
            </tr>
            <tr v-if="$store.getters.me && event?.creator_user.id === $store.getters.me.id">
                <td class="border-0">
                    <button v-if="event?.creator_user.id === $store.getters.me.id" 
                            @click.prevent="destroyEvent"
                            type="button" 
                            class="btn btn-danger btn-sm">
                        Удалить
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "Event",

        data() {
            return {
                event: null,
                error: null,
            }
        },

        mounted() {
            this.getEvent()
            this.startTimer()
        },

        beforeUnmount() {
            this.stopTimer()
        },

        watch: {
            $route(to, from) {
                this.getEvent()
            }
        },

        methods: {
            getEvent() {
                this.error = null
                let id = this.$route.params.id
                if(id)
                    axios.get(`/api/events/${id}`)
                        .then(res => {
                            this.event = res?.data.result
                        })
                        .catch(err => {
                            this.event = null
                            this.error = err.response.data.error
                        })
            },
            
            followEvent(on = true) {
                axios.post(`/api/events/${on ? '' : 'un'}follow/${this.event.id}`)
                    .then(res => {
                        if(res?.data.result) {
                            this.event = res.data.result
                            this.$store.dispatch('getEvents')
                        }
                    })
                    .catch(err => {
                        console.log(err.response.data.error)
                    })
            },

            destroyEvent() {
                axios.delete(`/api/events/${this.event.id}`)
                    .then(res => {
                        this.$router.push({name: 'user.index'})
                    })
                    .catch(err => {
                        console.log(err.response.data.error)
                    })
            },

            stopTimer () {
                if (this.interval) {
                    window.clearInterval(this.interval)
                }
            },

            startTimer () {
                this.stopTimer()
                this.interval = window.setInterval(() => {
                    this.getEvent()
                }, 30000)
            },
        },
    }
</script>

<style scoped>
</style>