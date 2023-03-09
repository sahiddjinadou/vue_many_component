class NotificationStore     
{
    constructor ()
    {
        this.state = {
            count:0
        }
    }
    increment()
     {
         this.state.count ++; 
         console.log("bonjou");
     }
    decrement()
     {
         this.state.count --; 
     }
}
let notifications_store = new NotificationStore()
console.log(notifications_store.increment())
 let counter = {     
    data:function(){
        return{
            state:notifications_store.state
        }
    },
    template:`<div> 
            {{state}}
    </div>`
 }
 let notifications = {
    components:{counter},
   
    methods:{
        addNotification:function () {
            notifications_store.increment()
        },
    },
    template:` <div>
    <counter ></counter>
    <button @click="addNotification()">++</button>
    </div>`,
 }
 
 
 let vm = new Vue({
    el: "#app",         
    components:{
        notifications,
        counter,
    },
    data:{
        nom:"djinadou",
        notification_count:0,

    },
})