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
    <table v-if="user || $store.getters.me" class="table">
        <thead>
            <tr>
                <th>{{ (user || $store.getters.me)?.name }} {{ (user || $store.getters.me)?.surname }}</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Логин</td>
                <td>{{ (user || $store.getters.me)?.login }}</td>
            </tr>
            <tr>
                <td>Дата рождения</td>
                <td>{{ (user || $store.getters.me)?.birthday }}</td>
            </tr>
            <tr>
                <td>Дата регистрации</td>
                <td>{{ (user || $store.getters.me)?.created_at }}</td>
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
            let id = this.$route.params.id
            if(id)
                this.getUser(id)
        },

        methods: {
            getUser(id) {
                this.error = null
                axios.get(`/api/users/${id}`)
                    .then(res => {
                        if(res?.data.result)
                            this.user = res?.data.result
                        else {
                            this.user = null
                            this.error = res?.data.error
                        }
                    })
                    .catch(err => {
                        console.log(err.response)
                    })
            },
        },
    }
</script>

<style scoped>
</style>