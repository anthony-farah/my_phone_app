import Vue from 'nativescript-vue'
import VueX from 'vuex'
import Home from './pages/home.vue'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__
Vue.use(VueX)


const appStore = new VueX.Store({
  state: {
    database:{
      users:[{
        name:'herbert',
        username:'herb123',
        password:'123456',
        gold:10,
        roster:[{
          cname:'Boggert',
            attacks:[],
            defense:5,
            strength:7,
            health:50
        }]
      }]
    },
    activeUser:{
      name:'',
      username:'',
      password:'',
      roster:[]
    }
  },
  actions:{
    createUser({state, commit},input){
      const user = state.database.users.find((user)=>{
        console.log('looking for users')
        return ( user.username === input.name &&
        user.password === input.password )
      })
      if(!user){
        console.log('we are in the clear no user found')
        const newUser = {
          name:'herbert',
          username:input.name,
          password:input.password,
          gold:0,
          roster:[{
            cname:'Boggert',
              attacks:[],
              defense:5,
              strength:7,
              health:50
          }]
        }
        commit('setUserToDataBase',newUser)
        commit('setActiveUser',newUser)
      }
    },
    
    login({state, commit},input){
      console.log('I am inside of login')
        const user = state.database.users.find((user)=>{
          console.log('looking for users')
          return ( user.username === input.name &&
          user.password === input.password )
        })
        if(user){
          console.log('I am a user')
          commit('setActiveUser',user)
          return true
        }
        return false
    }
  },
  mutations: {
    setActiveUser(state,input){
      console.log('setting an active user',input)
      state.activeUser = input
    },
    setUserToDataBase(state,input){
      state.database.users.push(input)
    },

    // decreaseWeapons(state) {
    //     if(state.weapons > 0) {
    //             state.weapons--;
    //             state.engines++;
    //     }
    // }
  }
});

new Vue({
  store: appStore,
  render: (h) => h('frame', [h(Home)]),
}).$start()
