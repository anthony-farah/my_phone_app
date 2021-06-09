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
      users:[]
    },
    activeUser:{
      name:'',
      username:'',
      password:'',
      roster:[]
    }
  },
  actions:{
    createUser({state},input){
      // state.activeUser.map()
      // }

    },
    
    login({state, commit},input){
      try {
        if(!input.name) throw 'STOP'
      } catch(e){

      }
      const user = state.database.users.find((user)=>{
        return ( user.name === input.name &&
        user.password === input.password )
      })
      if(user) commit('setActiveUser',user)
    }
  },
  mutations: {
    setActiveUser(state,input){
      state.activeUser = input
    },
    setUserToDataBase(state){
      // state.database.users++
      // }
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
