const vm = Vue.createApp({
    data(){
        return{
            isPurple: false,
            selectedColor: '',
            size: 150,
            fontWeight: "fw-bolder",
            fname: 'Mehedi',
            lname: 'Hasan',
            url: 'https://pisslbd.com',
            raw_url: '<a href="https://pisslbd.com" target="_blank">PISSL</a>',
            age: 20,
        }
    },
    methods: {
        increment(){
            this.age++
        },
        inputLastName(msg, event){
            event.preventDefault();
            console.log(msg);
            this.lname = event.target.value
        }
    },
    computed: {
        circle_classes(){
            return { purple: this.isPurple }
        },       
        fullName(){
            console.log('Computed!');
            return `${this.fname} ${this.lname}`
        }
    },
    watch: {
        age(newVal, oldVal){
            setTimeout( () => {
                this.age = 20
            },3000);
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