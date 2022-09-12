const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            books: [
                {title:"Name of the wind", author:"Patrick Rothfuss"},
                {title:"The way of kings", author:"Brandon Sanderson"},
                {title:"The final empire", author:"Brandon Sanderson"}
            ]
        }
    },

    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount("#app");