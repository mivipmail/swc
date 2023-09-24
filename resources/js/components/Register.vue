<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Регистрация</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">Имя</label>
                            <div class="col-md-6">
                                <input v-model="name" id="name" type="text" class="form-control" name="name">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="surname" class="col-md-4 col-form-label text-md-end">Фамилия</label>
                            <div class="col-md-6">
                                <input v-model="surname" id="surname" type="text" class="form-control" name="surname">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="birthday" class="col-md-4 col-form-label text-md-end">Дата рождения</label>
                            <div class="col-md-6">
                                <Datepicker v-model="birthday" id="birthday" class="form-control" 
                                            :locale="this.locale"
                                            :upperLimit="new Date()" />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="login" class="col-md-4 col-form-label text-md-end">Логин</label>
                            <div class="col-md-6">
                                <input v-model="login" id="login" type="login" class="form-control" name="login" required autocomplete="login">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">Пароль</label>
                            <div class="col-md-6">
                                <input v-model="password" id="password" type="password" class="form-control" name="password">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-end">Подтвердите пароль</label>
                            <div class="col-md-6">
                                <input v-model="password_confirmation" id="password-confirm" type="password" class="form-control" name="password_confirmation">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="offset-md-4 col-md-6">
                                <span class="text-danger">
                                    <strong>{{ this.error }}</strong>
                                </span>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button @click.prevent="register" 
                                        :disabled="!login || !password || !password_confirmation || !name || !surname"
                                        type="submit" 
                                        class="btn btn-primary">
                                    Зарегистрироваться
                                </button>
                                <router-link :to="{ name: 'user.login' }" class="d-inline-block mx-3">Войти</router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Datepicker from "vue3-datepicker"
    import { ru } from "date-fns/locale"

    export default {
        name: "Register",

        data() {
            return {
                login: null,
                password: null,
                password_confirmation: null,
                name: null,
                surname: null,
                birthday: null,

                error: null,
                locale: ru,
            }
        },

        mounted() {
        },

        methods: {
            register() {
                this.error = null
                axios.get('/sanctum/csrf-cookie')
                    .then(response => {
                        axios.post('/register', {
                                login: this.login,
                                password: this.password,
                                password_confirmation: this.password_confirmation,
                                name: this.name,
                                surname: this.surname,
                                birthday: this.birthday,
                        })
                            .then(res => {
                                if(res?.config.headers["X-XSRF-TOKEN"]) {
                                    localStorage.setItem('x_xsrf_token', res.config.headers["X-XSRF-TOKEN"])
                                    this.$router.push({name: 'user.index'})
                                }
                            })
                            .catch(err => {
                                this.error = err.response.data.message
                            })
                    })
            },
        },

        components: {
            Datepicker,
        },
    }
</script>

<style scoped>

</style>