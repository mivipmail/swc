<template>
    <table class="table">
        <thead>
            <tr>
                <th>Новое событие</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border-0">
                    <form>

                        <div class="row mb-3">
                            <label for="title" class="col-md-4 col-form-label text-md-end">Название</label>
                            <div class="col-md-6">
                                <input v-model="title" id="title" class="form-control" name="title">
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="content" class="col-md-4 col-form-label text-md-end">Описание</label>
                            <div class="col-md-6">
                                <textarea v-model="content" id="content" class="form-control" name="content"></textarea>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="offset-md-8">
                                <button @click.prevent="storeEvent" 
                                        type="submit" 
                                        v-bind:disabled="!title || !content"
                                        class="btn btn-primary">
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </form>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "Create",

        data() {
            return {
                title: null,
                content: null,
            }
        },

        computed: {
            disabled() {
                return !this.title || !this.content
            }
        },
        
        mounted() {
        },

        methods: {
            storeEvent() {
                axios.post(`/api/events`, {
                        title: this.title,
                        content: this.content,
                        user_id: this.$store.getters.me.id
                    }
                )
                    .then(res => {
                        this.$router.push({name: 'event.show', params: {id: res.data.result.id}})
                    })
                    .catch(err => {
                        console.log(err.response.data.error)
                    })
            },
        },
    }
</script>
