
Vue.filter('op',function(value){
    return value.split(' ').reverse();
});
Vue.filter('reverse',function(value){
    return value.split(' ').reverse().join(' ')
})


let message = {
  props: ["type","message","header"], 
  template: `<div :class="type">
    <span @click.prevent="close">O</span>
    <div class= "header">{{ header }}</div>
     {{message}}
     </div>`,
  methods: {
    close: function () {
      this.$emit("close");
    },
  },
};





let user = {
    props:{
        value:Object,
    },
    data() {
        return {
            user : JSON.parse(JSON.stringify(this.value))
        }
    },
    methods:{
        save:function(){
            this.$emit('input',this.user)
        }
    },
  template: `
    <form @submit.prevent = "save">
    <p><slot name="header"></slot></p>
        
            <label for=""> Prénom </label>
            <input type="text" v-model="user.firstName"/> 
       
        
            <label for=""> Nom </label>
            <input type="text" v-model="user.lastName"/>
        
        <button type="submit"> Envoyer</button>
        <p><slot name="footer"></slot></p>
    </form> `,
};

let counter = {
  data: function () {
    return {
      count: 0,
    };
  },
  props: {
    start: { type: Number, default: 0 },
  },
  computed: {
    total: function () {
      return this.start + this.count;
    },
  },
  methods: {
    increment: function () {
      this.count++;
    },
  },
  template: `<button @click="increment"> {{ total }} </button>  `,
  mounted: function () {
    this.count = this.start;
  },
};
let opp =function(value,prefix,suffix){
    return (prefix+value.toUpperCase()+suffix)
};

let vm = new Vue({
  el: "#app",  
  components: { message, counter,user },
  filters:{opp},
  data: {
    fullName:"bolodjo-bolodjo",
    message: "one day",
    start: 4,
    alert: false,
    user: {
      firstName: "jean",
      lastName: "deLaTour",
    },
    nom:"sahid",
    prenom:"djinadou",    
    succes:true,
    
    correct: 'Salut',
    userword: '',
    bon:' Correct',
    mauvais: 'Incorrect' ,
    verif: false,
    visible: true,
  },
  methods: {

      Vuser: function() {
        this.visible= true;
        if(this.userword === this.correct ) {
            this.verif = true;
            console.log("dd");
        }else{
            this.verif = false;
        }
    },
  
    lof:function(){
        console.log("voila");
        console.log(this.userword)
    },


    showAlert: function () {
      this.alert = true;
      console.log("long")
    },
    hideAlert: function () {
      this.alert = false;
    },

    click1: function() {
        console.log('click1')
    },
    click2: function() {
        console.log('click2')
    }
},
computed:{
      cls:function(){
          console.log('cls called')
          return this.succes===true ? 'succes' : 'error'
      },
      fnom:{
       get:function(){
        return(this.nom+" "+this.prenom)
       },
       set:function(value){
        let part = value.split(' ');
        this.nom = part[0],
        this.prenom = part[1]
       }
       
      },
    resultat: function() {
        return (this.verif== true ? this.bon : this.mauvais)
    },
    ds: function( ) {
        return (this.verif== true ? ' succes' : 'echec')
    }
  },


});
