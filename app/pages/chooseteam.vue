<template>
<Page>
<ActionBar backgroundColor="black" >
<NavigationButton visibility="collapsed"/>
</ActionBar>
<AbsoluteLayout backgroundImage="https://c4.wallpaperflare.com/wallpaper/733/88/989/dark-black-and-white-abstract-black-background-wallpaper-preview.jpg">

<Label text="CHOOSE" color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" marginLeft="70" marginTop="50" class="title" />
<Label text="A" color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" marginTop="105" marginLeft="170" class="title" />
<Label text="TEAM" color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" marginTop="165" marginLeft="110" class="title" />

<Button text="Hysteria" @tap="pickSide('Hysteria')" left="35" top="320" width="100" height="100" fontSize="19" class="button" backgroundColor="rgb(224, 0, 0)"/> 
<Button text="Serenity" @tap="pickSide('Serenity')" left="210" top="320" width="100" height="100" fontSize="19" class="button" color="black" backgroundColor="white"/> 
</AbsoluteLayout>


</Page>
</template>


<script lang="ts">
  import Vue from "nativescript-vue";
  import chome from '../pages/chome.vue';
  import firstcharacter from '../pages/firstcharacter.vue';
  import {mapActions} from 'vuex'


  export default Vue.extend({

    data(){
      return {
        usernameInput: '',
        passwordInput: '',
        loggedIn: false,
        characterName:'',
        health:2,
        moves:[]
      }
    },


  methods: {
        ...mapActions(['chooseTeam']),
        goTochome() {
            this.$navigateTo(chome)
        },
        goTofirstcharacter() {
            this.$navigateTo(firstcharacter)
        },
        pickSide(team:string){
            this.chooseTeam(team)
            this.goTofirstcharacter()
            
        }
    },
  });
</script>

<style scoped lang="scss">
  // Custom styles
  

  .title {
    margin-left: 65;
    margin-right: 34; 
    margin-bottom: 250;
    font-family:'Fantasy', 'Copperplate';
  }
  .button {
      border-radius: 25;
      font-weight: bold;
      font-family:'Fantasy', 'Papyrus';
        // filter:drop-shadow(10px 10px 4px #ddd);
  }
</style>