const app = Vue.createApp({
    data() {
        return {
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 46
        }
    },

    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
});

app.mount("#app")