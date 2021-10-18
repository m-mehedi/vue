const vm = Vue.createApp({
    data(){
        return{
            fname: 'Mehedi',
            lname: 'Hasan',
            url: 'https://pisslbd.com'
        }
    },
    methods: {
        fullName(){
            return `${this.fname} ${this.lname}`
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.name = 'Mehedi Hasan'
// },3000)

// const app = Vue.createApp({
//     data(){
//         return{
//             status: false,
//             url: 'www.google.com',
//             showBooks: true,
//             books: [
//                 { title: 'Name of the wind 1', author:'Author 1'},
//                 { title: 'Name of the wind 2', author:'Author 2'},
//                 { title: 'Name of the wind 3', author:'Author 3'},
//             ],
//             title: 'The lost world',
//             age: 5,
//             x:0,
//             y:0,
//         }
//     },
//     methods:{
//         changeTitle(title){
//             console.log('You changed the title!')
//             // this.title = 'The new moon'
//             this.title = title
//         },
//         toogleShowBooks(){
//             this.showBooks = !this.showBooks
//             this.status= "false"
//         },
//         handleEvent(e, data){
//             // console.log(e);
//             console.log(e.type);
//             if(data){
//                 console.log(data);
//             }
//         },
//         handleMousemove(e){
//             this.x = e.offsetX
//             this.y = e.offsetY

//         }
//     }
// })

// app.mount('#app')