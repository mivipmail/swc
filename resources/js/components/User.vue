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
    <table v-if="$route.params.id ? user : $store.getters.me" class="table">
        <thead>
            <tr>
                <th>{{ ($route.params.id ? user : $store.getters.me)?.name }} {{ (user || $store.getters.me)?.surname }}</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Логин</td>
                <td>{{ ($route.params.id ? user : $store.getters.me)?.login }}</td>
            </tr>
            <tr>
                <td>Дата рождения</td>
                <td>{{ ($route.params.id ? user : $store.getters.me)?.birthday }}</td>
            </tr>
            <tr>
                <td>Дата регистрации</td>
                <td>{{ ($route.params.id ? user : $store.getters.me)?.created_at }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "User",

        data() {
            return {
                user: null,
                error: null,
            }
        },

        mounted() {
            this.init()
        },

        watch: {
            $route(to, from) {
                this.init()
            }
        },

        methods: {
            init() {
                this.user = null
                let id = this.$route.params.id
                if(id)
                    this.getUser(id)
            },

            getUser(id) {
                this.error = null
                axios.get(`/api/users/${id}`)
                    .then(res => {
                        this.user = res?.data.result
                    })
                    .catch(err => {
                        this.user = null
                        this.error = err.response.data.error
                    })
            },
        },
    }
</script>

<style scoped>
</style>