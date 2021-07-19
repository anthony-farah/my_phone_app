<template>
  <Page>
<FlexboxLayout backgroundImage="https://c4.wallpaperflare.com/wallpaper/733/88/989/dark-black-and-white-abstract-black-background-wallpaper-preview.jpg" flexDirection="column" justifyContent="center" class="full-height"> 
<Image src="https://api.freelogodesign.org/files/f39d8c4e96464747b3c30629aec63e2a/thumb/logo_200x200.png?v=637614586990000000" width="200" height="200" class="logo-container" />
<StackLayout class="container">

<Button text="Login" @tap="goTologin" class="my-button" backgroundColor="rgb(224, 0, 0)"/> 

<Button text="Create an Account" @tap="goTocreate" class="my-button" backgroundColor="rgb(224, 0, 0)"/>

<Button text="Settings" @tap="goTosettings" class="settings" backgroundColor="gray"/>

</StackLayout>
</FlexboxLayout>

</Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import login from '../pages/login.vue';
  import create from '../pages/create.vue';
  import settings from '../pages/settings.vue';
  
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
        goTologin() {
            this.$navigateTo(login)
        },
        goTocreate() {
            this.$navigateTo(create)
        },
        goTosettings() {
            this.$navigateTo(settings)
        }
    },
    watch: {
      characterName(){
        console.log('character name changed')
      }
    },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
  });
</script>

<style scoped lang="scss">
  @import '@nativescript/theme/scss/variables/blue';

  // Custom styles
  
  .border-bottom {
      border-bottom-width: 1;
      border-bottom-color: black;
      margin-bottom: 40;
    padding-bottom: 8;
  }
  .my-button {
    backgroundColor: rgb(103, 119, 118);
    color: white;
    font-weight: bold;
    border-radius: 30;
    padding-top: 14;
    padding-bottom: 14;
    text-transform: uppercase;
    letter-spacing: 0.1;
    margin-bottom: 25;
    margin-top: 15;
    box-shadow: (10px 10px 4px #ddd)
  }
  .full-height {
    height: 100%;
  }
  .container {
    margin-top: 100;
    margin-left: 34;
    margin-right: 34;
  }
  .title {
    margin-left: 65;
    margin-right: 34; 
    margin-bottom: 250;
    font-family:'Fantasy', 'Copperplate';
  }
  .settings {
    font-weight: bold;
    border-radius: 30;
    padding-top: 14;
    padding-bottom: 14;
    text-transform: uppercase;
    letter-spacing: 0.1;
    margin-bottom: 25;
    margin-top: 15;
  }
  </style>
