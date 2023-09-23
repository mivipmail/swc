<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Форма входа</div>

                <div class="card-body">
                    <form>

                        <div class="row mb-3">
                            <label for="login" class="col-md-4 col-form-label text-md-end">Логин</label>

                            <div class="col-md-6">
                                <input v-model="login" id="login" type="login" class="form-control" name="login" required autocomplete="login" autofocus>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">Пароль</label>

                            <div class="col-md-6">
                                <input v-model="password" id="password" type="password" class="form-control" name="password" required autocomplete="current-password">
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
                            <div class="col-md-8 offset-md-4">
                                <button @click.prevent="logIn" 
                                        :disabled="!login || !password"
                                        type="submit" 
                                        class="btn btn-primary">
                                    Войти
                                </button>
                                <router-link :to="{ name: 'user.register' }" class="d-inline-block mx-3">Зарегистрироваться</router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",

        data() {
            return {
                login: null,
                password: null,
                error: null,
            }
        },

        mounted() {
        },

        methods: {
            logIn() {
                this.error = null
                axios.get('/sanctum/csrf-cookie')
                    .then(response => {
                        axios.post('/login', {
                            login: this.login,
                            password: this.password
                        })
                            .then(res => {
                                if(res?.config.headers["X-XSRF-TOKEN"]) {
                                    localStorage.setItem('x_xsrf_token', res.config.headers["X-XSRF-TOKEN"])
                                    this.$router.push({name: 'user.index'})
                                }
                                else
                                    this.error = 'Не удалось авторизоваться'
                            })
                            .catch(err => {
                                this.error = 'Не удалось авторизоваться'
                                console.log('err', err)
                            })
                    })
            },
        },
    }
</script>

<style scoped>
</style>