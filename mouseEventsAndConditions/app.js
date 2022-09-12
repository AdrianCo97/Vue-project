const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 46,
            x: 0,
            y: 0,
        }
    },

    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

        handleEvent(event, data){
            console.log(event)
            if(data){
                console.log(data)
            }
        },

        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount("#app")