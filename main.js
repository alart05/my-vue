var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        classCounter: ""
    },
    methods: {
        counterAdd() {
            this.counter = this.counter + 1
            if(this.counter > 0) {
                this.classCounter = "counter-green"
            }
        },
        counterInc() {
            this.counter = this.counter - 1
            if(this.counter < 0) {
                this.classCounter = "counter-red"
            }
        }
    }
})