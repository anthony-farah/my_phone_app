import Vue from 'nativescript-vue'
import VueX from 'vuex'
import Home from './pages/home.vue'


declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__
Vue.use(VueX)

interface ActiveUser {
  name:string,
  team: string,
  username:string,
  password:string,
  roster:Character[]
}

interface Character {
  cname:string,
    attacks: string[],
    defense:number,
    strength:number,
    health:number,
    src: string
}


const appStore = new VueX.Store({
  state: {
    database:{
      users:[
        {
        name:'herbert',
        username:'herb123',
        password:'123456',
        gold:10,
        team:'Hysteria',
        roster:[{
          cname:'Boggert',
            attacks:[],
            defense:5,
            strength:7,
            health:50
        }
      ]
      }]
    },
    activeUser:<ActiveUser> {
      name:'',
      team: '',
      username:'',
      password:'',
      roster:[{
        cname:'test',
        src:'test.png'
      }]
    }
  },
  actions:{
    chooseTeam({state, commit},input){
        const au = state.activeUser
        au.team = input
        commit('updateDataBaseUser',au)
        commit('setActiveUser',au)
    },
    chooseFighter({state, commit},input){
        const au = state.activeUser
        au.roster.push(input)
        commit('updateDataBaseUser',au)
        commit('setActiveUser',au)
    },
    createUser({state, commit},input){
      const user = state.database.users.find((user)=>{
        return ( user.username === input.name &&
        user.password === input.password )
      })
      if(!user){
        const newUser = {
          name:'herbert',
          username:input.name,
          password:input.password,
          team:'',
          gold:0,
          roster:[]
        }
        commit('setUserToDataBase',newUser)
        commit('setActiveUser',newUser)
      }
    },
    
    login({state, commit},input){
        const user = state.database.users.find((user)=>{
          return ( user.username === input.name &&
          user.password === input.password )
        })
        if(user){
          commit('setActiveUser',user)
          return true
        }
        return false
    }
  },
  mutations: {
    setActiveUser(state,input){
      state.activeUser = input
    },
    setUserToDataBase(state,input){
      state.database.users.push(input)
    },
    updateDataBaseUser(state,input){
      const st = state.database.users
      st.find((user)=>{
        if( user.username === input.name &&
        user.password === input.password )
          st[st.indexOf(user)] = input
      })
    }
  }
});

new Vue({
  store: appStore,
  render: (h) => h('frame', [h(Home)]),
}).$start()
