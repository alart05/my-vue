var app = new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        counterNext() {
            this.counter = this.counter + 1
            // const temp = this.counter + 1
            // this.counter = temp
        }
    }
})