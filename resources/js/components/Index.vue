<template>
    <header v-if="token" class="navbar navbar-expand-lg bd-navbar sticky-top text-bg-primary">
        <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
            <router-link :to="{ name: 'user.index' }" class="navbar-brand me-2 ms-2 ms-xxl-0 text-white">
                {{ $store.getters.me?.name }} {{ $store.getters.me?.surname }}
            </router-link>
            <div class="" id="bdNavbar">
                <div class="offcanvas-body p-0">
                    <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav ms-auto">
                        <li class="nav-item col-6 col-lg-auto">
                            <a @click.prevent="logout" href="" class="nav-link text-white py-2 px-0 px-lg-2">Выйти</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <div class="container-xxl">
        <div v-if="!token">
            <router-view></router-view>
        </div>
        
        <div v-if="token" class="row pt-3">

            <aside class="bd-sidebar col-3 ms-2 ms-xxl-0 ">
                <div class="" tabindex="-1" id="bdSidebar" aria-labelledby="bdSidebarOffcanvasLabel">

                    <div class="offcanvas-body">
                        <nav class="bd-links w-100" id="bd-docs-nav" aria-label="Docs navigation">
                    
                            <ul class="bd-links-nav list-unstyled mb-0 pb-3 pb-md-2 pe-lg-2">
                                <li class="bd-links-group py-2">
                                    <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
                                    Все события
                                    </strong>

                                    <ul v-if="$store.getters.events" class="list-unstyled fw-normal pb-2 small">
                                        <li v-for="event in $store.getters.events">
                                            <router-link :to="{ name: 'event.show', params: { id: event.id } }"
                                                        class="bd-links-link d-inline-block rounded">
                                                {{ event.title }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="bd-links-group py-2">
                                    <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
                                    Учавствую в событиях
                                    </strong>

                                    <ul v-if="$store.getters.events && $store.getters.me" class="list-unstyled fw-normal pb-2 small">
                                        <li v-for="event in $store.getters.events.filter(el => el.member_users.find(el => el.id === $store.getters.me.id))">
                                            <router-link :to="{ name: 'event.show', params: { id: event.id } }"
                                                        class="bd-links-link d-inline-block rounded">
                                                {{ event.title }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="bd-links-group py-2">
                                    <strong class="bd-links-heading d-flex w-100 align-items-center fw-semibold">
                                    Созданные мной события
                                    </strong>

                                    <ul v-if="$store.getters.events && $store.getters.me" class="list-unstyled fw-normal pb-2 small">
                                        <li v-for="event in $store.getters.events.filter(el => el.creator_user.id === $store.getters.me.id)">
                                            <router-link :to="{ name: 'event.show', params: { id: event.id } }"
                                                        class="bd-links-link d-inline-block rounded">
                                                {{ event.title }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>

                                <li class="bd-links-group py-2">
                                        <router-link :to="{ name: 'event.create' }" 
                                                @click.prevent=""
                                                type="button" 
                                                class="btn btn-success btn-sm">
                                            Создать событие
                                        </router-link>
                                </li>

                            </ul>
                        </nav>

                    </div>
                </div>
            </aside>

            <div class="col-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",

        data() {
            return {
                token: null,
            }
        },

        watch: {
            $route(to, from) {
                this.init()
            }
        },

        mounted() {
            this.init()
            this.startTimer()
        },

        beforeUnmount() {
            this.stopTimer()
        },

        methods: {
            init() {
                this.getToken()
                if(this.token) {
                    this.$store.dispatch('getMe')
                    this.$store.dispatch('getEvents')
                }
            },

            getToken() {
                this.token = localStorage.getItem('x_xsrf_token')
            },

            logout() {
                axios.post('/logout')
                    .then(res => {
                        localStorage.removeItem('x_xsrf_token')
                        this.$router.push({name: 'user.login'})
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
                    if(this.token) 
                        this.$store.dispatch('getEvents')
                }, 30000)
            }
        },
    }
</script>

<style scoped>
</style>