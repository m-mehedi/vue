const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            title: 'The lost world',
            age: 5
        }
    },
    methods:{
        changeTitle(title){
            console.log('You changed the title!')
            // this.title = 'The new moon'
            this.title = title
        },
        toogleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')